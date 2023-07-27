import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { OrderStatus } from './interfaces/order-status';
import { ShoppingCart } from './shopping-cart';

// Uma classe pode ser considerada coesa quando ela utiliza seus atributos dentro de seus métodos

export class Order {
  private _orderStatus: OrderStatus = 'Open';

  // Injetando dependências na classe
  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ) {}

  // Retornando a ordem de status
  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  // Checando o carrinho
  checkOut(): void {
    // Verificando se o carrinho está vazio
    if (this.cart.isEmpty()) {
      console.log('Seu Carrinho está vazio');
      return;
    }

    // Fechando a ordem
    this._orderStatus = 'Closed';

    // Enviando mensagem
    this.messaging.sendMessage(
      `Seu pedido com o total de ${this.cart.total()} foi recebido.`,
    );

    // Salvando a ordem de pedido
    this.persistency.saveOrder();

    // Limpando o carrinho
    this.cart.clear();
  }
}
