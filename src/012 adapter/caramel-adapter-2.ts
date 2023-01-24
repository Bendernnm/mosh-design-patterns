import { BlackAndWhite, Caramel } from './ava-filters';
import { Filter } from './filter';
import { Image } from './image';

export class CaramelAdapter2 extends BlackAndWhite implements Filter {
    apply(image: Image): void {
        this.init();
        this.sharp(image);
    }
}
