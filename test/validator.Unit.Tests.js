describe('validator.Unit.Tests.js', function(){
  "use strict";

  var path = require('path');
  var should = require('chai').should();
  var consoleOutput = true;

  var validator;

  var nothing;

  var givenTypeofUndefined = function(functionName, expected) {
    var value;
    describe('given typeof undefined;', function() {
      beforeEach(function(){
        value = nothing;
      });
      describe('when called', function() {
        var resultsReturned;
        beforeEach(function(){
          resultsReturned = validator[functionName](value);
        });
        it('then should return ' + expected, function(){
          resultsReturned.should.equal(expected);
        });
      });
    });
  };

  var givenNull = function(functionName, expected) {
    var value;
    describe('given null;', function() {
      beforeEach(function(){
        value = null;
      });
      describe('when called', function() {
        var resultsReturned;
        beforeEach(function(){
          resultsReturned = validator[functionName](value);
        });
        it('then should return ' + expected, function(){
          resultsReturned.should.equal(expected);
        });
      });
    });
  };

  var givenNaN = function(functionName, expected) {
    var value;
    describe('given NaN;', function() {
      beforeEach(function(){
        value = parseInt('NotANumber', 10);
      });
      describe('when called', function() {
        var resultsReturned;
        beforeEach(function(){
          resultsReturned = validator[functionName](value);
        });
        it('then should return ' + expected, function(){
          resultsReturned.should.equal(expected);
        });
      });
    });
  };

  var givenStringEmpty = function(functionName, expected) {
    var value;
    describe('given empty string;', function() {
      beforeEach(function(){
        value = '';
      });
      describe('when called', function() {
        var resultsReturned;
        beforeEach(function(){
          resultsReturned = validator[functionName](value);
        });
        it('then should return ' + expected, function(){
          resultsReturned.should.equal(expected);
        });
      });
    });
  };

  var givenString = function(functionName, expected) {
    var value;
    describe('given a string;', function () {
      beforeEach(function () {
        value = 'abc';
      });
      describe('when called', function () {
        var resultsReturned;
        beforeEach(function () {
          resultsReturned = validator[functionName](value);
        });
        it('then should return ' + expected, function () {
          resultsReturned.should.equal(expected);
        });
      });
    });
  };

  var givenInteger = function(functionName, expected) {
    var value;
    describe('given a integer;', function () {
      beforeEach(function () {
        value = 123;
      });
      describe('when called', function () {
        var resultsReturned;
        beforeEach(function () {
          resultsReturned = validator[functionName](value);
        });
        it('then should return ' + expected, function () {
          resultsReturned.should.equal(expected);
        });
      });
    });
  };

  var givenObjectEmpty = function(functionName, expected) {
    var value;
    describe('given an empty object;', function () {
      beforeEach(function () {
        value = {};
      });
      describe('when called', function () {
        var resultsReturned;
        beforeEach(function () {
          resultsReturned = validator[functionName](value);
        });
        it('then should return ' + expected, function () {
          resultsReturned.should.equal(expected);
        });
      });
    });
  };

  var givenObjectPopulated = function(functionName, expected) {
    var value;
    describe('given a populated object;', function () {
      beforeEach(function () {
        value = {"abc": 123};
      });
      describe('when called', function () {
        var resultsReturned;
        beforeEach(function () {
          resultsReturned = validator[functionName](value);
        });
        it('then should return ' + expected, function () {
          resultsReturned.should.equal(expected);
        });
      });
    });
  };

  var givenArrayEmpty = function(functionName, expected) {
    var value;
    describe('given an empty array;', function() {
      beforeEach(function(){
        value = [];
      });
      describe('when called', function() {
        var resultsReturned;
        beforeEach(function(){
          resultsReturned = validator[functionName](value);
        });
        it('then should return ' + expected, function(){
          resultsReturned.should.equal(expected);
        });
      });
    });
  };

  var givenArrayPopulated = function(functionName, expected) {
    var value;
    describe('given a populated array;', function() {
      beforeEach(function(){
        value = ["abc"];
      });
      describe('when called', function() {
        var resultsReturned;
        beforeEach(function(){
          resultsReturned = validator[functionName](value);
        });
        it('then should return ' + expected, function(){
          resultsReturned.should.equal(expected);
        });
      });
    });
  };

  var givenObjectDate = function(functionName, expected) {
    var value;
    describe('given a date object;', function() {
      beforeEach(function(){
        value = new Date();
      });
      describe('when called', function() {
        var resultsReturned;
        beforeEach(function(){
          resultsReturned = validator[functionName](value);
        });
        it('then should return ' + expected, function(){
          resultsReturned.should.equal(expected);
        });
      });
    });
  };

  var givenObjectError = function(functionName, expected) {
    var value;
    describe('given an error object;', function() {
      beforeEach(function(){
        value = new Error("some error");
      });
      describe('when called', function() {
        var resultsReturned;
        beforeEach(function(){
          resultsReturned = validator[functionName](value);
        });
        it('then should return ' + expected, function(){
          resultsReturned.should.equal(expected);
        });
      });
    });
  };

  var givenInteger0 = function(functionName, expected) {
    var value;
    describe('given 0;', function () {
      beforeEach(function () {
        value = 0;
      });
      describe('when called', function () {
        var resultsReturned;
        beforeEach(function () {
          resultsReturned = validator[functionName](value);
        });
        it('then should return ' + expected, function () {
          resultsReturned.should.equal(expected);
        });
      });
    });
  };

  var givenBooleanFalse = function(functionName, expected) {
    var value;

    describe('given false;', function () {
      beforeEach(function () {
        value = false;
      });
      describe('when called', function () {
        var resultsReturned;
        beforeEach(function () {
          resultsReturned = validator[functionName](value);
        });
        it('then should return ' + expected, function () {
          resultsReturned.should.equal(expected);
        });
      });
    });
  };

  var givenStringFalse = function(functionName, expected) {
    var value;
    describe('given "false";', function () {
      beforeEach(function () {
        value = "false";
      });
      describe('when called', function () {
        var resultsReturned;
        beforeEach(function () {
          resultsReturned = validator[functionName](value);
        });
        it('then should return ' + expected, function () {
          resultsReturned.should.equal(expected);
        });
      });
    });
  };

  var givenStringF = function(functionName, expected) {
    var value;
    describe('given "F";', function () {
      beforeEach(function () {
        value = "F";
      });
      describe('when called', function () {
        var resultsReturned;
        beforeEach(function () {
          resultsReturned = validator[functionName](value);
        });
        it('then should return ' + expected, function () {
          resultsReturned.should.equal(expected);
        });
      });
    });
  };

  var givenInteger1 = function(functionName, expected) {
    var value;
    describe('given 1;', function () {
      beforeEach(function () {
        value = 1;
      });
      describe('when called', function () {
        var resultsReturned;
        beforeEach(function () {
          resultsReturned = validator[functionName](value);
        });
        it('then should return ' + expected, function () {
          resultsReturned.should.equal(expected);
        });
      });
    });
  };

  var givenBooleanTrue = function(functionName, expected) {
    var value;
    describe('given true;', function () {
      beforeEach(function () {
        value = true;
      });
      describe('when called', function () {
        var resultsReturned;
        beforeEach(function () {
          resultsReturned = validator[functionName](value);
        });
        it('then should return ' + expected, function () {
          resultsReturned.should.equal(expected);
        });
      });
    });
  };

  var givenStringTrue = function(functionName, expected) {
    var value;
    describe('given "true";', function () {
      beforeEach(function () {
        value = "true";
      });
      describe('when called', function () {
        var resultsReturned;
        beforeEach(function () {
          resultsReturned = validator[functionName](value);
        });
        it('then should return ' + expected, function () {
          resultsReturned.should.equal(expected);
        });
      });
    });
  };

  var givenStringT = function(functionName, expected) {
    var value;
    describe('given "T";', function () {
      beforeEach(function () {
        value = "T";
      });
      describe('when called', function () {
        var resultsReturned;
        beforeEach(function () {
          resultsReturned = validator[functionName](value);
        });
        it('then should return ' + expected, function () {
          resultsReturned.should.equal(expected);
        });
      });
    });
  };

  beforeEach(function(){

    var filePath = path.join(path.join(__dirname, '../lib'),'simple.js.validator.js');
    validator = require(filePath);

  });
  describe('#isEmpty()', function() {
    var functionName = "isEmpty";
    givenTypeofUndefined(functionName, true);
    givenNull(functionName, true);
    givenNaN(functionName, true);
    givenStringEmpty(functionName, true);
    givenString(functionName, false);
    givenInteger(functionName, false);
    givenObjectEmpty(functionName, true);
    givenObjectPopulated(functionName, false);
    givenArrayEmpty(functionName, true);
    givenArrayPopulated(functionName, false);
    givenObjectDate(functionName, false);
    givenObjectError(functionName, false);
    givenInteger0(functionName, false);
    givenBooleanFalse(functionName, false);
    givenStringFalse(functionName, false);
    givenStringF(functionName, false);
    givenInteger1(functionName, false);
    givenBooleanTrue(functionName, false);
    givenStringTrue(functionName, false);
    givenStringT(functionName, false);
  });
  describe('#isNotEmpty()', function() {
    var functionName = "isNotEmpty";
    givenTypeofUndefined(functionName, false);
    givenNull(functionName, false);
    givenNaN(functionName, false);
    givenStringEmpty(functionName, false);
    givenString(functionName, true);
    givenInteger(functionName, true);
    givenObjectEmpty(functionName, false);
    givenObjectPopulated(functionName, true);
    givenArrayEmpty(functionName, false);
    givenArrayPopulated(functionName, true);
    givenObjectDate(functionName, true);
    givenObjectError(functionName, true);
    givenInteger0(functionName, true);
    givenBooleanFalse(functionName, true);
    givenStringFalse(functionName, true);
    givenStringF(functionName, true);
    givenInteger1(functionName, true);
    givenBooleanTrue(functionName, true);
    givenStringTrue(functionName, true);
    givenStringT(functionName, true);
  });
  describe('#isDefined()', function() {
    var functionName = "isDefined";
    givenTypeofUndefined(functionName, false);
    givenNull(functionName, false);
    givenNaN(functionName, false);
    givenStringEmpty(functionName, true);
    givenString(functionName, true);
    givenInteger(functionName, true);
    givenObjectEmpty(functionName, true);
    givenObjectPopulated(functionName, true);
    givenArrayEmpty(functionName, true);
    givenArrayPopulated(functionName, true);
    givenObjectDate(functionName, true);
    givenObjectError(functionName, true);
    givenInteger0(functionName, true);
    givenBooleanFalse(functionName, true);
    givenStringFalse(functionName, true);
    givenStringF(functionName, true);
    givenInteger1(functionName, true);
    givenBooleanTrue(functionName, true);
    givenStringTrue(functionName, true);
    givenStringT(functionName, true);
  });
  describe('#isNotDefined()', function() {
    var functionName = "isNotDefined";
    givenTypeofUndefined(functionName, true);
    givenNull(functionName, true);
    givenNaN(functionName, true);
    givenStringEmpty(functionName, false);
    givenString(functionName, false);
    givenInteger(functionName, false);
    givenObjectEmpty(functionName, false);
    givenObjectPopulated(functionName, false);
    givenArrayEmpty(functionName, false);
    givenArrayPopulated(functionName, false);
    givenObjectDate(functionName, false);
    givenObjectError(functionName, false);
    givenInteger0(functionName, false);
    givenBooleanFalse(functionName, false);
    givenStringFalse(functionName, false);
    givenStringF(functionName, false);
    givenInteger1(functionName, false);
    givenBooleanTrue(functionName, false);
    givenStringTrue(functionName, false);
    givenStringT(functionName, false);
  });
  describe('#isTrue()', function() {
    var functionName = "isTrue";
    givenTypeofUndefined(functionName, false);
    givenNull(functionName, false);
    givenNaN(functionName, false);
    givenStringEmpty(functionName, false);
    givenString(functionName, false);
    givenInteger(functionName, false);
    givenObjectEmpty(functionName, false);
    givenObjectPopulated(functionName, false);
    givenArrayEmpty(functionName, false);
    givenArrayPopulated(functionName, false);
    givenObjectDate(functionName, false);
    givenObjectError(functionName, false);
    givenInteger0(functionName, false);
    givenBooleanFalse(functionName, false);
    givenStringFalse(functionName, false);
    givenStringF(functionName, false);
    givenInteger1(functionName, true);
    givenBooleanTrue(functionName, true);
    givenStringTrue(functionName, true);
    givenStringT(functionName, true);
  });
  describe('#isFalse()', function() {
    var functionName = "isFalse";
    givenTypeofUndefined(functionName, false);
    givenNull(functionName, false);
    givenNaN(functionName, false);
    givenStringEmpty(functionName, false);
    givenString(functionName, false);
    givenInteger(functionName, false);
    givenObjectEmpty(functionName, false);
    givenObjectPopulated(functionName, false);
    givenArrayEmpty(functionName, false);
    givenArrayPopulated(functionName, false);
    givenObjectDate(functionName, false);
    givenObjectError(functionName, false);
    givenInteger0(functionName, true);
    givenBooleanFalse(functionName, true);
    givenStringFalse(functionName, true);
    givenStringF(functionName, true);
    givenInteger1(functionName, false);
    givenBooleanTrue(functionName, false);
    givenStringTrue(functionName, false);
    givenStringT(functionName, false);
  });
  describe('#isArray()', function() {
    var functionName = "isArray";
    givenTypeofUndefined(functionName, false);
    givenNull(functionName, false);
    givenNaN(functionName, false);
    givenStringEmpty(functionName, false);
    givenString(functionName, false);
    givenInteger(functionName, false);
    givenObjectEmpty(functionName, false);
    givenObjectPopulated(functionName, false);
    givenArrayEmpty(functionName, true);
    givenArrayPopulated(functionName, true);
    givenObjectDate(functionName, false);
    givenObjectError(functionName, false);
    givenInteger0(functionName, false);
    givenBooleanFalse(functionName, false);
    givenStringFalse(functionName, false);
    givenStringF(functionName, false);
    givenInteger1(functionName, false);
    givenBooleanTrue(functionName, false);
    givenStringTrue(functionName, false);
    givenStringT(functionName, false);
  });
  describe('#isNotArray()', function() {
    var functionName = "isNotArray";
    givenTypeofUndefined(functionName, true);
    givenNull(functionName, true);
    givenNaN(functionName, true);
    givenStringEmpty(functionName, true);
    givenString(functionName, true);
    givenInteger(functionName, true);
    givenObjectEmpty(functionName, true);
    givenObjectPopulated(functionName, true);
    givenArrayEmpty(functionName, false);
    givenArrayPopulated(functionName, false);
    givenObjectDate(functionName, true);
    givenObjectError(functionName, true);
    givenInteger0(functionName, true);
    givenBooleanFalse(functionName, true);
    givenStringFalse(functionName, true);
    givenStringF(functionName, true);
    givenInteger1(functionName, true);
    givenBooleanTrue(functionName, true);
    givenStringTrue(functionName, true);
    givenStringT(functionName, true);
  });
  describe('#isEmptyArray()', function() {
    var functionName = "isEmptyArray";
    givenTypeofUndefined(functionName, false);
    givenNull(functionName, false);
    givenNaN(functionName, false);
    givenStringEmpty(functionName, false);
    givenString(functionName, false);
    givenInteger(functionName, false);
    givenObjectEmpty(functionName, false);
    givenObjectPopulated(functionName, false);
    givenArrayEmpty(functionName, true);
    givenArrayPopulated(functionName, false);
    givenObjectDate(functionName, false);
    givenObjectError(functionName, false);
    givenInteger0(functionName, false);
    givenBooleanFalse(functionName, false);
    givenStringFalse(functionName, false);
    givenStringF(functionName, false);
    givenInteger1(functionName, false);
    givenBooleanTrue(functionName, false);
    givenStringTrue(functionName, false);
    givenStringT(functionName, false);
  });
  describe('#isNotEmptyArray()', function() {
    var functionName = "isNotEmptyArray";
    givenTypeofUndefined(functionName, false);
    givenNull(functionName, false);
    givenNaN(functionName, false);
    givenStringEmpty(functionName, false);
    givenString(functionName, false);
    givenInteger(functionName, false);
    givenObjectEmpty(functionName, false);
    givenObjectPopulated(functionName, false);
    givenArrayEmpty(functionName, false);
    givenArrayPopulated(functionName, true);
    givenObjectDate(functionName, false);
    givenObjectError(functionName, false);
    givenInteger0(functionName, false);
    givenBooleanFalse(functionName, false);
    givenStringFalse(functionName, false);
    givenStringF(functionName, false);
    givenInteger1(functionName, false);
    givenBooleanTrue(functionName, false);
    givenStringTrue(functionName, false);
    givenStringT(functionName, false);
  });
  describe('#isObject()', function() {
    var functionName = "isObject";
    givenTypeofUndefined(functionName, false);
    givenNull(functionName, false);
    givenNaN(functionName, false);
    givenStringEmpty(functionName, false);
    givenString(functionName, false);
    givenInteger(functionName, false);
    givenObjectEmpty(functionName, true);
    givenObjectPopulated(functionName, true);
    givenArrayEmpty(functionName, false);
    givenArrayPopulated(functionName, false);
    givenObjectDate(functionName, false);
    givenObjectError(functionName, false);
    givenInteger0(functionName, false);
    givenBooleanFalse(functionName, false);
    givenStringFalse(functionName, false);
    givenStringF(functionName, false);
    givenInteger1(functionName, false);
    givenBooleanTrue(functionName, false);
    givenStringTrue(functionName, false);
    givenStringT(functionName, false);
  });
  describe('#isNotObject()', function() {
    var functionName = "isNotObject";
    givenTypeofUndefined(functionName, true);
    givenNull(functionName, true);
    givenNaN(functionName, true);
    givenStringEmpty(functionName, true);
    givenString(functionName, true);
    givenInteger(functionName, true);
    givenObjectEmpty(functionName, false);
    givenObjectPopulated(functionName, false);
    givenArrayEmpty(functionName, true);
    givenArrayPopulated(functionName, true);
    givenObjectDate(functionName, true);
    givenObjectError(functionName, true);
    givenInteger0(functionName, true);
    givenBooleanFalse(functionName, true);
    givenStringFalse(functionName, true);
    givenStringF(functionName, true);
    givenInteger1(functionName, true);
    givenBooleanTrue(functionName, true);
    givenStringTrue(functionName, true);
    givenStringT(functionName, true);
  });
  describe('#isEmptyObject()', function() {
    var functionName = "isEmptyObject";
    givenTypeofUndefined(functionName, false);
    givenNull(functionName, false);
    givenNaN(functionName, false);
    givenStringEmpty(functionName, false);
    givenString(functionName, false);
    givenInteger(functionName, false);
    givenObjectEmpty(functionName, true);
    givenObjectPopulated(functionName, false);
    givenArrayEmpty(functionName, false);
    givenArrayPopulated(functionName, false);
    givenObjectDate(functionName, false);
    givenObjectError(functionName, false);
    givenInteger0(functionName, false);
    givenBooleanFalse(functionName, false);
    givenStringFalse(functionName, false);
    givenStringF(functionName, false);
    givenInteger1(functionName, false);
    givenBooleanTrue(functionName, false);
    givenStringTrue(functionName, false);
    givenStringT(functionName, false);
  });
  describe('#isNotEmptyObject()', function() {
    var functionName = "isNotEmptyObject";
    givenTypeofUndefined(functionName, false);
    givenNull(functionName, false);
    givenNaN(functionName, false);
    givenStringEmpty(functionName, false);
    givenString(functionName, false);
    givenInteger(functionName, false);
    givenObjectEmpty(functionName, false);
    givenObjectPopulated(functionName, true);
    givenArrayEmpty(functionName, false);
    givenArrayPopulated(functionName, false);
    givenObjectDate(functionName, false);
    givenObjectError(functionName, false);
    givenInteger0(functionName, false);
    givenBooleanFalse(functionName, false);
    givenStringFalse(functionName, false);
    givenStringF(functionName, false);
    givenInteger1(functionName, false);
    givenBooleanTrue(functionName, false);
    givenStringTrue(functionName, false);
    givenStringT(functionName, false);
  });
  describe('#validateFunctionInputsAreDefined/Async/CallbackOnError()', function() {
    var nothing, fnInputs, inputsToValidate, functionName;
    var syncFn = "validateFunctionInputsAreDefined";
    var asyncFn = "validateFunctionInputsAreDefinedAsync";
    var cbOnErrorFn = "validateFunctionInputsAreDefinedCallbackOnError";
    beforeEach(function(){
      functionName = "validator.Tests.Unit";
    });
    describe('given fnInputs undefined;', function() {
      var expErr;
      beforeEach(function(){
        fnInputs = nothing;
        expErr = functionName + " validateInputsAreDefined fnInputs must not be empty";
      });
      describe('when sync called', function() {
        var errCaught, errThrown, resultsReturned, errReturned;
        beforeEach(function(){
          try {
            validator[syncFn](fnInputs, inputsToValidate, functionName);
            errThrown = false;
          } catch (err) {
            errThrown = true;
            errCaught = err;
          }
        });
        it('then validation should fail', function(){
          thenCatchErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
        });
      });
      describe('when async called', function() {
        var errCaught, errThrown, resultsReturned, errReturned;
        beforeEach(function(done){
          try {
            validator[asyncFn](fnInputs, inputsToValidate, functionName, function(err,result){
              resultsReturned = result;
              errReturned = err;
              errThrown = false;
              done();
            });
          } catch (err) {
            errThrown = true;
            errCaught = err;
            done();
          }
        });

        it('then validation should fail', function(){
          thenReturnCallbackErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
        });
      });
      describe('when callbackOnError called', function() {
        var errCaught, errThrown, resultsReturned, errReturned;
        beforeEach(function(done){
          try {
            validator[cbOnErrorFn](fnInputs, inputsToValidate, functionName, function(err,result){
              resultsReturned = result;
              errReturned = err;
              errThrown = false;
              done();
            });
          } catch (err) {
            errThrown = true;
            errCaught = err;
            done();
          }
        });

        it('then validation should fail', function(){
          thenReturnCallbackErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
        });
      });
    });
    describe('given fnInputs defined;', function() {
      beforeEach(function(){
        fnInputs = {a:"",b:"2",c:{}};
      });
      describe('given inputsToValidate not an array;', function() {
        var expErr;
        beforeEach(function(){
          inputsToValidate = {a:"1"};
          expErr = functionName + " validateInputsAreDefined inputsToValidate must be an array";
        });
        describe('when sync called', function() {
          var errCaught, errThrown, resultsReturned, errReturned;
          beforeEach(function(){
            try {
              validator[syncFn](fnInputs, inputsToValidate, functionName);
              errThrown = false;
            } catch (err) {
              errThrown = true;
              errCaught = err;
            }
          });

          it('then validation should fail', function(){
            thenCatchErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
          });
        });
        describe('when async called', function() {
          var errCaught, errThrown, resultsReturned, errReturned;
          beforeEach(function(done){
            try {
              validator[asyncFn](fnInputs, inputsToValidate, functionName, function(err,result){
                resultsReturned = result;
                errReturned = err;
                errThrown = false;
                done();
              });
            } catch (err) {
              errThrown = true;
              errCaught = err;
              done();
            }
          });

          it('then validation should fail', function(){
            thenReturnCallbackErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
          });
        });
        describe('when callbackOnError called', function() {
          var errCaught, errThrown, resultsReturned, errReturned;
          beforeEach(function(done){
            try {
              validator[cbOnErrorFn](fnInputs, inputsToValidate, functionName, function(err,result){
                resultsReturned = result;
                errReturned = err;
                errThrown = false;
                done();
              });
            } catch (err) {
              errThrown = true;
              errCaught = err;
              done();
            }
          });

          it('then validation should fail', function(){
            thenReturnCallbackErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
          });
        });
      });
      describe('given inputsToValidate is an array and all defined;', function() {
        beforeEach(function(){
          inputsToValidate = ["a","b","c"];
        });
        describe('when sync called', function() {
          var errCaught, errThrown, resultsReturned, errReturned;
          beforeEach(function(){
            try {
              validator[syncFn](fnInputs, inputsToValidate, functionName);
              errThrown = false;
            } catch (err) {
              errThrown = true;
              errCaught = err;
            }
          });

          it('then validation should pass', function(){
            thenReturnNoErrorsSync(errThrown, errCaught, errReturned, resultsReturned);
          });
        });
        describe('when async called', function() {
          var errCaught, errThrown, resultsReturned, errReturned;
          beforeEach(function(done){
            try {
              validator[asyncFn](fnInputs, inputsToValidate, functionName, function(err,result){
                resultsReturned = result;
                errReturned = err;
                errThrown = false;
                done();
              });
            } catch (err) {
              errThrown = true;
              errCaught = err;
              done();
            }
          });

          it('then validation should pass', function(){
            thenReturnResultsNoErrorsSync(errThrown, errCaught, errReturned, resultsReturned);
            resultsReturned.should.equal('done');
          });
        });
        describe('when callbackOnError called', function() {
          var errCaught, errThrown, resultsReturned, errReturned;
          beforeEach(function(done){
            try {
              resultsReturned = validator[cbOnErrorFn](fnInputs, inputsToValidate, functionName, function(err,result){
                resultsReturned = result;
                errReturned = err;
                errThrown = false;
                done();
              });
              errThrown = false;
              done();
            } catch (err) {
              errThrown = true;
              errCaught = err;
              done();
            }
          });

          it('then validation should pass', function(){
            thenReturnNoErrorsSync(errThrown, errCaught, errReturned, resultsReturned);
          });
        });
      });
      describe('given inputsToValidate is an array and not all defined;', function() {
        var expErr;
        beforeEach(function(){
          inputsToValidate = ["a","b","d","c"];
          expErr = functionName + " validateInputsAreDefined following input must be defined: fnInputs.d";
        });
        describe('when sync called', function() {
          var errCaught, errThrown, resultsReturned, errReturned;
          beforeEach(function(){
            try {
              validator[syncFn](fnInputs, inputsToValidate, functionName);
              errThrown = false;
            } catch (err) {
              errThrown = true;
              errCaught = err;
            }
          });

          it('then validation should fail', function(){
            thenCatchErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
          });
        });
        describe('when async called', function() {
          var errCaught, errThrown, resultsReturned, errReturned;
          beforeEach(function(done){
            try {
              validator[asyncFn](fnInputs, inputsToValidate, functionName, function(err,result){
                resultsReturned = result;
                errReturned = err;
                errThrown = false;
                done();
              });
            } catch (err) {
              errThrown = true;
              errCaught = err;
              done();
            }
          });

          it('then validation should fail', function(){
            thenReturnCallbackErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
          });
        });
        describe('when callbackOnError called', function() {
          var errCaught, errThrown, resultsReturned, errReturned;
          beforeEach(function(done){
            try {
              validator[cbOnErrorFn](fnInputs, inputsToValidate, functionName, function(err,result){
                resultsReturned = result;
                errReturned = err;
                errThrown = false;
                done();
              });
            } catch (err) {
              errThrown = true;
              errCaught = err;
              done();
            }
          });

          it('then validation should fail', function(){
            thenReturnCallbackErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
          });
        });
      });
    });
  });
  describe('#validateFunctionInputsAreNotEmpty/Async/CallbackOnError()', function() {
    var nothing, fnInputs, inputsToValidate, functionName;
    var syncFn = "validateFunctionInputsAreNotEmpty";
    var asyncFn = "validateFunctionInputsAreNotEmptyAsync";
    var cbOnErrorFn = "validateFunctionInputsAreNotEmptyCallbackOnError";
    beforeEach(function(){
      functionName = "validator.Tests.Unit";
    });
    describe('given fnInputs undefined;', function() {
      var expErr;
      beforeEach(function(){
        fnInputs = nothing;
        expErr = functionName + " validateInputsAreNotEmpty fnInputs must not be empty";
      });
      describe('when sync called', function() {
        var errCaught, errThrown, resultsReturned, errReturned;
        beforeEach(function(){
          try {
            validator[syncFn](fnInputs, inputsToValidate, functionName);
            errThrown = false;
          } catch (err) {
            errThrown = true;
            errCaught = err;
          }
        });

        it('then validation should fail', function(){
          thenCatchErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
        });
      });
      describe('when async called', function() {
        var errCaught, errThrown, resultsReturned, errReturned;
        beforeEach(function(done){
          try {
            validator[asyncFn](fnInputs, inputsToValidate, functionName, function(err,result){
              resultsReturned = result;
              errReturned = err;
              errThrown = false;
              done();
            });
          } catch (err) {
            errThrown = true;
            errCaught = err;
            done();
          }
        });

        it('then validation should fail', function(){
          thenReturnCallbackErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
        });
      });
      describe('when callbackOnError called', function() {
        var errCaught, errThrown, resultsReturned, errReturned;
        beforeEach(function(done){
          try {
            validator[cbOnErrorFn](fnInputs, inputsToValidate, functionName, function(err,result){
              resultsReturned = result;
              errReturned = err;
              errThrown = false;
              done();
            });
          } catch (err) {
            errThrown = true;
            errCaught = err;
            done();
          }
        });

        it('then validation should fail', function(){
          thenReturnCallbackErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
        });
      });
    });
    describe('given fnInputs defined;', function() {
      beforeEach(function(){
        fnInputs = {a:"",b:"2",c:{e:4,f:{g:5,h:""}},d:1};
      });
      describe('given inputsToValidate not an array;', function() {
        var expErr;
        beforeEach(function(){
          inputsToValidate = {a:"1"};
          expErr = functionName + " validateInputsAreNotEmpty inputsToValidate must be an array";
        });
        describe('when sync called', function() {
          var errCaught, errThrown, resultsReturned, errReturned;
          beforeEach(function(){
            try {
              validator[syncFn](fnInputs, inputsToValidate, functionName);
              errThrown = false;
            } catch (err) {
              errThrown = true;
              errCaught = err;
            }
          });

          it('then validation should fail', function(){
            thenCatchErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
          });
        });
        describe('when async called', function() {
          var errCaught, errThrown, resultsReturned, errReturned;
          beforeEach(function(done){
            try {
              validator[asyncFn](fnInputs, inputsToValidate, functionName, function(err,result){
                resultsReturned = result;
                errReturned = err;
                errThrown = false;
                done();
              });
            } catch (err) {
              errThrown = true;
              errCaught = err;
              done();
            }
          });

          it('then validation should fail', function(){
            thenReturnCallbackErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
          });
        });
        describe('when callbackOnError called', function() {
          var errCaught, errThrown, resultsReturned, errReturned;
          beforeEach(function(done){
            try {
              validator[cbOnErrorFn](fnInputs, inputsToValidate, functionName, function(err,result){
                resultsReturned = result;
                errReturned = err;
                errThrown = false;
                done();
              });
            } catch (err) {
              errThrown = true;
              errCaught = err;
              done();
            }
          });

          it('then validation should fail', function(){
            thenReturnCallbackErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
          });
        });
      });
      describe('given inputsToValidate is an array and all not empty;', function() {
        beforeEach(function(){
          inputsToValidate = ["d","b"];
        });
        describe('when sync called', function() {
          var errCaught, errThrown, resultsReturned, errReturned;
          beforeEach(function(){
            try {
              validator[syncFn](fnInputs, inputsToValidate, functionName);
              errThrown = false;
            } catch (err) {
              errThrown = true;
              errCaught = err;
            }
          });

          it('then validation should pass', function(){
            thenReturnNoErrorsSync(errThrown, errCaught, errReturned, resultsReturned);
          });
        });
        describe('when async called', function() {
          var errCaught, errThrown, resultsReturned, errReturned;
          beforeEach(function(done){
            try {
              validator[asyncFn](fnInputs, inputsToValidate, functionName, function(err,result){
                resultsReturned = result;
                errReturned = err;
                errThrown = false;
                done();
              });
            } catch (err) {
              errThrown = true;
              errCaught = err;
              done();
            }
          });

          it('then validation should pass', function(){
            thenReturnResultsNoErrorsSync(errThrown, errCaught, errReturned, resultsReturned);
            resultsReturned.should.equal('done');
          });
        });
        describe('when callbackOnError called', function() {
          var errCaught, errThrown, resultsReturned, errReturned;
          beforeEach(function(done){
            try {
              resultsReturned = validator[cbOnErrorFn](fnInputs, inputsToValidate, functionName, function(err,result){
                resultsReturned = result;
                errReturned = err;
                errThrown = false;
                done();
              });
              errThrown = false;
              done();
            } catch (err) {
              errThrown = true;
              errCaught = err;
              done();
            }
          });

          it('then validation should pass (no callback)', function(){
            thenReturnNoErrorsSync(errThrown, errCaught, errReturned, resultsReturned);
          });
        });
      });
      describe('given inputsToValidate is an array and one is empty;', function() {
        var expErr;
        beforeEach(function(){
          inputsToValidate = ["a","b","d"];
          expErr = functionName + " validateInputsAreNotEmpty following input must not be empty: fnInputs.a";
        });
        describe('when sync called', function() {
          var errCaught, errThrown, resultsReturned, errReturned;
          beforeEach(function(){
            try {
              validator[syncFn](fnInputs, inputsToValidate, functionName);
              errThrown = false;
            } catch (err) {
              errThrown = true;
              errCaught = err;
            }
          });

          it('then validation should fail', function(){
            thenCatchErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
          });
        });
        describe('when async called', function() {
          var errCaught, errThrown, resultsReturned, errReturned;
          beforeEach(function(done){
            try {
              validator[asyncFn](fnInputs, inputsToValidate, functionName, function(err,result){
                resultsReturned = result;
                errReturned = err;
                errThrown = false;
                done();
              });
            } catch (err) {
              errThrown = true;
              errCaught = err;
              done();
            }
          });

          it('then validation should fail', function(){
            thenReturnCallbackErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
          });
        });
        describe('when callbackOnError called', function() {
          var errCaught, errThrown, resultsReturned, errReturned;
          beforeEach(function(done){
            try {
              validator[cbOnErrorFn](fnInputs, inputsToValidate, functionName, function(err,result){
                resultsReturned = result;
                errReturned = err;
                errThrown = false;
                done();
              });
            } catch (err) {
              errThrown = true;
              errCaught = err;
              done();
            }
          });

          it('then validation should fail', function(){
            thenReturnCallbackErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
          });
        });
      });
      describe('given inputsToValidate is an array and all nested not empty;', function() {
        beforeEach(function(){
          inputsToValidate = ["d","b","c.f.g"];
        });
        describe('when sync called', function() {
          var errCaught, errThrown, resultsReturned, errReturned;
          beforeEach(function(){
            try {
              validator[syncFn](fnInputs, inputsToValidate, functionName);
              errThrown = false;
            } catch (err) {
              errThrown = true;
              errCaught = err;
            }
          });

          it('then validation should pass', function(){
            thenReturnNoErrorsSync(errThrown, errCaught, errReturned, resultsReturned);
          });
        });
        describe('when async called', function() {
          var errCaught, errThrown, resultsReturned, errReturned;
          beforeEach(function(done){
            try {
              validator[asyncFn](fnInputs, inputsToValidate, functionName, function(err,result){
                resultsReturned = result;
                errReturned = err;
                errThrown = false;
                done();
              });
            } catch (err) {
              errThrown = true;
              errCaught = err;
              done();
            }
          });

          it('then validation should pass', function(){
            thenReturnResultsNoErrorsSync(errThrown, errCaught, errReturned, resultsReturned);
            resultsReturned.should.equal('done');
          });
        });
        describe('when callbackOnError called', function() {
          var errCaught, errThrown, resultsReturned, errReturned;
          beforeEach(function(done){
            try {
              resultsReturned = validator[cbOnErrorFn](fnInputs, inputsToValidate, functionName, function(err,result){
                resultsReturned = result;
                errReturned = err;
                errThrown = false;
                done();
              });
              errThrown = false;
              done();
            } catch (err) {
              errThrown = true;
              errCaught = err;
              done();
            }
          });

          it('then validation should pass (no callback)', function(){
            thenReturnNoErrorsSync(errThrown, errCaught, errReturned, resultsReturned);
          });
        });
      });
      describe('given inputsToValidate is an array and one nested is empty;', function() {
        var expErr;
        beforeEach(function(){
          inputsToValidate = ["b","d","c.f.h"];
          expErr = functionName + " validateInputsAreNotEmpty following input must not be empty: fnInputs.c.f.h";
        });
        describe('when sync called', function() {
          var errCaught, errThrown, resultsReturned, errReturned;
          beforeEach(function(){
            try {
              validator[syncFn](fnInputs, inputsToValidate, functionName);
              errThrown = false;
            } catch (err) {
              errThrown = true;
              errCaught = err;
            }
          });

          it('then validation should fail', function(){
            thenCatchErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
          });
        });
        describe('when async called', function() {
          var errCaught, errThrown, resultsReturned, errReturned;
          beforeEach(function(done){
            try {
              validator[asyncFn](fnInputs, inputsToValidate, functionName, function(err,result){
                resultsReturned = result;
                errReturned = err;
                errThrown = false;
                done();
              });
            } catch (err) {
              errThrown = true;
              errCaught = err;
              done();
            }
          });

          it('then validation should fail', function(){
            thenReturnCallbackErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
          });
        });
        describe('when callbackOnError called', function() {
          var errCaught, errThrown, resultsReturned, errReturned;
          beforeEach(function(done){
            try {
              validator[cbOnErrorFn](fnInputs, inputsToValidate, functionName, function(err,result){
                resultsReturned = result;
                errReturned = err;
                errThrown = false;
                done();
              });
            } catch (err) {
              errThrown = true;
              errCaught = err;
              done();
            }
          });

          it('then validation should fail', function(){
            thenReturnCallbackErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
          });
        });
      });
    });
  });

  describe('#assertNestedIsDefined()', function() {
    var obj;
    beforeEach(function(){
      obj = {
        level1: {
          level2: {
            level3: "level3"
          }
        }
      };
    });
    describe('when called with defined list', function() {
      var errCaught, errThrown, resultsReturned, errReturned;
      beforeEach(function(){
        try {
          resultsReturned = validator.assertNestedIsDefined(obj, 'objName', 'level1', 'level2', 'level3');
          errThrown = false;
        } catch (err) {
          errThrown = true;
          errCaught = err;
        }
      });
      it('then validation should pass', function(){
        thenReturnResultsNoErrorsSync(errThrown, errCaught, errReturned, resultsReturned);
        resultsReturned.should.equal(true);
      });
    });
    describe('when called with undefined list last', function() {
      var errCaught, errThrown, resultsReturned, errReturned;
      beforeEach(function(){
        try {
          resultsReturned = validator.assertNestedIsDefined(obj, 'objName', 'level1', 'level2', 'level4');
          errThrown = false;
        } catch (err) {
          errThrown = true;
          errCaught = err;
        }
      });
      it('then validation should fail', function(){
        thenCatchErrorNoResultsSync(errThrown, errCaught, errReturned, 'objName.level1.level2.level4 is not defined.', resultsReturned);
      });
    });
    describe('when called with undefined list middle', function() {
      var errCaught, errThrown, resultsReturned, errReturned;
      beforeEach(function(){
        try {
          resultsReturned = validator.assertNestedIsDefined(obj, 'objName', 'level1', 'level4', 'level3');
          errThrown = false;
        } catch (err) {
          errThrown = true;
          errCaught = err;
        }
      });
      it('then validation should fail', function(){
        thenCatchErrorNoResultsSync(errThrown, errCaught, errReturned, 'objName.level1.level4 is not defined.', resultsReturned);
      });
    });
    describe('when called with undefined list first', function() {
      var errCaught, errThrown, resultsReturned, errReturned;
      beforeEach(function(){
        try {
          resultsReturned = validator.assertNestedIsDefined(obj, 'objName', 'level4', 'level2', 'level3');
          errThrown = false;
        } catch (err) {
          errThrown = true;
          errCaught = err;
        }
      });
      it('then validation should fail', function(){
        thenCatchErrorNoResultsSync(errThrown, errCaught, errReturned, 'objName.level4 is not defined.', resultsReturned);
      });
    });
    describe('when called with undefined obj', function() {
      var errCaught, errThrown, resultsReturned, errReturned;
      beforeEach(function(){
        try {
          resultsReturned = validator.assertNestedIsDefined(null, 'objName', 'level4', 'level2', 'level3');
          errThrown = false;
        } catch (err) {
          errThrown = true;
          errCaught = err;
        }
      });
      it('then validation should fail', function(){
        thenCatchErrorNoResultsSync(errThrown, errCaught, errReturned, 'objName is not defined.', resultsReturned);
      });
    });
  });

  describe('#assertNestedListIsDefined()', function() {
    var obj, obj2, obj3;
    beforeEach(function(){
      obj = {
        level11: {
          level12: {
            level13: "level3"
          }
        }
      };

      obj2 = {
        level21: {
          level22: {
            level23: "level3"
          }
        }
      };

      obj3 = {
        level31: {
          level32: {
            level33: "level3"
          }
        }
      };
    });
    describe('when called with defined list', function() {
      var errCaught, errThrown, resultsReturned, errReturned;
      beforeEach(function(){
        try {
          resultsReturned = validator.assertNestedListIsDefined([
            [obj, 'objName', 'level11', 'level12', 'level13'],
            [obj2, 'obj2Name', 'level21', 'level22', 'level23'],
            [obj3, 'obj3Name', 'level31', 'level32', 'level33']
          ]);
          errThrown = false;
        } catch (err) {
          errThrown = true;
          errCaught = err;
        }
      });
      it('then validation should fail', function(){
        thenReturnResultsNoErrorsSync(errThrown, errCaught, errReturned, resultsReturned);
        resultsReturned.should.equal(true);
      });
    });
    describe('when called with undefined list last', function() {
      var errCaught, errThrown, resultsReturned, errReturned;
      beforeEach(function(){
        try {
          resultsReturned = validator.assertNestedListIsDefined([
            [obj, 'objName', 'level11', 'level12', 'level13'],
            [obj2, 'obj2Name', 'level21', 'level22', 'level23'],
            [obj3, 'obj3Name', 'level31', 'level32', 'level4']
          ]);
          errThrown = false;
        } catch (err) {
          errThrown = true;
          errCaught = err;
        }
      });
      it('then validation should fail', function(){
        thenCatchErrorNoResultsSync(errThrown, errCaught, errReturned, 'obj3Name.level31.level32.level4 is not defined.', resultsReturned);
      });
    });
    describe('when called with undefined list middle', function() {
      var errCaught, errThrown, resultsReturned, errReturned;
      beforeEach(function(){
        try {
          resultsReturned = validator.assertNestedListIsDefined([
            [obj, 'objName', 'level11', 'level12', 'level13'],
            [obj2, 'obj2Name', 'level21', 'level4', 'level23'],
            [obj3, 'obj3Name', 'level31', 'level32', 'level33']
          ]);
          errThrown = false;
        } catch (err) {
          errThrown = true;
          errCaught = err;
        }
      });
      it('then validation should fail', function(){
        thenCatchErrorNoResultsSync(errThrown, errCaught, errReturned, 'obj2Name.level21.level4 is not defined.', resultsReturned);
      });
    });
    describe('when called with undefined list first', function() {
      var errCaught, errThrown, resultsReturned, errReturned;
      beforeEach(function(){
        try {
          resultsReturned = validator.assertNestedListIsDefined([
            [obj, 'objName', 'level4', 'level12', 'level13'],
            [obj2, 'obj2Name', 'level21', 'level22', 'level23'],
            [obj3, 'obj3Name', 'level31', 'level32', 'level33']
          ]);
          errThrown = false;
        } catch (err) {
          errThrown = true;
          errCaught = err;
        }
      });
      it('then validation should fail', function(){
        thenCatchErrorNoResultsSync(errThrown, errCaught, errReturned, 'objName.level4 is not defined.', resultsReturned);
      });
    });
    describe('when called with undefined obj', function() {
      var errCaught, errThrown, resultsReturned, errReturned;
      beforeEach(function(){
        try {
          resultsReturned = validator.assertNestedListIsDefined([
            [obj, 'objName', 'level11', 'level12', 'level13'],
            [obj2, 'obj2Name', 'level21', 'level22', 'level23'],
            [obj3, 'obj3Name', 'level31', 'level32', 'level33'],
            [null, 'obj4Name', 'level31', 'level32', 'level33']
          ]);
          errThrown = false;
        } catch (err) {
          errThrown = true;
          errCaught = err;
        }
      });
      it('then validation should fail', function(){
        thenCatchErrorNoResultsSync(errThrown, errCaught, errReturned, 'obj4Name is not defined.', resultsReturned);
      });
    });
  });

  /**
   * Validates that no error was thrown but the callback returned no results and an error
   *
   * @param {Boolean} errThrown       ***true*** if an error was thrown; otherwise, ***false***
   * @param errCaught                 The trapped error that was thrown
   * @param errReturned               The error that was returned in the callback
   * @param {String} expectedErrMsg   The expected error message
   * @param resultsReturned           The results that were returned
   * @returns {void}
   */
  var thenReturnCallbackErrorNoResultsSync = function(errThrown, errCaught, errReturned, expectedErrMsg, resultsReturned){
    if (consoleOutput) {
      //output the error(s) for better debugging purposes

      if (errCaught) {
        console.log('Test was expecting that an error was going to be returned via callback, but one was thrown and caught instead.');
        console.log('The test was expecting the following:' + expectedErrMsg);
        if (errCaught.stack) {
          console.log('The following error was thrown and caught:' + errCaught.stack);
        } else {
          console.log('The following error (but not an error object) was thrown and caught:' + errCaught);
        }
      }
    }

    errThrown.should.equal(false, 'Expected an error to NOT be thrown and caught, but one was.');
    should.not.exist(errCaught, 'Expected an error to NOT be thrown and caught, but one was.');
    should.exist(errReturned, 'Expected an error to be returned via callback, but one was NOT.');
    should.exist(errReturned.message, 'Expected the returned error to have a message, but there is no message.');
    errReturned.message.should.contain(expectedErrMsg, 'Expected the returned error to contain the expected message, but it does not.');
    should.not.exist(resultsReturned, 'Expected results to NOT be returned, but the results are NOT empty.');
    return;
  };

  /**
   * Validates that a specific error was thrown and the callback was not returned (no results or no error)
   *
   * @param {Boolean} errThrown       ***true*** if an error was thrown; otherwise, ***false***
   * @param errCaught                 The trapped error that was thrown
   * @param errReturned               The error that was returned in the callback
   * @param {String} expectedErrMsg   The expected error message
   * @param resultsReturned           The results that were returned
   * @returns {void}
   */
  var thenCatchErrorNoResultsSync = function(errThrown, errCaught, errReturned, expectedErrMsg, resultsReturned){
    if (consoleOutput) {
      //output the error(s) for better debugging purposes

      if (errReturned) {
        console.log('Test was expecting that an error was going to be thrown and caught, but one was returned via callback instead.');
        console.log('The test was expecting the following:' + expectedErrMsg);
        if (errReturned) {
          if (errReturned.stack) {
            console.log('The following error was returned via callback:' + errReturned.stack);
          } else {
            console.log('The following error (but not an error object) was returned via callback:' + errReturned);
          }
        }
      }
    }

    errThrown.should.equal(true, 'Expected an error to be thrown, but one was NOT.');
    should.exist(errCaught, 'Expected an error to be thrown, but one was NOT.');
    should.not.exist(errReturned, 'Expected an error to NOT be returned via callback, but one was.');
    should.exist(errCaught.message, 'Expected the thrown error to have a message, but there is no message.');
    errCaught.message.should.contain(expectedErrMsg, 'Expected the thrown error to contain the expected message, but it does not.');
    should.not.exist(resultsReturned, 'Expected results to NOT be returned, but the results are NOT empty.');
    return;
  };

  /**
   * Validates that an error was thrown and the callback was not returned (no results or no error)
   *
   * @param {Boolean} errThrown       ***true*** if an error was thrown; otherwise, ***false***
   * @param errCaught                 The trapped error that was thrown
   * @param errReturned               The error that was returned in the callback
   * @param resultsReturned           The results that were returned
   * @returns {void}
   */
  var thenCatchSomeErrorNoResultsSync = function(errThrown, errCaught, errReturned, resultsReturned){
    if (consoleOutput) {
      //output the error(s) for better debugging purposes

      if (errReturned) {
        console.log('Test was expecting that some error was going to be thrown and caught, but one was returned via callback instead.');
        if (errReturned) {
          if (errReturned.stack) {
            console.log('The following error was returned via callback:' + errReturned.stack);
          } else {
            console.log('The following error (but not an error object) was returned via callback:' + errReturned);
          }
        }
      }
    }

    errThrown.should.equal(true, 'Expected an error to be thrown, but one was NOT.');
    should.exist(errCaught, 'Expected an error to be thrown, but one was NOT.');
    should.not.exist(errReturned, 'Expected an error to NOT be returned via callback, but one was.');
    should.not.exist(resultsReturned, 'Expected results to NOT be returned, but the results are NOT empty.');
    return;
  };

  /**
   * Validates that no error was thrown and the callback returned results and no errors
   *
   * @param {Boolean} errThrown       ***true*** if an error was thrown; otherwise, ***false***
   * @param errCaught                 The trapped error that was thrown
   * @param errReturned               The error that was returned in the callback
   * @param {String} expectedErrMsg   The expected error message
   * @param resultsReturned           The results that were returned
   * @returns {void}
   */
  var thenReturnResultsNoErrorsSync = function(errThrown, errCaught, errReturned, resultsReturned) {
    if (consoleOutput) {
      //output the error(s) for better debugging purposes

      if (errCaught || errReturned) {
        console.log('Test was expecting that no errors would have been thrown or returned.');

        if (errCaught) {
          if (errCaught.stack) {
            console.log('The following error was thrown and caught:' + errCaught.stack);
          } else {
            console.log('The following error (but not an error object) was thrown and caught:' + errCaught);
          }
        }

        if (errReturned) {
          if (errReturned.stack) {
            console.log('The following error was returned via callback:' + errReturned.stack);
          } else {
            console.log('The following error (but not an error object) was returned via callback:' + errReturned);
          }
        }
      }
    }

    errThrown.should.equal(false, 'Expected an error to NOT be thrown and caught, but one was.');
    should.not.exist(errCaught, 'Expected an error to NOT be thrown and caught, but one was.');
    should.not.exist(errReturned, 'Expected an error to NOT be returned via callback, but one was.');
    should.exist(resultsReturned, 'Expected results to be returned, but the results are empty.');
    return;
  };

  /**
   * Validates that no error was thrown and the callback returned no errors; no validation performed on the results
   *
   * @param {Boolean} errThrown       ***true*** if an error was thrown; otherwise, ***false***
   * @param errCaught                 The trapped error that was thrown
   * @param errReturned               The error that was returned in the callback
   * @param resultsReturned           The results that were returned
   * @returns {void}
   */
  var thenReturnNoErrorsSync = function(errThrown, errCaught, errReturned, resultsReturned) {
    if (consoleOutput) {
      //output the error(s) for better debugging purposes

      if (errCaught || errReturned) {
        console.log('Test was expecting that no errors would have been thrown or returned.');
        if (errCaught) {
          if (errCaught.stack) {
            console.log('The following error was thrown and caught:' + errCaught.stack);
          } else {
            console.log('The following error (but not an error object) was thrown and caught:' + errCaught);
          }
        }

        if (errReturned) {
          if (errReturned.stack) {
            console.log('The following error was returned via callback:' + errReturned.stack);
          } else {
            console.log('The following error (but not an error object) was returned via callback:' + errReturned);
          }
        }
      }
    }

    errThrown.should.equal(false, 'Expected an error to NOT be thrown and caught, but one was.');
    should.not.exist(errCaught, 'Expected an error to NOT be thrown and caught, but one was.');
    should.not.exist(errReturned, 'Expected an error to NOT be returned via callback, but one was.');
    return;
  };
});

