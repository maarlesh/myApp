import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'len'
})
export class LenPipe implements PipeTransform {

  transform(value: string, ...args: string[]): number {
    return value.length;
  }

}
