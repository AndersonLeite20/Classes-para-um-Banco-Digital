

module.exports = class Installment{
  constructor(valorNparcelas){
    this.valorDaparcela = valorNparcelas.valorEnprestimo
    this.numeroDeParcelas = valorNparcelas.parcelas
    this.situacao = ''
  }
  msituacaoParcela(){
    if(this.numeroDeParcelas === 0){
      return this.situacao = 'PAGA'
    }else{
      return this.situacao = 'PENDENTE'
    }
  }
}