import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeList } from '../Interface/employee-list';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(employe:EmployeeList[], SearchByName: string): EmployeeList[] {
    if(SearchByName.length>0){
      return employe.filter((e)=>{
        return e.Name.includes(SearchByName)
      });
    }
    
    else{
      return employe
    }
  }

}
