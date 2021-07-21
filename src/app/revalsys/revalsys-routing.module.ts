import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProductsComponent } from './products/products.component';
import { RevalsysComponent } from './revalsys.component';

const routes: Routes = [
  {path:'employee',component:EmployeesComponent},
  {
    path:'employee/edit/:id',component:EmployeesComponent

  },
  {
    path:'products',component:ProductsComponent

  },
  {
    path:'feedback',component:FeedbackComponent

  },
  { path: '', component: RevalsysComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevalsysRoutingModule { }
