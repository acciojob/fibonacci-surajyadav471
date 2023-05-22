function fibonacci(num) {
// your code here
	if(num==1) return 0;
	if(num==2) return 1;
	let a=0;
	let b=1;
	for (let i=0;i<num-1;i++){
		let sum=0;
		sum=a+b;
		a=b;
		b=sum;
	}
	return a;
}

module.exports = fibonacci;
