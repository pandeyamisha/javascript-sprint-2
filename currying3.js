function sum(...arg1){
const arr1 = arg1
const sum1 = arr1.reduce((acc,curr)=>
acc+=curr
,0)
return function(...arg2){
  const arr2 = arg2
  const sum2 = arr2.reduce((acc,curr)=>
  acc+=curr
  ,0)
  return sum1 + sum2
}
}

console.log(sum(10,30)(40,60,60))
