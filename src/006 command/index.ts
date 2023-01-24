import { CustomerService } from './customer-service';
import { Command } from './command';
import { AddCustomerCommand } from './add-customer-command';
import { Button } from './button';

const customerService: CustomerService = new CustomerService();
const command: Command = new AddCustomerCommand(customerService);
const button: Button = new Button(command);

button.click();
