import { Image } from './image';

export class Caramel {
    init(): void {

    }

    render(image: Image): void {
        console.log('Apply 3-party filter - Caramel');
    }
}

export class BlackAndWhite {
    init(): void {

    }

    sharp(image: Image): void {
        console.log('Apply 3-party filter - BlackAndWhite');
    }
}
