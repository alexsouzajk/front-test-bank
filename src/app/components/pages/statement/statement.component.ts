import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrl: './statement.component.css'
})
export class StatementComponent implements OnInit{

  displayedColumns: string[] = ['id', 'data', 'valor', 'contaOrigem', 'contaDestino'];
  dataSource: any;

  public customerId!: number;
  public transactions: any;

  constructor(private route: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.customerId =  Number(routeParams.get('customerId'));

    this.customerService.getCustomerStatement(this.customerId ).subscribe((items) => {
      const data = items.transactions;

      this.dataSource = data;
      console.log(this.dataSource)
    });
  }

}
