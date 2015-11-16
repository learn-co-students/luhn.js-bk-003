'use strict';

function Luhn (number){
  this.numArray = number.toString().split("").map(Number);
  this.checkDigit = this.numArray.pop();
  this.numArray.push(this.checkDigit);

  this.addends = findAddends(this.numArray.join(""));

  this.checksum = findChecksum(this.addends);

  this.valid = findValid(this.checksum);

};

function findAddends (number) {
  var holderArr = number.toString().split("").map(Number).reverse();
  for (var i = 1; i < holderArr.length; i += 2) {
    if (holderArr[i] * 2 > 10) {
      holderArr[i] = (holderArr[i] * 2) - 9;
    }
    else {
      holderArr[i] = holderArr[i] * 2;
    }
  }
  return holderArr.reverse();
}

function findChecksum (numberArray) {  
  var sum = 0;
  for (var i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
  }
  return sum
}

function findValid (checksum) {  
    if (checksum.toString().split("").reverse().map(Number)[0] == 0) {
    return true;
  }
  else {
    return false;
  }
}

Luhn.create = function(number) {
  var addends = findAddends(number);
  var checksum = findChecksum(addends);
  var checkNum = new Array(0,1,2,3,4,5,6,7,8,9);
  for (var i = 0; i < checkNum.length; i++) {
    var luhnNum = number.toString().split("").map(Number);
    luhnNum.push(checkNum[i]);
    var finalNum = parseInt(luhnNum.join(''));
    if (findValid(findChecksum(findAddends(finalNum)))){
      return finalNum
    }
  }
}