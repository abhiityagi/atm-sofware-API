import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.model';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {
  
  transactionsAll: Transaction[] = []
  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.customersService.getAllTransactions()
    .subscribe({
      next: (data) => {
        this.transactionsAll = data
      },
      error:(response) => {
        console.log(response)
      }
    })
  }

}
