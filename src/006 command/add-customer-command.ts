import { Command } from './command';
import { CustomerService } from './customer-service';

export class AddCustomerCommand implements Command {
    constructor(private readonly customerService: CustomerService) {
    }

    execute(): void {
        this.customerService.addCustomer();
    }
}
