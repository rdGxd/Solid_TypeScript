// Criando a classe abstrata e acrescentando o método de para calcular o desconto
export abstract class Discount {
  // Calculando o desconto
  abstract calculate(value: number): number;
}

// Criando a classe para calcular -> Ela é estendida de Discount
export class FiftyPercentDiscount extends Discount {
  // O valor do desconto 0.5 = 50% de desconto
  private readonly discount = 0.5;

  // Calculando o valor do desconto
  calculate(price: number): number {
    // Retornando o valor ja com o desconto
    return price - price * this.discount;
  }
}

// Criando a classe para calcular -> Ela é estendida de Discount
export class TenPercentDiscount extends Discount {
  // O valor do desconto 0.1 = 10% de desconto
  private readonly discount = 0.1;

  // Calculando o valor do desconto
  calculate(price: number): number {
    // Retornando o valor ja com o desconto
    return price - price * this.discount;
  }
}

// Criando a classe para calcular -> Ela é estendida de Discount
export class NoDiscount extends Discount {
  calculate(price: number): number {
    // Retornando o valor original sem desconto
    return price;
  }
}
