import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CustomerService } from '../../../services/customer.service';
import { MessageService } from '../../../services/message.service';
import { Customer } from '../../../model/Customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  title = 'front-test-bank';
  btnText = 'ENVIAR';

  constructor(private customerService: CustomerService,
     private messageService: MessageService,
    private router: Router) { }

  async createHandler(customer: Customer){

      let json = {
        name: customer.name,
        age: customer.age,
        email: customer.email,
        account: {
          accountNumber: customer.accountNumber,
          balance: customer.accountBalance
        }
      };

      console.log(json);
      await this.customerService.createCustomer(json).subscribe();

      this.messageService.add('Cliente cadastrado com sucesso');

      this.router.navigate(['/']);

  }
}
