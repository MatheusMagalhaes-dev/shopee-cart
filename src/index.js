import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to the your Shopee Cart!")
//criando dois itens
const item1 = await createItem("Hotwheels Ferrari", "20.99", "1");
const item2 = await createItem("Hotwheels lamborghini", "39.99", 3);

//adicionei dois items ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem( myCart, item2);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.displayCart(myCart);

//deletei dois items ao carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

console.log("Shopee cart Total IS:");
await cartService.calculeTotal(myCart);