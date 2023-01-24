import { Editor } from './editor';
import { History } from './history';
import { EditorState } from './editor-state';

const editor = new Editor();
const history = new History();

editor.content = 'a';

history.push(editor.createState());
editor.content = 'b';

history.push(editor.createState());
editor.content = 'c';

console.log(editor.content);

let editorState: EditorState | undefined = history.pop();

if (editorState) {
    editor.restore(editorState);
}

console.log(editor.content);

editorState = history.pop();

if (editorState) {
    editor.restore(editorState);
}

console.log(editor.content);
