'use strict';

function Luhn (nums){
	this.nums = nums
	this.addends = this.adDends(nums)
	this.checksum = this.sum(this.addends)
	this.valid = this.validate(this.adDends(nums))
	this.checkDigit = this.checkDigit(nums)
};

Luhn.prototype.checkDigit = function(nums) {
	// body...
	var nums = nums.toString().split('')
	return Number(nums[nums.length-1])
};

Luhn.prototype.adDends = function(nums) {
	// body...
	var arr = []
	var arr2 = nums.toString().split('')
	for (var i=0; i<arr2.length;i++) {
		if (i%2==1) {
			var e = Number(arr2[arr2.length-(1+i)])*2
			if (e>=10) {
				e = e-9
			}
			arr.unshift(e)
		} else {
			arr.unshift(Number(arr2[arr2.length-(1+i)]))
		}
	}
	return arr
};

Luhn.prototype.sum = function(addends) {
	// body...
	var summ = 0
	addends.forEach(function(num){
		summ = summ+Number(num)
	})
	return summ
};

Luhn.create = function(num) {
	// body...
	var luhn = new this(num)
	var arr = num.toString().split('')
	var i = 0
	while (true) {
		arr.push(i)
		arr = luhn.adDends(Number(arr.join('')))
		if (luhn.validate(arr)) {
			break
		}
		i++
		arr = num.toString().split('')
	}
		return Number(num.toString()+i.toString())
};

Luhn.prototype.validate = function(num) {
	// body...
	var nums = this.sum(num)
	if (nums % 10 == 0) {
		return true
	} else {
		return false
	}
};