import { NotificationServer } from './notification-server';
import { Connect } from './connect';
import { Message } from './message';

export class NotificationService {
    send(msg: string, target: string): void {
        const server: NotificationServer = new NotificationServer();

        const connection: Connect = server.connect('ip');
        const authToken: string = server.auth('appId', 'key');

        server.send(authToken, new Message(msg), target)

        connection.disconnect();
    }
}
