import { Component, Input } from '@angular/core';

@Component({
    selector: 'phone-no',
    template: '<a [attr.href]="\'tel:\'+data">{{data}}',
})
export class PhoneNumberComponent {
    @Input() data: string;
}
