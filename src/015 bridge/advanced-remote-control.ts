import { RemoteControl } from './remote-control';

export class AdvancedRemoteControl extends RemoteControl {
    public setChannel(channel: number): void {
        this.device.setChannel(channel);
    };
}
