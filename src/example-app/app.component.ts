import { Component, Input, Type } from '@angular/core';
import { Column as DynColumn } from '../dynamic-table';

import { Subject } from 'rxjs/Subject';

class Column implements DynColumn {
    constructor(
        public title: string,
        public get: (d: any) => string,
        public component?: Type<any>,
    ) {}
}
@Component({
    selector: 'phone-no',
    template: '<a [attr.href]="\'tel:\'+data">{{data}}',
})
export class PhoneNoComponent {
    @Input() data: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello dynamic table</h1>
    <phonebook></phonebook>
  `,
})
export class AppComponent  {
}
