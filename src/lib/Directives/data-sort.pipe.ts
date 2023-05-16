import {Input, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dataSort'
})
export class DataSortPipe implements PipeTransform {


  transform(data: any[] | any, sortBy: string, ascending: boolean): any[] {
    console.log(data.data.value);
    data.data.value.sort((a: { [x: string]: number; }, b: { [x: string]: number; }) => {
      if (a[sortBy] < b[sortBy]) {
        return ascending ? -1 : 1;
      } else if (a[sortBy] > b[sortBy]) {
        return ascending ? 1 : -1;
      } else {
        return 0;
      }
    });
    return data;
  }



}
