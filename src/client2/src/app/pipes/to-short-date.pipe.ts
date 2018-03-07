import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toShortDate'
})
export class ToShortDatePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if(value.toLowerCase() === 'asap') {
            return 'dès que possible';
        } else if(value.indexOf('-') > -1) {
            let fullDate, rest;
            [fullDate, rest] = value.toLowerCase().split('t'); // 2018-02-24 'T' 11:34:54.931Z

            let year, month, date;
            [year, month, date] = fullDate.split('-'); // ['2018', '02', '24']

            return `${date}/${month}/${year}`;
        } else {
            return '--';
        }
    }

}
