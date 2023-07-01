import { EmployeService } from './../../Core/Service/employe.service';
import { Component, DoCheck, OnInit ,Input} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {SelectionModel} from '@angular/cdk/collections';
import { EmployeeList } from 'src/app/Core/Interface/employee-list';




@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.scss']
})
export class EmployeListComponent implements OnInit,DoCheck{
  toggleDropMenu:boolean=false;
  status!:boolean;
  ELEMENT_DATA: EmployeeList[]=[]
  displayedColumns: string[] = []
  dataSource:any;
  selection:any;
  p: number = 1;

  @Input() SearchByJob:string=''
  @Input() SearchBystatus:string=''
  @Input() SearchBytype:string=''
  @Input() SearchByName:string=''

  constructor(private EmployeService:EmployeService){
    this.ELEMENT_DATA=this.EmployeService.ELEMENT_DATA

  }

  ngOnInit(): void {
    this.displayedColumns= ['select', 'Position', 'Status', 'Name', 'UserName','UserType','Job',"MobilNumber"];
      this.dataSource = new MatTableDataSource<EmployeeList>(this.ELEMENT_DATA);
      this.selection = new SelectionModel<EmployeeList>(true, []);

  }
  ngDoCheck(): void {
    this.dataSource = new MatTableDataSource<EmployeeList>(this.ELEMENT_DATA);
    this.selection = new SelectionModel<EmployeeList>(true, []);
  }




  

  Check(event:Event){
   
    let target = event.target as HTMLButtonElement
    let attributeValue = target.value  
    console.log(attributeValue)
  }

  EmployeSetting(event:Event){
    let element=event.target as HTMLButtonElement
    // console.log(element.firstElementChild?.classList.remove('d-none'))
    if(element.firstElementChild?.classList.contains('d-none')){
      element.firstElementChild?.classList.remove('d-none')
    }else{
      element.firstElementChild?.classList.add('d-none')
    }
  }
  Delete(i:number){
    this.EmployeService.ELEMENT_DATA.splice(i, 1)
    this.EmployeService.Rearrange()
    localStorage.setItem('EmployeList',JSON.stringify(this.EmployeService.ELEMENT_DATA))

  }
}
