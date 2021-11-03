import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBudgetingComponent } from './add-budgeting/add-budgeting.component';
import { FormsModule } from '@angular/forms';
import { ExpensesComponent } from './expenses/expenses.component';
import { ListOfExpensesComponent } from './expenses/list-of-expenses/list-of-expenses.component';


@NgModule({
  declarations: [
    AppComponent,
    AddBudgetingComponent,
    ExpensesComponent,
    ListOfExpensesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
