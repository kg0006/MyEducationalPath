let cost = 450;
let sell = 450; 

let res;

if(cost > sell){ 
  res = `loss = ${cost - sell}`
}else if (sell > cost){
  res = `profit = ${sell - cost}`
} else {
  res = "no profit and no loss"
}

console.log(res);