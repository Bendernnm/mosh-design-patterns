import { Connect } from './connect';
import { AuthToken } from './auth-token';
import { Message } from './message';

export class NotificationServer {
    constructor() {
    }

    connect(ip: string): Connect {
        const connection: Connect = new Connect();

        connection.connect(ip);

        return connection;
    }

    auth(appId: string, key: string): string {
        const authToken: AuthToken = new AuthToken();

        return authToken.signToken(appId, key);
    }

    send(authToken: string, message: Message, target: string) {
        console.log('send msg');
    }
}
