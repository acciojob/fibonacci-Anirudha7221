function fibonacci(num) {
// your code here
	let a=0;
	let b=1;
	let ct=0;
	let temp=num;
	while(ct<=temp)
		{
			let c=a+b;
			a=b;
			b=c;
			num=c;
			ct++;
		}
}
let num=prompt();
module.exports = fibonacci(num){
	console.log(num);
};
