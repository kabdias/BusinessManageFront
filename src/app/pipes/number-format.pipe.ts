import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat',
  standalone: true
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: any): string {


    const numericValue = Number(value);


    if (!isNaN(numericValue) && numericValue >= 0) {
      return numericValue.toLocaleString('fr-FR', { style: "currency", currency: "EUR" });

    } else  {

      return '';

    } 
  }
}
