import { Component } from './component';

export class Group implements Component {
    private components: Component[] = [];

    add(component: Component) {
        this.components.push(component);
    }

    render(): void {
        console.log('render group');

        for (const component of this.components) {
            component.render();
        }
    }
}
