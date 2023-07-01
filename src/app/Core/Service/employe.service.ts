import { Injectable, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { EmployeeList } from '../Interface/employee-list';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  position:number=0
  Id:number=99
  ELEMENT_DATA: EmployeeList[] = [
    { Position: 0, Status: 'فعال', Name: 'محمد', UserName: 100, UserType: 'حامل الكارت', Job: 'مدير', MobilNumber: 1258339252 },
    { Position: 0, Status: 'غير فعال', Name: 'يوسف', UserName: 100, UserType: 'مدير الهيكل التنظيمي', Job: 'محاسب', MobilNumber: 1258339252 },
    { Position: 0, Status: 'فعال', Name: 'اسلام', UserName: 100, UserType: 'حامل الكارت', Job: 'محاسب', MobilNumber: 1258339252 },
    { Position: 0, Status: 'فعال', Name: 'مصطفي', UserName: 100, UserType: 'مدير الهيكل التنظيمي', Job: 'مدير', MobilNumber: 1258339252 },
    { Position: 0, Status: 'غير فعال', Name: 'عبدالرحمن ', UserName: 100, UserType: 'حامل الكارت', Job: 'مدير', MobilNumber: 1149929873 },
    { Position: 0, Status: 'غير فعال', Name: 'احمد', UserName: 100, UserType: 'حامل الكارت', Job: 'محاسب', MobilNumber: 1258339252 },
    { Position: 0, Status: 'غير فعال', Name: 'ختام', UserName: 100, UserType: 'مدير الهيكل التنظيمي', Job: 'محاسب', MobilNumber: 1258339252 },
    { Position: 0, Status: 'غير فعال', Name: 'احمد', UserName: 100, UserType: 'حامل الكارت', Job: 'مدير', MobilNumber: 1258339252 },
    { Position: 0, Status: 'غير فعال', Name: 'احمد', UserName: 100, UserType: 'مدير الهيكل التنظيمي', Job: 'مدير', MobilNumber: 1258339252 },
  ];

  constructor() { 
    this.ELEMENT_DATA.forEach((e)=>{
      this.position++;
      this.Id++;
      e.Position=this.position
      e.UserName=this.Id
    })
    if(localStorage.getItem('EmployeList')!=null){
      this.ELEMENT_DATA=JSON.parse(localStorage.getItem('EmployeList')||'')
    }
  }



  size:number=this.ELEMENT_DATA.length

  Rearrange(){
    this.Id=99
    this.position=0
    this.ELEMENT_DATA.forEach((e)=>{
      this.position++;
      this.Id++;
      e.Position=this.position
      e.UserName=this.Id
    })
  }
 
}
