import { Task } from './task';

export class TransferMoney extends Task {
    protected doExecute(): void {
        console.log('Transfer money');
    }
}
