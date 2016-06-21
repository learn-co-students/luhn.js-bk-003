'use strict';

function Luhn(number){
  let split = number.toString().split("").map(function(m){return +m});
  let counter = 0;
  this.checkDigit = split.slice(-1)[0];

 for(let i = split.length - 1; i >= 0; --i){
    if(counter%2 !== 0){
      split[i] *= 2;
      if(split[i] >= 10){
        split[i] -= 9;
      }
    }else{
      split[i];
    }
    ++counter
  }
   this.addends = split;
   this.checksum = split.reduce(function(a,b){return a +b;});
   this.valid = this.checksum%10 ===0? true:false;


};

Luhn.create = function(numbers) {
  let split = numbers.toString().split("").map(function(m){return +m});	

  let counter = 0;

  for(let i = split.length - 1; i >= 0; --i){
    if(counter%2 === 0){
      split[i] *= 2;

      if(split[i] >= 10){
          split[i] -= 9;
       }
    }else{
     split[i];
    }
   ++counter
 }
 let valueSoFar = split.reduce(function(a,b){return a + b;});
  let remainder = valueSoFar%10;
  let original = numbers.toString().split("").map(function(m){return +m});
  if(remainder === 0){
  	original.push(0);
  }else{
    let num = 10 - remainder
    original.push(num)
  }

  return +original.join("");
};












