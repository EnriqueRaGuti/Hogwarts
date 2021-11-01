import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultado = [];
    for(const e of value) {
      if(e.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultado.push(e);
      }
    }
    return resultado;
  }

}
