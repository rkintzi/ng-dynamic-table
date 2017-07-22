import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, PhoneNoComponent }  from './app.component';
import { DynamicTableComponent, TableCell, TableCellData } from './table.component';
import { TableComponent } from './table2.component';
import { DataService } from './data.service'

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ 
        AppComponent, 
        DynamicTableComponent, 
        TableComponent, 
        TableCellData,
        TableCell,
        PhoneNoComponent,
    ],
    providers: [ DataService ],
    bootstrap: [ AppComponent ],
    entryComponents: [PhoneNoComponent],
})
export class AppModule { }
