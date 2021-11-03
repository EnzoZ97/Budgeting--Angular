import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  expense = 0;

  constructor() { }

  GetExpense():number{
    return this.expense;
  }

  SetExpense(New_Expense:number):void{
    this.expense = New_Expense;
  }
}
