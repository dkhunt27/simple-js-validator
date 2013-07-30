describe('validator.Tests.Unit.js', function(){
    "use strict";

    var path = require('path');
    var injectr = require('injectr');
    var should = require('chai').should();

    var validator;
    beforeEach(function(){

        var filePath = path.join(path.join(__dirname, '../lib'),'validator.js');
        validator = injectr(filePath);

    });
    describe('#isEmpty()', function() {
        var functionToTest, nothing, nan, value;
        beforeEach(function(){
            nan = parseInt('NotANumber', 10);
            functionToTest = function(value) {
                return validator.isEmpty(value);
            };
        });
        describe('given typeof undefined;', function() {
            beforeEach(function(){
                value = nothing;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given null;', function() {
            beforeEach(function(){
                value = null;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given NaN;', function() {
            beforeEach(function(){
                value = nan;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given empty string;', function() {
            beforeEach(function(){
                value = '';
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given 0;', function() {
            beforeEach(function(){
                value = 0;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given false;', function() {
            beforeEach(function(){
                value = false;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given an empty object;', function() {
            beforeEach(function(){
                value = {};
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given an empty array;', function() {
            beforeEach(function(){
                value = [];
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given a string;', function() {
            beforeEach(function(){
                value = 'abc';
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given a integer;', function() {
            beforeEach(function(){
                value = 123;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given a populated object;', function() {
            beforeEach(function(){
                value = {"abc":123};
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given a populated array;', function() {
            beforeEach(function(){
                value = [{"abc":123}];
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given a date object;', function() {
            beforeEach(function(){
                value = new Date();
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });
    });

    describe('#isNotEmpty()', function() {
        var functionToTest, nothing, nan, value;
        beforeEach(function(){
            nan = parseInt('NotANumber', 10);
            functionToTest = function(value) {
                return validator.isNotEmpty(value);
            };
        });
        describe('given typeof undefined;', function() {
            beforeEach(function(){
                value = nothing;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given null;', function() {
            beforeEach(function(){
                value = null;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given NaN;', function() {
            beforeEach(function(){
                value = nan;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given empty string;', function() {
            beforeEach(function(){
                value = '';
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given 0;', function() {
            beforeEach(function(){
                value = 0;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given false;', function() {
            beforeEach(function(){
                value = false;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given an empty object;', function() {
            beforeEach(function(){
                value = {};
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given an empty array;', function() {
            beforeEach(function(){
                value = [];
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given a string;', function() {
            beforeEach(function(){
                value = 'abc';
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given a integer;', function() {
            beforeEach(function(){
                value = 123;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given a populated object;', function() {
            beforeEach(function(){
                value = {"abc":123};
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given a populated array;', function() {
            beforeEach(function(){
                value = [{"abc":123}];
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given a date object;', function() {
            beforeEach(function(){
                value = new Date();
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });
    });

    describe('#isDefined()', function() {
        var functionToTest, nothing, nan, value;
        beforeEach(function(){
            nan = parseInt('NotANumber', 10);
            functionToTest = function(value) {
                return validator.isDefined(value);
            };
        });
        describe('given typeof undefined;', function() {
            beforeEach(function(){
                value = nothing;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given null;', function() {
            beforeEach(function(){
                value = null;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given NaN;', function() {
            beforeEach(function(){
                value = nan;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given empty string;', function() {
            beforeEach(function(){
                value = '';
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given 0;', function() {
            beforeEach(function(){
                value = 0;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given false;', function() {
            beforeEach(function(){
                value = false;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given an empty object;', function() {
            beforeEach(function(){
                value = {};
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given an empty array;', function() {
            beforeEach(function(){
                value = [];
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given a string;', function() {
            beforeEach(function(){
                value = 'abc';
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given a integer;', function() {
            beforeEach(function(){
                value = 123;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given a populated object;', function() {
            beforeEach(function(){
                value = {"abc":123};
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given a populated array;', function() {
            beforeEach(function(){
                value = [{"abc":123}];
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given a date object;', function() {
            beforeEach(function(){
                value = new Date();
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });
    });

    describe('#isNotDefined()', function() {
        var functionToTest, nothing, nan, value;
        beforeEach(function(){
            nan = parseInt('NotANumber', 10);
            functionToTest = function(value) {
                return validator.isNotDefined(value);
            };
        });
        describe('given typeof undefined;', function() {
            beforeEach(function(){
                value = nothing;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given null;', function() {
            beforeEach(function(){
                value = null;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given NaN;', function() {
            beforeEach(function(){
                value = nan;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given empty string;', function() {
            beforeEach(function(){
                value = '';
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given 0;', function() {
            beforeEach(function(){
                value = 0;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given false;', function() {
            beforeEach(function(){
                value = false;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given an empty object;', function() {
            beforeEach(function(){
                value = {};
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given an empty array;', function() {
            beforeEach(function(){
                value = [];
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given a string;', function() {
            beforeEach(function(){
                value = 'abc';
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given a integer;', function() {
            beforeEach(function(){
                value = 123;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given a populated object;', function() {
            beforeEach(function(){
                value = {"abc":123};
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given a populated array;', function() {
            beforeEach(function(){
                value = [{"abc":123}];
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given a date object;', function() {
            beforeEach(function(){
                value = new Date();
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = functionToTest(value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });
    });
});

