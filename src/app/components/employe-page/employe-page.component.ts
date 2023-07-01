import { Component, OnInit, DoCheck } from '@angular/core';
import { EmployeService } from 'src/app/Core/Service/employe.service';

@Component({
  selector: 'app-employe-page',
  templateUrl: './employe-page.component.html',
  styleUrls: ['./employe-page.component.scss']
})
export class EmployePageComponent implements OnInit , DoCheck{
  constructor(private EmployeService:EmployeService){}
  ngDoCheck(): void {
    this.NumOfEmpolye=this.EmployeService.ELEMENT_DATA.length
  }
  Job:string='' 
  Status:string=''
  Type:string=''
  Name:string=''
  NumOfEmpolye!:number
  HandleFilter(FilterList:{SearchByJob:string,SearchByStatus:string,SearchByType:string}){
    this.Job=FilterList.SearchByJob
    this.Status=FilterList.SearchByStatus
    this.Type=FilterList.SearchByType
  }
  HandleSearch(SearchByName:{Name:string}){
    this.Name=SearchByName.Name
  }

  ngOnInit(): void {
    this.NumOfEmpolye=this.EmployeService.ELEMENT_DATA.length
}
}
