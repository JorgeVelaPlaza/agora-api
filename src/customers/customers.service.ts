import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import CreateCustomerDto from './dto/createCustomer.dto';
import Customer from './customer.interface';
import UpdateCustomerDto from './dto/updateCustomer.dto';
 
@Injectable()
export default class CustomersService {
  private lastCustomerId = 0;
  private customers: Customer[] = [];
 
  getAllCustomers() {
    return this.customers;
  }
 
  getCustomerById(id: number) {
    const customer = this.customers.find(customer => customer.id === id);
    if (customer) {
      return customer;
    }
    throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
  }
 
  replaceCustomer(id: number, customer: UpdateCustomerDto) {
    const customerIndex = this.customers.findIndex(customer => customer.id === id);
    if (customerIndex > -1) {
      this.customers[customerIndex] = customer;
      return customer;
    }
    throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
  }
 
  createCustomer(customer: CreateCustomerDto) {
    const newCustomer = {
      id: ++this.lastCustomerId,
      ...customer
    }
    this.customers.push(newCustomer);
    return newCustomer;
  }
 
  deleteCustomer(id: number) {
    const customerIndex = this.customers.findIndex(customer => customer.id === id);
    if (customerIndex > -1) {
      this.customers.splice(customerIndex, 1);
    } else {
      throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
    }
  }
}