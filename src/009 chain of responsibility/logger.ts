import { HttpRequest } from './http-request';
import { Handler } from './handler';

export class Logger extends Handler {
    doHandle(httpRequest: HttpRequest): boolean {
        console.log('logging', httpRequest);
        return false;
    }
}
