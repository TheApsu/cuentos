import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuentos',
})
export class CuentosPipe implements PipeTransform {
  transform(url, id: string): string {
    const name = this.removeAccents(id.toLowerCase().replace(/ /g, '_'));
    const link = `${url}/cuentos/${name}.pdf`;
    return link;
  }

  removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}
