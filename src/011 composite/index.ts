import { Group } from './group';
import { Shape } from './shape';

const group1: Group = new Group();

group1.add(new Shape());
group1.add(new Shape());
group1.add(new Shape());

const group2: Group = new Group();

group2.add(new Shape());
group2.add(group1);
group2.add(new Shape());

group2.render();
