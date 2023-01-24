import { Stream } from './stream';

export class CompressCloudStream implements Stream {
    constructor(private readonly stream: Stream) {
    }

    write(data: string): void {
        const compressedData = this.compress(data);

        this.stream.write(compressedData);
    }

    compress(data: string): string {
        return data.substring(1);
    }
}
