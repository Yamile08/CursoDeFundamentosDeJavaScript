class Persona {
  constructor(nombre, amigos = []) {
    this.nombre = nombre
    this.amigos = amigos
  }

  listarAmigos() {
    const _this = this

    this.amigos.forEach((amigo) => {  //Con arrow function dentro de la function, this va a tomar el valor del que tiene this fuera del contexto donde fue declarada la function
      // console.log(`Hola, mi nombre es ${_this.nombre} y soy amigo de ${amigo}`)
      console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
    }/* .bind(this) */)
  }
}

const miguel = new Persona("miguel", [ "Pedro", "Juan", "Pepe" ])
