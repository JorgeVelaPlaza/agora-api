import { Injectable } from '@nestjs/common';
import { Customer } from './customer.model';
@Injectable()
export class CustomersService {
  customers: Customer[] = [];

  addCustomer(
    name: string,
    surname: string,
    lastSurname: string,
    phone: string,
    email: string,
  ): string {
    const newCustomer = new Customer(name, surname, lastSurname, phone, email);
    this.customers.push(newCustomer);
    return JSON.stringify(newCustomer);
  }
}
