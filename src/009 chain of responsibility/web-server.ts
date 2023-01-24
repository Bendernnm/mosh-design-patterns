import { HttpRequest } from './http-request';
import { Handler } from './handler';


export class WebServer {
    constructor(private handler: Handler) {
    }

    public handle(httpRequest: HttpRequest): void {
        this.handler.handle(httpRequest);
    }
}
