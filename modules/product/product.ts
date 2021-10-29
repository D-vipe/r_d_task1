import { v4 as uuidv4 } from 'uuid';
import {Item} from './item';
var faker = require('faker');

export class Product {
    constructor(private items: Array<Item>) {
        this.items = [];
    }

    genItem() {
        const newItem = new Item(faker.commerce.productName(), faker.commerce.price(), uuidv4());
        this.items.push(newItem);
    }

    genItems(count: number) {
        if (count > 0) {
            console.time('StartGen');
            for (let i = 0; i < count; i++) {
                this.genItem();
            }
            console.timeEnd('StartGen');
        } else {
            console.warn('CANT\'T GENERATE ITEMS WITHOUT CERTAINT COUNT NUMBER');
        }
    }

    getItem(index: number) {
        if (this.items.length > 0) {
            if (index > 0 && this?.items[index]) {
                console.log({'item_id': this.items[index].id, 'item_name': this.items[index].name, 'item_cost': this.items[index].cost});
            } else {
                console.warn('ITEM NOT FOUND');
            }
        } else {
            console.warn('THERE ARE NO ITEMS YET. NOTHING TO SHOW');
        }
    }

    getAllItems() {
        if (this.items.length > 0) {
            console.table(this.items);
        } else {
            console.log('No items are found');
        }

    }

    clearAllItems() {
        this.items = [];
        console.warn('ALL ITEMS WERE CLEARED');
    }
}
