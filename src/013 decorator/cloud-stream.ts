import { Stream } from './stream';

export class CloudStream implements Stream {
    write(data: string): void {
        console.log('store data to cloud', data);
    }
}
