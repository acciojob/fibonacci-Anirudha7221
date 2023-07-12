function fibonacci(num) {
// your code here
	let a=0;
	let b=1;
	let c=a+b;
	a=b;
	b=c;
	return c;
}
//let num=50;
module.exports = fibonacci;
