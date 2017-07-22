
import { 
    Component, 
    ComponentFactoryResolver,
    Directive,
    EventEmitter, 
    Host,
    Input, 
    Output, 
    SimpleChanges,
    TemplateRef,
    Type,
    ViewContainerRef,
} from '@angular/core';

import { Observable } from 'rxjs/Observable';

export interface CellComponent {
    data: any;
};

export interface Column {
    title: string;
    get(d: any): string;
    component?: Type<any>;
}

@Directive({
    selector: '[cellData]'
})
export class TableCellData {
    @Input('cellData') data: any
}

@Directive({
    selector: '[cell]',
})
export class TableCell {
    @Input('cell') set column(c: Column) {
        if (c.component) {
            let componentFactory = this.componentFactoryResolver
                .resolveComponentFactory(c.component);
            this.viewContainer.clear();
            let componentRef = this.viewContainer.createComponent(componentFactory);
            (<CellComponent>componentRef.instance).data = this.cellData.data;
        } else {
            this.viewContainer.clear();
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        @Host() private cellData: TableCellData,
    ) { }
    
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
