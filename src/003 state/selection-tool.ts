import { Tool } from './tool';

export class SelectionTool implements Tool{
    mouseDown(): void {
        console.log('Selection icon');
    }

    mouseUp(): void {
        console.log('Draw a dashed rectangle');
    }

}
