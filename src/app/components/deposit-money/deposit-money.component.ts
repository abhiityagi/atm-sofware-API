import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-deposit-money',
  templateUrl: './deposit-money.component.html',
  styleUrls: ['./deposit-money.component.css']
})
export class DepositMoneyComponent implements OnInit {

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

  depositData(){
    this.customersService.setDeposit(this.accountNumber, this.cardPin, this.addAmount)
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
