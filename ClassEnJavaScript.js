class Punto {  //Clase
  constructor(x, y) {  //Constructor
    this.x = x  //Parametros
    this.y = y  //Parametros
  }

  moverEnX(x) {  //Metodo
    this.x += x
  }

  moverEnY(y) {  //Metodo
    this.y += y
  }

  distancia(p) {  //Metodo
    const x = this.x - p.x
    const y = this.y - p.y

    return Math.sqrt(x * x + y * y)  //Logica de la operacion
  }
}

const p1 = new Punto(0, 4)  //Creando y guardando un new objeto pasandole atributos
const p2 = new Punto(3, 0)  //Creando y guardando un new objeto pasandole atributos

//Probando en la consola
console.log(p1.distancia(p2))
console.log(p2.distancia(p1))
p1.moverEnX(10)
console.log(p1.distancia(p2))
p2.moverEnY(-4)
console.log(p1.distancia(p2))
