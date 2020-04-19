import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postalcodefilter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, postalcode: String):any{ 
    if (!postalcode) {return value;}
    let solution = value.filter(v =>{
      if (!v) {return;}
      return v.toLowerCase().indexOf(postalcode.toLowerCase())!== -1;
    })
     return solution;   
  }
}
