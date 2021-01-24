import { Controller, Post, Body } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Customer } from './customer.entity';
import { CustomersService } from './customers.service';

@Crud({
  model: {
    type: Customer
  }
})
@Controller('customers')
export class CustomersController implements CrudController<Customer>{
  constructor(public service: CustomersService) {}

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
