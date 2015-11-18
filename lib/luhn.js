'use strict';

function Luhn (nums){
	this.nums = nums
	this.addends = adDends(nums)
	this.checksum = sum(this.addends)
	this.checkDigit = this.nums % 10
	this.valid = (this.checksum % 10 == 0)
};

function adDends(nums) {
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

function sum(addends) {
	var summ = 0
	addends.forEach(function(num){
		summ = summ+Number(num)
	})
	return summ
};

Luhn.create = function(num) {
	var arr = num.toString().split('')
	var i = 0
	while (true) {
		arr.push(i)
		arr = adDends(Number(arr.join('')))
		if (sum(arr)%10==0) {
			break
		}
		i++
		arr = num.toString().split('')
	}
		return Number(num.toString()+i.toString())
};