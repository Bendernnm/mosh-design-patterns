import { HttpRequest } from './http-request';

export abstract class Handler {
    constructor(private next: Handler | null) {
    }

    public handle(httpRequest: HttpRequest) {
        if (this.doHandle(httpRequest)) {
            return;
        }

        if (!this.next) {
            return;
        }

        this.next.handle(httpRequest);
    }

    public abstract doHandle(httpRequest: HttpRequest): boolean;
}
