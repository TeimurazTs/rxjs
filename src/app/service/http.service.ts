import { Injectable } from '@angular/core';
import { Observable, concatMap, debounceTime, delay, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor() {}

  callToServer(data: any): Observable<any> {
    if (data === '1') {
      return from([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ]).pipe(concatMap((number) => of(number).pipe(delay(2000))));
    } else if (data === '2') {
      return from([
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
      ]).pipe(concatMap((number) => of(number).pipe(delay(2000))));
    } else if (data === '3') {
      return from([
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '-',
        '+',
        '=',
        ']',
        '[',
        '`',
        '_',
        '',
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
      ]).pipe(concatMap((number) => of(number).pipe(delay(2000))));
    }
    return from([]);
  }
}
