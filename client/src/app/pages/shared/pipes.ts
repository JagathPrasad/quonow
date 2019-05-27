import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pricefilter',
    pure: false
})

export class PriceFilter implements PipeTransform {

    transform(array: any[], query: string): any {
        debugger;
        //alert('a pipe');
        // return array.filter(a => a.price.indexOf(query.toLowerCase()));
    }
}



@Pipe({
    name: 'testone'
})

export class TestingFilter implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query != undefined) {
            return _.filter(array, row =>
                row.Price > query
            );
        }
        return array;
    }
}

// @Pipe({
//     name: 'testone'
// })

// export class TestingFilter implements PipeTransform {

//     transform(array: any[], query: any[]): any {
//         console.log('array', array);
//         console.log('query', query);
//         debugger;

//         if (array != undefined) {
//             debugger;
//             console.log('a', array);
//             return _.filter(array, row =>
//                 row.Price > query[0] || row.Price < query[1]
//             );
//         }
//         return array;
//     }
// }


@Pipe({
    name: 'namefilter'
})

export class NameFilter implements PipeTransform {

    transform(array: any[], query: string): any {

        if (query != undefined) {
            return _.filter(array, row =>
                row.ProductName.toLowerCase().indexOf(query.toLowerCase()) > -1
            );
        }
        return array;
    }
}