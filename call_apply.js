const yamile = {
  nombre: 'yamile',
  apellido: 'tabares'
}

function saludar(veces, uppercase) {
  let str = `Hola ${this.nombre} ${this.apellido}`
  str = uppercase ? str.toUpperCase() : str
  for (let i = 0; i < veces; i++) {
    console.log(str)
  }
}

const params = [3, true]
saludar.call(yamile, ...params)

//con call los parametros los pasamos solo con comas 
//Con apply los parametros los pasamos como si fueran un array ej: (yamile, [3, true])
