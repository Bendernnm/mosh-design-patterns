import { HtmlNode } from './html-node';
import { Operation } from './operation';

export class AnchorNode implements HtmlNode {
    execute(operation: Operation): void {
        operation.apply(this);
    }
}
