let totalSum =0

function sum(...arg){
  for(let i=0;i<arg.length;i++){
  totalSum+= arg[i]
}
return function(b){
  return function(c){
    return totalSum +b+c
  }
}
}

const ans = sum(1,2,3,5,6)(1)(2)
console.log(ans)
