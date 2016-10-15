'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/SumOfPrime.js');

describe("Test should return sum of primes", function() {
  it("should give the total value for the sum of the prime number under 10", function() {
    assert(lib.sumOfPrimes(10) === 17 )
      });
  it("should give the total value for the sum of the prime number under 15", function() {
    assert(lib.sumOfPrimes(15) === 41 )
  });
  it("should give the total value for the sum of the prime number under 20", function() {
   assert(lib.sumOfPrimes(20) === 77 )
  });
  it("should give the total value for the sum of the prime number under 25", function() {
   assert(lib.sumOfPrimes(25) === 100 )
  });
  it("should give the total value for the sum of the prime number under 30", function() {
   assert(lib.sumOfPrimes(30) === 129 )
  });
   it("should give the total value for the sum of the prime number under 100", function(){
    assert(lib.sumOfPrimes(100) === 1060)
  });
});

describe("Test should return an error if it receives anything other than a number", function(){
  it("should return an error message when a string is passed as a parameter", function(){
    assert(lib.sumOfPrimes("abcd") === "Please pass a number")
  })
  it("should return an error message when a negative number is entered", function(){
    assert(lib.sumOfPrimes(-1) === "Enter a number greater than 0")
  }); 
  it("should return an error message when no value is entered", function(){
    assert(lib.sumOfPrimes() === "Please pass a number")
  }); 
  it("should return an error message when an array is passed as a parameter", function(){
    assert(lib.sumOfPrimes([12]) === "Please pass a number")
  });
});