import { HtmlDocument } from './html-document';
import { HeadingNode } from './heading-node';
import { AnchorNode } from './anchor-node';
import { HighlightOperation } from './highlight-operation';

const htmlDocument = new HtmlDocument();

htmlDocument.add(new HeadingNode());
htmlDocument.add(new AnchorNode());

htmlDocument.execute(new HighlightOperation());
