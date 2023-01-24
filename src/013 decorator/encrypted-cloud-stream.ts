import { Stream } from './stream';

export class EncryptedCloudStream implements Stream {
    constructor(private readonly stream: Stream) {
    }

    write(data: string): void {
        const encryptedString: string = this.encrypt(data);

        this.stream.write(encryptedString);
    }

    private encrypt(data: string): string {
        return `#${data}#`;
    }

}
