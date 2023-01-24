import { Compressor } from './compressor';

export class JpegCompressor implements Compressor{
    compress(image: string): string {
        return `${image}.jpeg`;
    }
}
