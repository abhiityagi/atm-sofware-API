import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckBalanceComponent } from './components/check-balance/check-balance.component';
import { DepositMoneyComponent } from './components/deposit-money/deposit-money.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';
import { TransferMoneyComponent } from './components/transfer-money/transfer-money.component';
import { WithdrawMoneyComponent } from './components/withdraw-money/withdraw-money.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'check-balance',
    component: CheckBalanceComponent
  },
  {
    path: 'withdraw-money',
    component: WithdrawMoneyComponent
  },
  {
    path: 'deposit-money',
    component: DepositMoneyComponent
  },
  {
    path: 'transfer-money',
    component: TransferMoneyComponent
  },
  {
    path: 'transaction-details',
    component: TransactionDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
