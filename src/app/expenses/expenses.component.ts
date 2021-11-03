import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  Expense = "";
  Amount = 0;
  Amount_of_expense : number;
  list: any[] = [];
  subtract = 0;
  Error = false;
  Error_message = '';
  Notice = false;


  constructor(private data:DataService) { 
    this.Amount_of_expense = data.GetExpense();
    this.subtract  = data.GetExpense();
  }

  ngOnInit(): void {
  }

  AddBudgeting():void{
    if(this.CheckValues()){
      const values_of_expense = {
        expense: this.Expense,
        amount : this.Amount
      }
      this.subtract_Expense();
      this.list.push(values_of_expense);
      this.Error = false;
    }
    else if(this.subtract == 0){
      this.Error = false;
      this.Notice = true;
      this.Error_message = "leftover is 0";
    }
    
  }

  subtract_Expense():void{
    this.subtract -= this.Amount;
  }

  CheckValues():boolean{
    return this.CheckExpense() && this.CheckMount();

    
  }

  CheckExpense():boolean{
    let isOk = false;
    if(this.Expense == ""){
      console.log("Hello world");
      this.Error = true;
      this.Error_message = 'Write a expense';
      isOk = false
    }
    else{
      isOk = true;
    }
    return isOk;
  }

  CheckMount():boolean{
    let isOk = false;
    if(this.Amount > this.Amount_of_expense){
      this.Error = true;
      this.Error_message = "Amount don't should higher to total of expense";
      isOk = false
    }
    else{
      isOk = true;
    }
    if(this.Amount > this.subtract || this.Amount == 0){
      this.Error = true;
      this.Error_message = "Amount don't should be 0 or higher to total of leftover";
      isOk = false
    }
    else{
      isOk = true;
    }
    return isOk;
  }
}
