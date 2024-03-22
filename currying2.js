function sum(...arg){
const arr = arg
const totalSum = arr.reduce((acc,curr)=>
acc+=curr
,0)
return function(b){
  return function (c){
  return totalSum + b +c
  }
}
}

console.log(sum(1,2,30,4)(8)(9))
