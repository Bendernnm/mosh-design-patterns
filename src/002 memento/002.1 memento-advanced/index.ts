import { Editor } from './editor';
import { History } from './history';
import { WordContent } from './word-content';

const editor = new Editor<WordContent>();
const history = new History<WordContent>();

editor.content = {
    fontSize: 12,
    color   : 'black',
    text    : 'hello',
};

history.push(editor.createState());
editor.content = {
    fontSize: 14,
    color   : 'black',
    text    : 'hello!',
};

history.push(editor.createState());
editor.content = {
    fontSize: 22,
    color   : 'red',
    text    : 'Hi!',
};

console.log(editor.content);

editor.restore(history.pop());
console.log(editor.content);

editor.restore(history.pop());
console.log(editor.content);
