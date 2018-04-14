
class Toggable {
  constructor(el) {
    // inicializar el estado interno
    this.el = el
    this.el.innerHTML = 'Off'
    this.activated = false
    this.onClick = this.onClick.bind(this)
    this.el.addEventListener('click', this.onClick)  //Cuando hagamos click llamemos al metodo onClick
  }

  onClick(ev) {
    this.activated = !this.activated  //Cambiar estado interno
    this.toggleText()  //Llamar a toggleText
  }

  toggleText() {
    this.el.innerHTML = this.activated ? 'On' : 'Off'  //Cambiar el Texto
  }
}

const button = document.getElementById('boton')

const miBoton = new Toggable(button)
