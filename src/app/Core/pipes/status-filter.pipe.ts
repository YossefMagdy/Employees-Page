import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeList } from '../Interface/employee-list';

@Pipe({
  name: 'statusFilter'
})
export class StatusFilterPipe implements PipeTransform {

  transform(employe:EmployeeList[], SearchByStatus: string): EmployeeList[] {
    if(SearchByStatus.length>0){
      return employe.filter((e)=>{
        return e.Status==SearchByStatus
      });
    }
    
    else{
      return employe
    }
  }
}
