import { Filter } from './filter';
import { Image } from './image';
import { Caramel } from './ava-filters';

export class CaramelAdapter implements Filter {
    constructor(private readonly caramelFilter: Caramel) {
    }

    apply(image: Image): void {
        this.caramelFilter.init();
        this.caramelFilter.render(image);
    }
}
