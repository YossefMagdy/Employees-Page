import { Pipe, PipeTransform } from '@angular/core';
import { EmployeService } from '../Service/employe.service';
import { EmployeeList } from '../Interface/employee-list';

@Pipe({
  name: 'JobFilter'
})
export class FilterPipe implements PipeTransform {

  transform(employe:EmployeeList[], SearchByJob: string): EmployeeList[] {
    if(SearchByJob.length>0){
      return employe.filter((e)=>{
        return e.Job.includes(SearchByJob)
      });
    }
    
    else{
      return employe
    }
  }

}
