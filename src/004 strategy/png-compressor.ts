import { Compressor } from './compressor';

export class PngCompressor implements Compressor {
    compress(image: string): string {
        return `${image}.png`;
    }
}
