import { Operation } from './operation';

export interface HtmlNode {
    execute(operation: Operation): void;
}
