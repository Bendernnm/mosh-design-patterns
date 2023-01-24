import { EditorState } from './editor-state';

export class History<T> {
    constructor(private readonly _states: EditorState<T>[] = []) {
    }

    pop(): EditorState<T> | undefined {
        if (this._states.length) {
            return this._states.pop();
        }
    }

    push(state: EditorState<T>) {
        this._states.push(state);
    }
}
