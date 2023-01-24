import { UiControl } from './ui-control';

export abstract class DialogBox {
    abstract changed(control: UiControl): void;
}
