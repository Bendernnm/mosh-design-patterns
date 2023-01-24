import { ImageStore } from './image-store';
import { PngCompressor } from './png-compressor';

const imageStore = new ImageStore();

imageStore.store('my-image', new PngCompressor());
