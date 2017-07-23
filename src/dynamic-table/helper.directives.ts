import {
    ComponentFactoryResolver,
    Directive,
    Host,
    Input,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';

import { Column } from './dynamic-table.component';


export interface CellComponent {
    data: any;
};

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
