import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../model/Customer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  displayedColumns: string[] = ['id', 'nome', 'idade', 'email', 'extrato'];
  dataSource: any;

  customers: Customer[] = [];

  constructor (private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((items) => {
      const data = items.customers;

      console.log(data);

      this.customers = data;
      this.dataSource = data;
    });
  }



}
