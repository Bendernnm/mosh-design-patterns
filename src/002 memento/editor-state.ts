export class EditorState {
    constructor(private readonly _content: string) {
    }

    public get content() {
        return this._content;
    }
}
