const Loan = require('./Loan.js');
const User = require('./User.js');
const Deposit = require('./Deposit.js')
module.exports = class App{
  static #listaDeUsuarios = []
 
  static criarUsuario(usuario){
    for(let i = 0;i <= this.#listaDeUsuarios.length; i++){
      if(this.#listaDeUsuarios[i]?.email === usuario.email){
        return 'Email já cadastrado!'
      }
    }
    this.#listaDeUsuarios.unshift(usuario)
    return this.#listaDeUsuarios
  }
  static encontrausuario(usuario){
    for(let i = 0;i <= this.#listaDeUsuarios.length;i++){
      if(this.#listaDeUsuarios[i]?.email === usuario.email){
        return `NOME: ${this.#listaDeUsuarios[i].nome}\nEMAIL: ${this.#listaDeUsuarios[i].email}\nCONTA: ${this.#listaDeUsuarios[i].conta}` 
      }else{
        return 'usuario não cadastrado!'
      }
    }
  }
  static depositos(valor){
    const deposit = new Deposit(valor)
    return deposit
  }
  static transferencia(valor,emailTitul,emailSecund){
    const transferencia = new Transfer(valor,emailTitul,emailSecund)
    return transferencia
  }
  static enprestimo(){
    const emprestimo = new Loan(Installment)
    return emprestimo
  }
  auterartaxa(taxa){
    Loan.mudarTaxa = taxa
  }
};