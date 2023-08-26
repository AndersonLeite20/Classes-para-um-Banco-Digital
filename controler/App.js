const Acount = require("./Acount");
const Deposit = require("./Deposit");
const Installment = require("./Installmente");
const Loan = require("./Loan");
const Transfer = require("./Transfer");
const User = require("./User.js");

class App {
  static #listaDeUsuarios = []
  static criarUsuario(email){
    const retorno = this.#listaDeUsuarios.find(email)
    if(!retorno === true){
      return this.#listaDeUsuarios.push(email)
    }else{
      return `Falha email ja cadastrado`
    }
  }
  static encontrausuario(email){
    const retorno = this.#listaDeUsuarios.find(email)
    if(retorno === true){
      const i = this.#listaDeUsuarios.indexOf(email)
      console.log(`${this.#listaDeUsuarios[i]}`)
    }else{
      console.log(`Falha usuario não encontrado`)
    }
  }
  static deposito(valor){
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
    const taxaNova = new Loan(taxa)
    return taxaNova
  }
};
const user = new User('Anderson Leite','als@200.com',2314)
const app = new App(user)
console.log(app)