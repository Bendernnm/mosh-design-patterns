import { Image } from './image';
import { Filter } from './filter';

export class ImageView {
    constructor(private image: Image) {
    }

    apply(filter: Filter): void {
        filter.apply(this.image);
    }
}
