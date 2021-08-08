import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMoneyComponent } from './add-money/add-money.component';
import { AddNewItemComponent } from './add-new-item/add-new-item.component';
import { AdmAdInMasterComponent } from './adm-ad-in-master/adm-ad-in-master.component';
import { AdmMasterViewComponent } from './adm-master-view/adm-master-view.component';
import { AdminItemViewComponent } from './admin-item-view/admin-item-view.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { EmpItemViewComponent } from './emp-item-view/emp-item-view.component';
import { EmpMasterViewComponent } from './emp-master-view/emp-master-view.component';
import { EmpPortalComponent } from './emp-portal/emp-portal.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagEmployeeComponent } from './manag-employee/manag-employee.component';
import { RegisterComponent } from './register/register.component';
import { ShowTransactionAdmComponent } from './show-transaction-adm/show-transaction-adm.component';
import { ViewBalanceComponent } from './view-balance/view-balance.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'employee',
    children: [
      { path: '', component: EmpPortalComponent },
      { path: 'viewItems', component: EmpItemViewComponent },
      { path: 'masterItems', component: EmpMasterViewComponent },
      { path: 'viewBalance', component: ViewBalanceComponent },
      { path: 'addMoney', component: AddMoneyComponent }
    ]
  },
  {
    path: 'admin',
    children: [
      { path: '', component: AdminPortalComponent },
      { path: 'viewItemsAdm', component: AdminItemViewComponent },
      { path: 'addItem', component: AddNewItemComponent },
      { path: 'viewMasterItemsAdm', component: AdmMasterViewComponent },
      { path: 'addMasterItem', component: AdmAdInMasterComponent },
      { path: 'manageEmp', component: ManagEmployeeComponent },
      { path: 'allTransaction', component: ShowTransactionAdmComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export class routingComponents=
// [ItemOfDayComponent,
//   AdminPortalComponent
// ]

