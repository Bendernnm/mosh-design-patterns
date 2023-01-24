import { Observer } from './observer';

export class SpreadSheet implements Observer<number> {
    update(value: number): void {
        console.log('SpreadSheet was updated', value);
    }
}
