const Deposit = require("./Deposit");
//trasferencias
module.exports = class Transfer extends Deposit{
  constructor(valor,usuarioQueEnviou,usuarioQueREcebeu){
    super(valor)
    this.usuarioQueEnviou = usuarioQueEnviou
    this.usuarioQueREcebeu = usuarioQueREcebeu
  }
}