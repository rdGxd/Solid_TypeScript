import { Order } from './entities/order';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';

// Client code -> MAIN
const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product(`Camiseta`, 49.9));
shoppingCart.addItem(new Product(`Caderno`, 9.9));
shoppingCart.addItem(new Product(`Lapis`, 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkOut();
console.log(order.orderStatus);
