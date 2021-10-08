import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {
    unit: number = 1.60934;

  transform(value : number, targetUnits:string): number | string {
    if(!value) return '';

    switch(targetUnits){
        case 'km':
            return value * this.unit
        case 'm':
            return value * this.unit
        case 'cm':
            return value * this.unit * 1000 * 1000
        default: 
        throw new Error("target unit is not supprted")
    }
  }

}