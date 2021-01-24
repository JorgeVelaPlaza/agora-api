import { Injectable } from '@nestjs/common';
import { Customer } from './customer.model';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CustomersService extends TypeOrmCrudService<Customer>{
  constructor(@InjectRepository(Customer) repo){
    super(repo)
  }

  /* addCustomer(
    name: string,
    surname: string,
    lastSurname: string,
    phone: string,
    email: string,
  ): string {
    const newCustomer = new Customer(name, surname, lastSurname, phone, email);
    this.customers.push(newCustomer);
    return JSON.stringify(newCustomer);
  } */
}
