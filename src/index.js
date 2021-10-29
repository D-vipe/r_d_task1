import { Product } from '../modules/product/product';

function main() {
    const products = new Product();
    console.log('initiating products...');
    console.log('======================');
    console.log('======================');

    console.log('products available:');
    products.getAllItems();

    console.log('======================');
    console.log('======================');

    console.log('GENERATE 1000 RECORDS');
    products.genItems(1000);

    console.log('======================');
    console.log('======================');

    // Show item with a certain index
    products.getItem(50);
    products.getItem(45);
    products.getItem();
    products.getItem(1001);

    // Show all generated items
    // products.getAllItems();
}

main();
