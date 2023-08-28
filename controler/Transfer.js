
//trasferencias
module.exports = class Transfer{
  constructor(usuarioQueEnviou,usuarioQueREcebeu,valor){
    this.usuarioQueEnviou = usuarioQueEnviou
    this.usuarioQueREcebeu = usuarioQueREcebeu
    this.valor = valor
    this.data = Date()
  }
}