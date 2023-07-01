import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeList } from '../Interface/employee-list';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  
  transform(employe:EmployeeList[], SearchBytype: string): EmployeeList[] {
    if(SearchBytype.length>0){

      return employe.filter((e)=>{
        return e.UserType.includes(SearchBytype)
      });
    }
    
    else{
      return employe
    }
  }

}
