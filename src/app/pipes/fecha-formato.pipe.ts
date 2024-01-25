import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaFormato'
})
export class FechaFormatoPipe implements PipeTransform {

  transform(fecha, incluirHora: boolean = false, ...args: unknown[]): string {
    if(!fecha) return ''
    const fechaObj = new Date(fecha);
    const dia = fechaObj.getDate();
    const mes = fechaObj.getMonth() + 1; // Los meses en JavaScript son base 0, por eso se suma 1
    const anio = fechaObj.getFullYear();
    const anios = `${anio}`.split('')
    const finales= `${anios[2]}${anios[3]}`
    const hora = fechaObj.getHours();
    const minutos = fechaObj.getMinutes();
    const segundos = fechaObj.getSeconds();
      let fechaFormateada = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${finales}`;
    
      if (incluirHora) {
        // fechaFormateada += ` ${padStartNumber(hora)}:${padStartNumber(minutos)}:${padStartNumber(segundos)}`;
        fechaFormateada += ` ${padStartNumber(hora)}:${padStartNumber(minutos)}`;
      }

      function padStartNumber(cadena, number?){
        number = (!number) ? 2 : number
        return cadena.toString().padStart(number, '0')
      }
    
      return fechaFormateada;
  }

}
