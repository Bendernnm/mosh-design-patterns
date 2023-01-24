// Observable
import { Observer } from './observer';

export class Subject<T> {
    private observersList: Map<Observer<T>, undefined> = new Map();

    addObserver(observer: Observer<T>): void {
        this.observersList.set(observer, undefined);
    }

    removeObserver(observer: Observer<T>): void {
        this.observersList.delete(observer);
    }

    notifyObserver(value: T): void {
        for (const [observer] of this.observersList) {
            observer.update(value);
        }
    }
}
