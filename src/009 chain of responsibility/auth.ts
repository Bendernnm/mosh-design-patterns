import { HttpRequest } from './http-request';
import { Handler } from './handler';

export class Auth extends Handler {
    doHandle(httpRequest: HttpRequest): boolean {
        console.log('Auth');

        return !(httpRequest.username === 'admin' && httpRequest.password === 'admin');
    }
}
