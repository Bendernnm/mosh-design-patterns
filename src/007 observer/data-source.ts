import { Subject } from './subject';

export class DataSource extends Subject<number> {
    constructor(private _value: number) {
        super();
    }

    get value(): number {
        return this.value;
    }

    set value(value: number) {
        this._value = value;
        this.notifyObserver(value);
    }
}
