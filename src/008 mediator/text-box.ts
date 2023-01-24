import { UiControl } from './ui-control';
import { DialogBox } from './dialog-box';

export class TextBox extends UiControl {
    constructor(private _content: string, owner: DialogBox) {
        super(owner);
    }

    get content(): string {
        return this._content;
    }

    set content(content: string) {
        this._content = content;

        this.owner.changed(this);
    }
}
