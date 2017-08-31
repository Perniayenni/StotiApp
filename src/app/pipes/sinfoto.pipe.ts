import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let img = 'assets/img/noimage.png';

    if( !value ){
      return img;
    }

    return (value.length > 0) ? value[1].url : img;
  }

}
