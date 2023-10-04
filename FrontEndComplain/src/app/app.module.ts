import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { EngineerComponent } from './engineer/engineer.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './administrator/create/create.component';
import { CommonModule } from '@angular/common';
import { CreateCustomerComponent } from './administrator/create/create-customer/create-customer.component';
import { ManagerComponent } from './manager/manager.component';
import { CreateManagerComponent } from './administrator/create/create-manager/create-manager.component';
import { CreateEngineerComponent } from './administrator/create/create-engineer/create-engineer.component';
import { CreateComplaintComponent } from './customer/create-complaint/create-complaint.component';
import { TrackComplaintComponent } from './customer/track-complaint/track-complaint.component';
import { ViewComplaintsComponent } from './customer/view-complaints/view-complaints.component';
import { ComplaintFeedbackComponent } from './customer/complaint-feedback/complaint-feedback.component';
import { ComplaintListComponent } from './manager/complaint-list/complaint-list.component';
import { ComplaintStatusComponent } from './manager/complaint-status/complaint-status.component';
import { AssignComplaintComponent } from './manager/assign-complaint/assign-complaint.component';
import { RouterModule } from '@angular/router';
import { ComplaintsComponent } from './engineer/complaints/complaints.component';
import { UpdateStatusComponent } from './engineer/update-status/update-status.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { ListComponent } from './administrator/list/list.component';
import { CustomerListComponent } from './administrator/list/customer-list/customer-list.component';
import { EngineerListComponent } from './administrator/list/engineer-list/engineer-list.component';
import { ManagerListComponent } from './administrator/list/manager-list/manager-list.component';
import { AllComplaintListComponent } from './administrator/list/all-complaint-list/all-complaint-list.component';
import { IndividualComplaintDetailsComponent } from './administrator/individual-complaint-details/individual-complaint-details.component';
import { UpdateComponent } from './administrator/update/update.component';
import { UpdateManagerComponent } from './administrator/update/update-manager/update-manager.component';
import { UpdateCustomerComponent } from './administrator/update/update-customer/update-customer.component';
import { UpdateEngineerComponent } from './administrator/update/update-engineer/update-engineer.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    AdministratorComponent,
    CustomerComponent,
    ManagerComponent,
    EngineerComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CreateComponent,
    CreateCustomerComponent,
    CreateManagerComponent,
    CreateEngineerComponent,
    CreateComplaintComponent,
    TrackComplaintComponent,
    ViewComplaintsComponent,
    ComplaintFeedbackComponent,
    ComplaintListComponent,
    ComplaintStatusComponent,
    AssignComplaintComponent,
    ComplaintsComponent,
    UpdateStatusComponent,
    FeedbacksComponent,
    ListComponent,
    CustomerListComponent,
    EngineerListComponent,
    ManagerListComponent,
    AllComplaintListComponent,
    IndividualComplaintDetailsComponent,
    UpdateComponent,
    UpdateManagerComponent,
    UpdateCustomerComponent,
    UpdateEngineerComponent,
    HomeComponent,
    LogoutComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
