import { EditorState } from './editor-state';

export class Editor<T> {
    // @ts-ignore
    private _content: T;

    get content(): T {
        return this._content;
    }

    set content(content: T) {
        this._content = content;
    }

    createState(): EditorState<T> {
        return new EditorState<T>({ ...this._content });
    }

    restore(state: EditorState<T> | undefined): void {
        if (!state) {
            return;
        }

        this._content = state.content;
    }
}
