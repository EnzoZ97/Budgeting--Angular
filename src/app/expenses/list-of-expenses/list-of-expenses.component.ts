import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-list-of-expenses',
  templateUrl: './list-of-expenses.component.html',
  styleUrls: ['./list-of-expenses.component.css']
})
export class ListOfExpensesComponent implements OnInit {
  @Input() list_expenses : any[] = [];
  @Input() Total = 0;
  @Input() subtract = 0;
  constructor() { 
  }

  ngOnInit(): void {
  }

}


