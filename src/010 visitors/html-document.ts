import { HtmlNode } from './html-node';
import { Operation } from './operation';

export class HtmlDocument {
    private htmlNodes: HtmlNode[] = [];

    add(htmlNode: HtmlNode): void {
        this.htmlNodes.push(htmlNode);
    }

    execute(operation: Operation): void {
        for (const htmlNode of this.htmlNodes) {
            htmlNode.execute(operation);
        }
    }
}
