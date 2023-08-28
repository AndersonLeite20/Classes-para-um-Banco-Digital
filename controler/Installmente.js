

module.exports = class Installment{
  constructor(valor,parcela){
    this.parcelas = enprestimo.numeroDeParcelas 
    this.valor = enprestimo.valorDaparcela
    this.situacao = ''
  }
  situacaoParcela(){
    if(this.numeroDeParcelas === 0){
      return this.situacao = 'PAGA'
    }else{
      return this.situacao = 'PENDENTE'
    }
  }
}