import { Component, Input, Type } from '@angular/core';
import { Column as DynColumn } from './table.component';
import { DataService } from './data.service';

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
  styles: [
      `:host >>> dyntable table { border-collapse: collapse }`,
      `:host >>> dyntable td,
       :host >>> dyntable th
       { 
            padding: 3px 5px;
            border: 1px solid #e0e0e0; 
       }`,
      `:host >>> dyntable thead tr {
            background-color: #f0f0f0;
       }`,
      `:host >>> dyntable tbody tr:nth-child(2n+2) {
            background-color: #fafafa;
       }`,
      `:host >>> dyntable table { width: 100%; }`,
      `:host >>> dyntable th { text-align: left; }`,
  ],
  template: `
    <h1>Hello dynamic table</h1>
    <dyntable 
        [columns]="columns" 
        [rows]="rows"  
        [more]="more"
        [loading]="loading"
        (load)="onLoadMore($event)"></dyntable>
  `,
})
export class AppComponent  {
    columns = [
        new Column("Full name", (d: any) => d.name),
        new Column("Phone no.", (d: any) => d.phone, PhoneNoComponent),
    ];
    rows: any[] = [];
    more = true;
    loading = false;
   
    constructor(private data: DataService) {
        this.load();
    }

    onLoadMore() {
        this.load();
    }

    private load() {
        this.loading = true;
        this.data.get(this.rows.length).subscribe((data: any)=>{
            this.more = this.rows.length < data.length;
            this.rows = data;
            this.loading = false;
        });
    }
}
