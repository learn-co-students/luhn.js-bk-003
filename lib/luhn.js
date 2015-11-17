'use strict';

function Luhn (num){
	this.num = num
	this.checkDigit = num % 10;
	this.addends = addendit(num);
	this.checksum = getsum(this.addends);
	this.valid = checkvalidity(this.checksum);
};

Luhn.create = function(number) {
	var luhn = new Luhn(number*10);
	if (luhn.checksum%10 == 0){
		return number * 10;
	} else {
		return number * 10 + (10-luhn.checksum%10);
	}
};

function addendit (num) {
	var num_string = num.toString();
	var return_arr = [];
	var length = num_string.length
	for (var i = length-1; i >= 0 ; i--) {		
		if ((i % 2 == 0 && length % 2 == 0)|| (i % 2 != 0 && length % 2 != 0)) {
			var n = num_string[i] * 2;
			if (n >10) { n -= 9;};
			//return_arr = n + return_arr;
			return_arr.unshift(parseInt(n));
		} else{
			//return_arr = num_string[i] + return_arr;
			return_arr.unshift(parseInt(num_string[i]));
		};	
	};
	return return_arr;
}

function getsum (addends) {
	var sum = 0;
	for (var i = 0; i < addends.length; i++) {
		sum += addends[i];
	};
	return sum;
};

function checkvalidity (num) {
	if (num % 10 == 0) {
		return true;
	} else{
		return false;
	};
}