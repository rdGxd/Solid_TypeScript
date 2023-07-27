// Primeiro faça o código do seu jeito depois aplique o S.O.L.I.D

type CartItem = { name: string; price: number };
type OrderStatus = 'Open' | 'Closed';

// Criando a classe
export class ShoppingCartLegacy {
  // Criando o carrinho de item
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'Open';

  // Adicionando o item ao carrinho
  addItem(item: CartItem): void {
    this._items.push(item);
  }

  // Remover item do carrinho
  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  // Retornando os items que tem no carrinho
  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  // Retornando a ordem de status
  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  // Fazendo o total
  total(): number {
    // o .toFixed retorna uma string então convertemos para number antes de retorna
    return Number(
      this._items.reduce((total, next) => total + next.price, 0).toFixed(2),
    );
  }

  // Checando o carrinho
  checkOut(): void {
    if (this.isEmpty()) {
      console.log('Seu Carrinho está vazio');
      return;
    }

    this._orderStatus = 'Closed';
    this.sendMessage(`Seu pedido com o total de ${this.total()} foi recebido.`);
    this.saveOrder();
    this.clear();
  }

  // Checando se o carrinho ta vazio
  isEmpty(): boolean {
    return this._items.length === 0;
  }

  // Enviando uma mensagem para o cliente
  sendMessage(msg: string): void {
    console.log(`Mensagem enviada ${msg}`);
  }

  // Salvando a ordem de pedido
  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }

  // Limpando o array ( Carrinho )
  clear(): void {
    console.log('Carrinhos de compras foi limpo');
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({ name: `Camiseta`, price: 49.9 });
shoppingCart.addItem({ name: `Caderno`, price: 9.9 });
shoppingCart.addItem({ name: `Lapis`, price: 1.59 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.orderStatus);
shoppingCart.checkOut();
console.log(shoppingCart.orderStatus);
