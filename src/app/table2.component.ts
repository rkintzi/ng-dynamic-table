
import { Component, Input } from '@angular/core';

export interface Column {
    title: string;
    get(d: any): string;
}

@Component({
  selector: 'dtable',
  template: `
    <table>
        <thead>
            <tr>
                <th>Full name
                <th>Phone no.
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let r of rows">
                <td>{{ r.name }}
                <td>{{ r.phone }}
            </tr>
        </tbody>
    </table>
  `
})
export class TableComponent  { 
    @Input() rows: any[];
}
