import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {
    get(): Observable<any> {
        let s = new Subject<any>();
        window.setTimeout(() => {
            s.next(data.slice(0, data.length));
            s.complete();
        });
        return s.asObservable();
    }
}
const data = [
    {
        name: "Jan Nowak",
        phone: "55 555 555",
    },
    {
        name: "Kasia Kowalska",
        phone: "66 666 666",
    },
    {
        name: "Jan Nowak",
        phone: "55 555 555",
    },
    {
        name: "Kasia Kowalska",
        phone: "66 666 666",
    },
    {
        name: "Jan Nowak",
        phone: "55 555 555",
    },
    {
        name: "Kasia Kowalska",
        phone: "66 666 666",
    },
];
