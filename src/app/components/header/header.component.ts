import { Component, OnInit } from '@angular/core';

import { TotalBalanceService } from '../../services/total-balance.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit{

  public balance: number = 0;

  constructor(private balanceService: TotalBalanceService) { }

  ngOnInit(): void {
    this.createHandler();
  }

  async createHandler(){

    this.balanceService.getTotalBalances().subscribe(balance => {
      console.log(balance.totalBalance)
      this.balance = balance.totalBalance;
    });

    window.setInterval(() =>{
      this.balanceService.getTotalBalances().subscribe(balance => {
        console.log(balance.totalBalance)
        this.balance = balance.totalBalance;
      })
    }, 5000);

}

}
