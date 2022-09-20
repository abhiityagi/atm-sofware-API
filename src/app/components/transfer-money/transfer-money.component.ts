import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/models/transaction.model';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent implements OnInit {

  currentDate = new Date();
  valid : string  = '';

  sendMoneyRequest: Transaction = {
    transactionId : 0,
    accountNumber: 0,
    pin: 0,
    recipientAccountNumber: 0,
    branchName: '',
    amountTransfer: 0,
  };

  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
  }

  transferMoney(){
    this.customersService.transferMoney(this.sendMoneyRequest).subscribe({
      next : (data) => {
        this.valid = 'valid'
      console.log(data);
    },
    error: (response)=> {
      console.log(response);
      this.valid = 'invalid';
    }
    })
  }
}