import { ArticleDialogBox } from './article-dialog-box';

const articleBox: ArticleDialogBox = new ArticleDialogBox();

articleBox._listBox.selection = 'Article 1';

console.log(articleBox._textBox.content);
console.log(articleBox._button.isEnable);

articleBox._textBox.content = '';

console.log(articleBox._textBox.content);
console.log(articleBox._button.isEnable);
