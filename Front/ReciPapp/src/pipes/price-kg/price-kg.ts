import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'priceKg',
})
export class PriceKgPipe implements PipeTransform {


  transform(value: number, ...args) {
    let toPesos: number = value * 1000;
    return '$' + toPesos;
  }
}
