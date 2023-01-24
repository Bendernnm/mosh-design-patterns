import { EditorState } from './editor-state';

export class Editor {
    private _content: string = '';

    public get content() {
        return this._content;
    }

    public set content(content: string) {
        this._content = content;
    }

    public createState(): EditorState {
        return new EditorState(this._content);
    }

    public restore(state: EditorState): void {
        if (!state) {
            return;
        }

        this._content = state.content;
    }
}
