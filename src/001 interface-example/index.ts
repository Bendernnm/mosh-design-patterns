import { A } from './interface-a';
import { Aa } from './class-aa';

(async function main() {
    const obj: A = new Aa();

    obj.doA()
})();
