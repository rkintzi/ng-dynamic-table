import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { DynamicTableComponent } from './table.component';
import { TableComponent } from './table2.component';
import { DataService } from './data.service'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
      AppComponent, 
      DynamicTableComponent, 
      TableComponent, 
  ],
  providers: [ DataService ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
