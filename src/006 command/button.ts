import { Command } from './command';

export class Button {
    public label: string = 'empty_label';

    constructor(private command: Command) {
    }

    public click(): void {
        this.command.execute();
    }
}
