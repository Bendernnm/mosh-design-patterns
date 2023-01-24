import { Observer } from './observer';

export class Chart implements Observer<number> {
    update(value: number): void {
        console.log('Chart was updated', value);
    }
}
