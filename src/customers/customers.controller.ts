import { Controller, Post, Body } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
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
  }
}
