import { UiControl } from './ui-control';
import { DialogBox } from './dialog-box';

export class Button extends UiControl {
    constructor(private _isEnable: boolean = false, owner: DialogBox) {
        super(owner);
    }

    get isEnable(): boolean {
        return this._isEnable;
    }

    set isEnable(isEnable: boolean) {
        this._isEnable = isEnable;

        this.owner.changed(this);
    }
}
