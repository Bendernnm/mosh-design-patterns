import { Filter } from './filter';
import { Image } from './image';

export class VividFilter implements Filter {
    apply(image: Image): void {
        console.log('Apply vivid filter');
    }
}
