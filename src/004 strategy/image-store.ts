import { Compressor } from './compressor';

export class ImageStore {
    store(image: string, compressor: Compressor) {
        console.log(compressor.compress(image));
    }
}
