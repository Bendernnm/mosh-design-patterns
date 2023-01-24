export interface Device {
    turnOn(): void;
    turnOff(): void;
    setChannel(channel: number): void;
}
