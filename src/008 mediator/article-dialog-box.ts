import { DialogBox } from './dialog-box';
import { UiControl } from './ui-control';
import { ListBox } from './list-box';
import { TextBox } from './text-box';
import { Button } from './button';

export class ArticleDialogBox extends DialogBox {
    public readonly _listBox: ListBox = new ListBox('', this);
    public readonly _textBox: TextBox = new TextBox('', this);
    public readonly _button: Button = new Button(false, this);

    changed(control: UiControl): void {
        if (control === this._listBox) {
            return this.listBoxChanged();
        }

        if (control === this._textBox) {
            return this.textBoxChanged();
        }
    }

    private listBoxChanged(): void {
        this._textBox.content = this._listBox.selection;
        this._button.isEnable = true;
    }

    private textBoxChanged(): void {
        this._button.isEnable = !!this._textBox;
    }
}
