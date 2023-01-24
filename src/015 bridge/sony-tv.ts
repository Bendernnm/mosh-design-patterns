import { Device } from './device';

export class SonyTV implements Device {
    setChannel(channel: number): void {
        console.log('Sony set channel', channel);
    }

    turnOff(): void {
        console.log('Sony turn off');
    }

    turnOn(): void {
        console.log('Sony turn on');
    }
}
