import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.css']
})
export class CheckBalanceComponent implements OnInit {

  // customers: Customer[] = [];
  currentDate = new Date();
  currBal: number = 0;
  accountNumber: number = 0;
  cardPin: number = 0;
  addAmount: number = 0;
  valid : string  = '';
  balanceInfo: any = {
    currBal: 0,
    name: ''
  }
  
  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
  }


  submitData(){
    this.customersService.getBalance(this.accountNumber, this.cardPin)
    .subscribe({
      next: (data) => {
        this.balanceInfo.currBal = data.balance;
        this.balanceInfo.name = data.name;
        this.valid = 'valid'
      },
      error: (response) => {
        console.log(response);
        this.valid = 'invalid';
      }
    })
  }
}
