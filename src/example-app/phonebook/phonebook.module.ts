import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DynamicTableModule } from '../../dynamic-table';

import { PhoneBookTableComponent } from './phonebook.component';
import { PhoneNumberComponent } from './phone-number.component';
import { PhoneBookService } from './phonebook.service';


@NgModule({
    imports: [ BrowserModule, DynamicTableModule ],
    declarations: [
        PhoneBookTableComponent,
        PhoneNumberComponent,
    ],
    exports: [ PhoneBookTableComponent ],
    entryComponents: [ PhoneNumberComponent ],
    providers: [ PhoneBookService ],
})
export class PhoneBookModule {}
