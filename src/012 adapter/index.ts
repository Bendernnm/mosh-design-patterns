import { ImageView } from './image-view';
import { Image } from './image';
import { VividFilter } from './vivid-filter';
import { CaramelAdapter } from './caramel-adapter';
import { Caramel } from './ava-filters';
import { CaramelAdapter2 } from './caramel-adapter-2';

const imageView = new ImageView(new Image());

imageView.apply(new VividFilter());
imageView.apply(new CaramelAdapter(new Caramel()));
imageView.apply(new CaramelAdapter2());
