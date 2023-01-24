import { Component } from './component';

export class Shape implements Component {
    render(): void {
        console.log('render shape');
    }
}
