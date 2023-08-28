

module.exports = class Acount extends Deposit{
  #saldo
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
    this.#saldo += valor
  }
  emprestimo(valor){
    this.#saldo += valor
    this.tdsEmprestimos.unshift(Loan.valor)
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