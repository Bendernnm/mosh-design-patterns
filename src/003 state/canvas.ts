import { Tool } from './tool';

export class Canvas {
    constructor(private _currentTool: Tool) {
    }

    get currentTool(): Tool {
        return this._currentTool;
    }

    set currentTool(tool: Tool) {
        this._currentTool = tool;
    }

    mouseDown(): void {
        this._currentTool.mouseDown();
    }

    mouseUp(): void {
        this._currentTool.mouseUp();
    }
}
