//your JS code here. If required.
const arr = [1,2,3,4]
const promise = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve(arr)
	},3000)
})
function abc(){
	return promise
}
x.then((arr)=>{
	const oddArr =arr.filter((num)=>{
		return parseInt(num%2)===1
	})
	const div = document.getElementById("output")
	div.innerText = oddArr;
})

x.then((arr)=>{
	const newArr =arr.map((num)=>{
		if(parseInt(num%2)===0){
			return num*2
		}
	})
	const div = document.getElementById("output")
	div.innerText = newArr;
})

const x = abc()