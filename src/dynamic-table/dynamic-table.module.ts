import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DynamicTableComponent } from './dynamic-table.component';
import { TableCell, TableCellData } from './helper.directives';


@NgModule({
    imports: [ BrowserModule ],
    declarations: [
        DynamicTableComponent,
        TableCell,
        TableCellData,
    ],
    exports: [ DynamicTableComponent ],
})
export class DynamicTableModule {}
