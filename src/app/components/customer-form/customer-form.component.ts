import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Customer } from '../../model/Customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent implements OnInit{

  @Output() onSubmit = new EventEmitter<Customer>();

  @Input() btnText!: string;

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      accountNumber: new FormControl('', [Validators.required]),
      accountBalance: new FormControl('', [Validators.required]),
    });
  }


  get name(){
    return this.customerForm.get('name')!;
  }

  get age(){
    return this.customerForm.get('age')!;
  }

  get email(){
    return this.customerForm.get('email')!;
  }

  get accountNumber(){
    return this.customerForm.get('accountNumber')!;
  }

  get accountBalance(){
    return this.customerForm.get('accountBalance')!;
  }

  customerForm!: FormGroup<any>;

  submit() {
    if(this.customerForm.invalid) {return;}

    this.onSubmit.emit(this.customerForm.value);
  }

}
