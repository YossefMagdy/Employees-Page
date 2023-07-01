import { FormBuilder, Validator, Validators } from '@angular/forms';
import { EmployeService } from './../../Core/Service/employe.service';
import { Component, HostListener, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  constructor(private EmployeService: EmployeService, private fb: FormBuilder) { }
    ngOnInit(): void {
      this.NumOfEmpolye=this.EmployeService.ELEMENT_DATA.length

  }
  toggleDropMenu: boolean = false;
  @Output() FilterList = new EventEmitter<{ SearchByJob: string, SearchByStatus: string, SearchByType: string }>()
  @Output() SearchByName = new EventEmitter<{ Name: string }>()
  jobName: string = ''
  Status: string = ''
  Type: string = ''
  Name:string=''
  NumOfEmpolye!:number
  filter: EmployeService[] = []
  Duplicate:boolean=false

  Addform = this.fb.group(
    {
      name: ['', Validators.required],
      job: ['', Validators.required],
      mobile: ['', Validators.required],
      type: ['', Validators.required],
      status: ['', Validators.required]
    }
  )



  Add( PhoneNum: HTMLInputElement) {
    if (this.Addform.valid) {
      let name=this.Addform.value.name!

      if(this.EmployeService.ELEMENT_DATA.filter((e)=>{
        return e.Name.includes(name)
      }).length>0){
        this.Duplicate=true
      }else{
        this.Duplicate=false
      }
      
      if(this.Duplicate!=true){
        let Empolyedata = this.EmployeService.ELEMENT_DATA[this.EmployeService.ELEMENT_DATA.length - 1]
        this.EmployeService.ELEMENT_DATA.push({ Position: Empolyedata.Position + 1, Status: this.Addform.value.status||'', Name: this.Addform.value.name||'', UserName: Empolyedata.UserName + 1, UserType: this.Addform.value.type||'', Job: this.Addform.value.job||'', MobilNumber: +PhoneNum.value })
        this.NumOfEmpolye++
        localStorage.setItem('EmployeList',JSON.stringify(this.EmployeService.ELEMENT_DATA))

      }
       
    }

  }

  search() {
    this.FilterList.emit({ SearchByJob: this.jobName, SearchByStatus: this.Status, SearchByType: this.Type })

  }
  NameSearch(){
    this.SearchByName.emit({ Name: this.Name })

  }

  Select(event: Event) {
    let target = event.target as HTMLButtonElement
    if (target.value == 'الكل') {
      this.Status = ''
      this.FilterList.emit({ SearchByJob: this.jobName, SearchByStatus: this.Status, SearchByType: this.Type })
    }
    else {
      this.Status = target.value
      this.FilterList.emit({ SearchByJob: this.jobName, SearchByStatus: this.Status, SearchByType: this.Type })

    }
  }

  Reset(JOB: HTMLInputElement, TYPE: HTMLInputElement, STATUS: HTMLSelectElement) {
    JOB.value = ''
    TYPE.value = ''
    STATUS.value = 'الكل'
    this.Status = ''
    this.FilterList.emit({ SearchByJob: JOB.value, SearchByStatus: this.Status, SearchByType: TYPE.value })

  }
}

