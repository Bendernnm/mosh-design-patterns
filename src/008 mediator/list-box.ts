import { UiControl } from './ui-control';
import { DialogBox } from './dialog-box';

export class ListBox extends UiControl {
    constructor(private _selection: string, owner: DialogBox) {
        super(owner);
    }

    get selection(): string {
        return this._selection;
    }

    set selection(selection: string) {
        this._selection = selection;

        this.owner.changed(this);
    }
}
