//---------- FORMA 1 -----------------------//
functionfibonacci(){
	let a=0, b=1
	//Closure
	return{
		next: function() {
		 let f= a
		 a = b
		 b = f + a
		 return{ value: f, done: false}
		}
	}
}

const fibo = fibonacci()

fibo.next().value

// ----- FORMA 2 ----------//

functionfibonacci(){
	let a=0, b=1
	//Closure
	return{
		next: function() {
		 let f= a
		 a = b
		 b = f + a
		 return{ value: f, done: false}
		}
	}
}

const fibo = {}
fibo[Symbol.iterator] = fibonacci

let i=0
for (let value of fibo) {
	console.log(value)
	i++
	if(i>20) break
}
