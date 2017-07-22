
import { Component, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';

import { Observable } from 'rxjs/Observable';

export interface Column {
    title: string;
    get(d: any): string;
}

@Component({
  selector: 'dyntable',
  styles: [ `
    tfoot td { text-align: center; }
  `],
  template: `
    <table *ngIf="columns?.length > 0">
        <thead>
            <tr><th *ngFor="let c of columns">{{ c.title }}</th></tr>
        </thead>
        <tbody>
            <tr *ngFor="let r of rows">
                <td *ngFor="let c of columns">{{ c.get(r) }}</td>
            </tr>
        </tbody>
    </table>
  `
})
export class DynamicTableComponent  { 
    @Input() columns: Column[];
    @Input() rows: any[];
}
