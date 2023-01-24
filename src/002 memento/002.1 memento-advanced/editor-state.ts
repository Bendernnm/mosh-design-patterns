export class EditorState<T> {
    constructor(private readonly _content: T) {
    }

    public get content() {
        return this._content;
    }
}
