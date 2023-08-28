const Deposit = require("./Deposit.js");
const App = require("./App.js");
/*const Acount = require("./Acount.js");
const Installment = require("./Installmente.js");
const Loan = require("./Loan.js");
const Transfer = require("./Transfer.js");
const User = require("./User.js");*/

const usuario1 = {
  nome: 'anderson',
  email: 'alsand@gmail.com',
  conta:123456
}
const usuario2 = {
  nome: 'Adjaci',
  email: 'cnasjn@25gmail.com',
  conta: 254598
}
const usuario3 = {
  nome: 'bea',
  email: 'aaaa@bb.gmailm',
  conta: 254556
}
const depos = new Deposit()
const app = new App()
App.criarUsuario(usuario1)
console.log(App.encontrausuario(usuario1))
console.log(App.criarUsuario(usuario3))
