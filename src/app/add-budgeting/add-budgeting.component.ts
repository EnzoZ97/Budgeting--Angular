import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-add-budgeting',
  templateUrl: './add-budgeting.component.html',
  styleUrls: ['./add-budgeting.component.css']
})
export class AddBudgetingComponent implements OnInit {
  expense = 0;
  IsHigher = false;
  constructor(private router:Router,private data: DataService) { }

  ngOnInit(): void {
  }

  check():void{
    console.log(this.expense);
    if(this.expense == 0 || this.expense < 0){
      this.IsHigher = true;
    }
    else {
      this.data.SetExpense(this.expense);
      this.router.navigate(["/Expenses"]);   
    }
  }
}
