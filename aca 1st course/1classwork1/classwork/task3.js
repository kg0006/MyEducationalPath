let num = 75;

let ex = num >= 10 && num <= 99;

let dig1;
let dig2;
let res;

if(ex){
  dig1 = (num - (num % 10)) / 10
  dig2 = num % 10
};

if(dig1 > dig2){
  res = "yes"
} else {
  res = "no"
};

console.log(res);

