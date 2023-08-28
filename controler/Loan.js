const Installment = require("./Installmente")

module.exports = class Loan extends Installment{
  static #taxaDeJuros = 0
  constructor(valor,parcela){
    //instâncias de Installments
    super(valor,parcela)
    this.data = Date()
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
    this.valor = this.valor * this.parcelas
    return this.valor
  }
}
