import { HeadingNode } from './heading-node';
import { AnchorNode } from './anchor-node';

export interface Operation {
    apply(node: HeadingNode | AnchorNode): void;
}
