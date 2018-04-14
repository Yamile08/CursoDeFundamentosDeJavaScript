setTimeout( () => {
	console.log('A') //por ultimi se ejecuta esto

},1000)

for(let i=0;i<199000000;i++) ; //esto genera un cuello de botella
console.log('B') //se ejecuta primero esto
