import { EditorState } from './editor-state';

export class History {
    constructor(private readonly _states: EditorState[] = []) {
    }

    public push(state: EditorState): EditorState {
        this._states.push(state);

        return state;
    }

    public pop(): EditorState | undefined {
        if (this._states.length) {
            return this._states.pop();
        }
    }
}
