import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { List } from 'immutable';
import { PeriodicElement } from './datamodel/PeriodicElement';

@Component({
  template: `<app-about-presentation
                [elements]="elements" 
                (removeLast_)="removeLastUser($event)"
                (recreate)="recreateList($event)"
              >
            </app-about-presentation>
            <button mat-raised-button color="primary" (click)="removeLastUser($event)">Delete From Smart</button>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutSmartComponent implements OnInit {

  public elements: List<PeriodicElement>;

  constructor() { }

  removeLastUser(event: any): void {
    this.elements = this.elements.delete(0);
  }

  recreateList(event:any): void {
    this.elements = List.of(
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' }
    );
  }

  ngOnInit() {
    this.recreateList(null);
  }

}