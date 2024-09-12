import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(array: any[], sortcase?:boolean): any[] {
    //console.log("in transform........."); 
    /** asc: ascending, desc descending ,
     * false : sensitive, true : insensitive
    */
    //console.log(sortcase);
    if(typeof array[0]=='string')
      return this.stringSort(array, sortcase)
    else if(typeof array[0]=='number')
      return this.numberSort(array);
    else
      return array;
  }
  stringSort(array:any[], sortcase?:boolean){
    if(sortcase==true)
      return array.sort((s1,s2)=>s1.localeCompare(s2))
    else 
      return array.sort();
  }
  numberSort(array:any[]){
      return array.sort((n1,n2)=>n1-n2);
  }
}
