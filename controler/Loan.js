const Deposit = require("./Deposit")

module.exports = class Loan extends Deposit{
  static #taxaDeJuros = 0
  constructor(valorNumeroParcela){
    //instâncias de Installments
    this.valorEnprestimo =  valorNumeroParcela.valorEnprestimo
    this.parcelas = valorNumeroParcela.numeroParcelas
  }
  //ler taxa de juros
  static get lerTaxa(){
    return this.#taxaDeJuros
  }
  //mudar taxa de juros
  static set mudarTaxa(novaTaxa){
    this.#taxaDeJuros = novaTaxa
    return this.#taxaDeJuros
  }
  //caucular enprestimo
  calcularEnprestimo(){
    this.valorEnprestimo = this.valorEnprestimo / this.parcelas
    return this.valorEnprestimo
  }
}