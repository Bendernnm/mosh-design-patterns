import { RemoteControl } from './remote-control';
import { SonyTV } from './sony-tv';
import { AdvancedRemoteControl } from './advanced-remote-control';

const remoteControl: RemoteControl = new RemoteControl(new SonyTV());
const advancedRemoteControl: AdvancedRemoteControl = new AdvancedRemoteControl(new SonyTV());

remoteControl.turnOn();
advancedRemoteControl.setChannel(1);

