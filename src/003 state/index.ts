import { Canvas } from './canvas';
import { BrushTool } from './brush-tool';
import { Tool } from './tool';
import { SelectionTool } from './selection-tool';

const brushTool: Tool = new BrushTool();
const selectionTool: Tool = new SelectionTool();

const canvas: Canvas = new Canvas(brushTool);

canvas.mouseDown();
canvas.mouseUp();

canvas.currentTool = selectionTool;

canvas.mouseDown();
canvas.mouseUp();
