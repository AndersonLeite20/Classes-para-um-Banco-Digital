const Deposit = require("./controler/Deposit.js");
const App = require("./controler/App.js");
const Acount = require("./controler/Acount.js");
const { mudarTaxa } = require("./controler/Loan.js");
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
const conta = new Acount(usuario2)
App.criarUsuario(usuario1)
App.encontrausuario(usuario1)
//Novo deposito
conta.novoDeposito(12)
conta.novoDeposito(45)
//Transferencia
//App.transferencia(150,'alsand@gmail.com','aaaa@bb.gmailm')




