import {
    Component,
    ComponentFactoryResolver,
    EventEmitter,
    Input,
    Output,
    Type,
} from '@angular/core';

export interface ColumnSpec {
    title: string;
    get(d: any): string;
    component?: Type<any>;
}

export class Column implements ColumnSpec {
    constructor(
        public title: string,
        public get: (d: any) => string,
        public component?: Type<any>,
    ) {}
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
                <td *ngFor="let c of columns" [cellData]="c.get(r)"><ng-container *cell="c">{{ c.get(r) }}</ng-container></td>
            </tr>
        </tbody>
        <tfoot *ngIf="more">
            <tr>
                <td [attr.colspan]="columns?.length">
                    <a href="#" *ngIf="!loading" (click)="load.emit()">Load more</a>
                    <span *ngIf="loading">Loading ...</span>
                </td>
            </tr>
        </tfoot>
    </table>
  `,
})
export class DynamicTableComponent  {
    @Input() columns: Column[];
    @Input() rows: any[];
    @Input() more: boolean;
    @Input() loading: boolean;
    @Output() load = new EventEmitter<void>();
}
