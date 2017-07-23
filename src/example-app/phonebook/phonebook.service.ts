import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PhoneBookService {
    get(next?: number): Observable<any> {
        let s = new Subject<any>();
        window.setTimeout(() => {
            s.next(data.slice(0, next+limit));
            s.complete();
        }, timeout);
        return s.asObservable();
    }
}
const timeout = 1 * 1000;
const limit = 2;
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
