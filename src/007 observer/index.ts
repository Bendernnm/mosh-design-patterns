import { DataSource } from './data-source';
import { SpreadSheet } from './spread-sheet';
import { Chart } from './chart';

const dataSource: DataSource = new DataSource(1);
const sheet1: SpreadSheet = new SpreadSheet();
const sheet2: SpreadSheet = new SpreadSheet();
const sheet3: SpreadSheet = new SpreadSheet();
const chart: Chart = new Chart();

dataSource.addObserver(sheet1);
dataSource.addObserver(sheet2);
dataSource.addObserver(sheet3);
dataSource.addObserver(chart);

dataSource.value = 2;
dataSource.value = 3;
