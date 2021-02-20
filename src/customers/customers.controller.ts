//import { Crud, CrudController } from '@nestjsx/crud';
import { Customer } from './customer.entity';
import { CustomersService } from './customers.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import CreateCustomerDto from './dto/createCustomer.dto';
import UpdateCustomerDto from './dto/updateCustomer.dto';

/* @Crud({
  model: {
    type: Customer
  }
}) */
@Controller('customers')
export default class CustomersController /* implements CrudController<Customer> */{
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  getAllCustomers() {
    return this.customersService.getAllCustomers();
  }

  @Get(':id')
  getCustomerById(@Param('id') id: string) {
    return this.customersService.getCustomerById(Number(id));
  }
 
  @Post()
  async createCustomer(@Body() customer: CreateCustomerDto) {
    return this.customersService.createCustomer(customer);
  }
 
  @Put(':id')
  async replaceCustomer(@Param('id') id: string, @Body() customer: UpdateCustomerDto) {
    return this.customersService.replaceCustomer(Number(id), customer);
  }
 
  @Delete(':id')
  async deleteCustomer(@Param('id') id: string) {
    this.customersService.deleteCustomer(Number(id));
  }

  /* @Post()
  addCustomer(
    @Body('name') customerName: string,
    @Body('surname') customerSurname: string,
    @Body('lastSurname') customerLastSurname: string,
    @Body('phone') customerPhone: string,
    @Body('email') customerEmail: string,
  ) {
    const generatedCustomer = this.customersService.addCustomer(
      customerName,
      customerSurname,
      customerLastSurname,
      customerPhone,
      customerEmail,
    );
    return { customer: generatedCustomer };
  } */
}
