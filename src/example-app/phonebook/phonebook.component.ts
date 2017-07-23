import { Component } from '@angular/core';
import { Column } from '../../dynamic-table';
import { PhoneBookService } from './phonebook.service';
import { PhoneNumberComponent } from './phone-number.component';


@Component({
  selector: 'phonebook',
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
    <dyntable
        [columns]="columns"
        [rows]="rows"
        [more]="more"
        [loading]="loading"
        (load)="onLoadMore($event)"></dyntable>
  `,
})
export class PhoneBookTableComponent  {
    columns = [
        new Column("Full name", (d: any) => d.name),
        new Column("Phone no.", (d: any) => d.phone, PhoneNumberComponent),
    ];
    rows: any[] = [];
    more = true;
    loading = false;

    constructor(private service: PhoneBookService) {
        this.load();
    }

    onLoadMore() {
        this.load();
    }

    private load() {
        this.loading = true;
        this.service.get(this.rows.length).subscribe((service: any)=>{
            this.more = this.rows.length < service.length;
            this.rows = service;
            this.loading = false;
        });
    }
}
