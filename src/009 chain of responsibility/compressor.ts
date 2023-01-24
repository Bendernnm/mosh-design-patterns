import { HttpRequest } from './http-request';
import { Handler } from './handler';

export class Compressor extends Handler {
    doHandle(httpRequest: HttpRequest): boolean {
        console.log('compress request');

        return false;
    }
}
