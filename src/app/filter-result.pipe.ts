import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterResult'
})
export class FilterResultPipe implements PipeTransform {

  transform(value: any,checked, filterString:string , propName , prp):any{
    let resultSearch =[];
    if (value.length === 0 || filterString === '' || value === resultSearch){
      return value;
    }
    if(checked===true){
    for( let item of value){
      if(item[propName]==filterString || item[prp]==filterString){
        resultSearch.push(item)
      }

    }
    return resultSearch;
  }else{
    return value
  } 

 
    //   resultSearch= (filterString)?
    //   value.filter(item =>  item.storeName.toLowerCase().includes(filterString.toLowerCase()) ) :
    //    value;

    // }
  }

}
