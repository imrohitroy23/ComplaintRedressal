import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './administrator/create/create-customer/create-customer.component';
import { CreateEngineerComponent } from './administrator/create/create-engineer/create-engineer.component';
import { CreateManagerComponent } from './administrator/create/create-manager/create-manager.component';
import { ComplaintFeedbackComponent } from './customer/complaint-feedback/complaint-feedback.component';
import { CreateComplaintComponent } from './customer/create-complaint/create-complaint.component';
import { ViewComplaintsComponent } from './customer/view-complaints/view-complaints.component';
import { LoginComponent } from './login/login.component';
import { AssignComplaintComponent } from './manager/assign-complaint/assign-complaint.component';
import { ComplaintListComponent } from './manager/complaint-list/complaint-list.component';
import { ComplaintsComponent } from './engineer/complaints/complaints.component';
import { UpdateStatusComponent } from './engineer/update-status/update-status.component';
import { CustomerListComponent } from './administrator/list/customer-list/customer-list.component';
import { EngineerListComponent } from './administrator/list/engineer-list/engineer-list.component';
import { ManagerListComponent } from './administrator/list/manager-list/manager-list.component';
import { AllComplaintListComponent } from './administrator/list/all-complaint-list/all-complaint-list.component';
import { IndividualComplaintDetailsComponent } from './administrator/individual-complaint-details/individual-complaint-details.component';
import { UpdateCustomerComponent } from './administrator/update/update-customer/update-customer.component';
import { UpdateManagerComponent } from './administrator/update/update-manager/update-manager.component';
import { UpdateEngineerComponent } from './administrator/update/update-engineer/update-engineer.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutUsComponent},
  {path:'',component:HomeComponent},
  {path:'admin',children:[
    {path:'create',children:[
      {path:"customer",component:CreateCustomerComponent},
      {path:"manager",component:CreateManagerComponent},
      {path:"engineer",component:CreateEngineerComponent}
    ]},
    {path:'list',children:[
      {path:"customer",component:CustomerListComponent},
      {path:"engineer",component:EngineerListComponent},
      {path:"manager",component:ManagerListComponent},
      {path:"complaints",component:AllComplaintListComponent}
    ]},
    {path:'complaintDetails',component:IndividualComplaintDetailsComponent},
    {path:'update',children:[
      {path:"customer",component:UpdateCustomerComponent},
      {path:"manager",component:UpdateManagerComponent},
      {path:"engineer",component:UpdateEngineerComponent}
    ]},
  ]},
  {path:'customer',children:[
    {path:'complaint',component:CreateComplaintComponent},
    {path:'complaintList',component:ViewComplaintsComponent},
    {path:'track',component:ComplaintFeedbackComponent}
  ]},
  {path:'manager',children:[
    {path:'complaints',component:ComplaintListComponent},
    {path:'assign',component:AssignComplaintComponent}
  ]},
  {path:'engineer',children:[
    {path:'complaints',component:ComplaintsComponent},
    {path:'updateStatus',component:UpdateStatusComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
