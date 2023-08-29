
//trasferencias
module.exports = class Transfer{
  constructor(valor,usuarioQueEnviou,usuarioQueREcebeu){
    this.usuarioQueEnviou = usuarioQueEnviou
    this.usuarioQueREcebeu = usuarioQueREcebeu
    this.valor = valor
    this.data = Date()
  }
}