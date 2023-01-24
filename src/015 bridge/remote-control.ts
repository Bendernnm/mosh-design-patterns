import { Device } from './device';

export class RemoteControl {
    constructor(protected device: Device) {
    }


    public turnOn(): void {
        this.device.turnOn();
    };

    public turnOff(): void {
        this.device.turnOff();
    }
}
