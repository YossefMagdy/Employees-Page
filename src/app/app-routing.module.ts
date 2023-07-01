import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployePageComponent } from './components/employe-page/employe-page.component';

const routes: Routes = [
  {path:'',redirectTo:'EmployePage',pathMatch:'full'},
  {path:'EmployePage',component:EmployePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
