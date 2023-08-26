const Loan = require("./Loan")

module.exports = class Acount extends Loan{
  #saldo
  constructor(nome,email,conta){
    this.nome = nome
    this.email = email
    this.conta = conta
    this.depoosRealizado = []
    this.tdsEmprestimos = []
    this.tdsTransferecias = []
  }
  deposito(valor){
    return this.#saldo += valor
  }
  emprestimo(valor){
    this.#saldo += valor
    this.tdsEmprestimos.unshift(Loan)
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