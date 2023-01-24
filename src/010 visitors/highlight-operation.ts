import { Operation } from './operation';
import { HeadingNode } from './heading-node';
import { AnchorNode } from './anchor-node';

export class HighlightOperation implements Operation {
    apply(node: HeadingNode | AnchorNode): void {
        if (node instanceof HeadingNode) {
            return console.log('highlight heading');
        }

        console.log('highlight ancchor');
    }
}
