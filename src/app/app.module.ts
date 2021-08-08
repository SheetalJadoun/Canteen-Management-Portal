import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpPortalComponent } from './emp-portal/emp-portal.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmpItemViewComponent } from './emp-item-view/emp-item-view.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AdminItemViewComponent } from './admin-item-view/admin-item-view.component';
import { AddNewItemComponent } from './add-new-item/add-new-item.component';
import { EmpMasterViewComponent } from './emp-master-view/emp-master-view.component';
import { AdmMasterViewComponent } from './adm-master-view/adm-master-view.component';
import { AdmAdInMasterComponent } from './adm-ad-in-master/adm-ad-in-master.component';
import { ManagEmployeeComponent } from './manag-employee/manag-employee.component';
import { ViewBalanceComponent } from './view-balance/view-balance.component';
import { MatCardModule } from '@angular/material/card';
import { AddMoneyComponent } from './add-money/add-money.component';
import { ShowTransactionAdmComponent } from './show-transaction-adm/show-transaction-adm.component';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EmpPortalComponent,
    EmpItemViewComponent,
    AdminPortalComponent,
    AdminItemViewComponent,
    AddNewItemComponent,
    EmpMasterViewComponent,
    AdmMasterViewComponent,
    AdmAdInMasterComponent,
    ManagEmployeeComponent,
    ViewBalanceComponent,
    AddMoneyComponent,
    ShowTransactionAdmComponent,
    HomeComponent,



  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,

  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
