import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckBalanceComponent } from './components/check-balance/check-balance.component';
import { WithdrawMoneyComponent } from './components/withdraw-money/withdraw-money.component';
import { DepositMoneyComponent } from './components/deposit-money/deposit-money.component';
import { TransferMoneyComponent } from './components/transfer-money/transfer-money.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckBalanceComponent,
    WithdrawMoneyComponent,
    DepositMoneyComponent,
    TransferMoneyComponent,
    HomePageComponent,
    TransactionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
