const Loan = require('./Loan.js')

module.exports = class Acount{
  #saldo
  static depoosRealizado
  static tdsEmprestimos
  static transferencia
  
  constructor(nome,email,conta){
    this.#saldo = 0
    this.nome = nome
    this.email = email
    this.conta = conta
    this.depoosRealizado = []
    this.tdsEmprestimos = []
    this.tdsTransferecias = []
  }
  novoDeposito(valor){
   return  this.#saldo += valor
  }
  emprestimo(valor,parcela){
    this.#saldo -= valor
    this.tdsEmprestimos.unshift(Loan.valor,Loan.parcela)
    return this.#saldo
  }
  transferencia(destino,valor){
    if(destino == Transfer.usuarioQueEnviou){
      return this.#saldo += valor
    }else if(destino == Transfer.usuarioQueREcebeu){
      return this.#saldo -= valor
    }
    this.tdsTransferecias.unshift(this.#saldo)
  }
}