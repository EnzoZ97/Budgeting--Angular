import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBudgetingComponent } from './add-budgeting/add-budgeting.component';
import { ExpensesComponent } from './expenses/expenses.component';


const routes: Routes = [
  {path:'',component: AddBudgetingComponent},
  {path:'Expenses', component: ExpensesComponent},
  {path:'**',redirectTo : ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
