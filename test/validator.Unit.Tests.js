describe('validator.Unit.Tests.js', function(){
    "use strict";

    var path = require('path');
    var should = require('chai').should();
    var consoleOutput = true;

    var validator;
    beforeEach(function(){

        var filePath = path.join(path.join(__dirname, '../lib'),'simple.js.validator.js');
        validator = require(filePath);

    });
    describe('#isEmpty()', function() {
        var nothing, nan, value;
        var functionName = "isEmpty";
        beforeEach(function(){
            nan = parseInt('NotANumber', 10);
        });
        describe('given typeof undefined;', function() {
            beforeEach(function(){
                value = nothing;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given an error object;', function() {
            beforeEach(function(){
                value = new Error("some error");
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = validator[functionName](value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });
    });
    describe('#isNotEmpty()', function() {
        var nothing, nan, value;
        var functionName = "isNotEmpty";
        beforeEach(function(){
            nan = parseInt('NotANumber', 10);
        });
        describe('given typeof undefined;', function() {
            beforeEach(function(){
                value = nothing;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given an error object;', function() {
            beforeEach(function(){
                value = new Error("some error");
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = validator[functionName](value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });
    });
    describe('#isDefined()', function() {
        var nothing, nan, value;
        var functionName = "isDefined";
        beforeEach(function(){
            nan = parseInt('NotANumber', 10);
        });
        describe('given typeof undefined;', function() {
            beforeEach(function(){
                value = nothing;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given an error object;', function() {
            beforeEach(function(){
                value = new Error("some error");
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = validator[functionName](value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });
    });
    describe('#isNotDefined()', function() {
        var nothing, nan, value;
        var functionName = "isNotDefined";
        beforeEach(function(){
            nan = parseInt('NotANumber', 10);
        });
        describe('given typeof undefined;', function() {
            beforeEach(function(){
                value = nothing;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given an error object;', function() {
            beforeEach(function(){
                value = new Error("some error");
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = validator[functionName](value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

    });
    describe('#isTrue()', function() {
        var nothing, nan, value;
        var functionName = "isTrue";
        beforeEach(function(){
            nan = parseInt('NotANumber', 10);
        });
        describe('given typeof undefined;', function() {
            beforeEach(function(){
                value = nothing;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given an error object;', function() {
            beforeEach(function(){
                value = new Error("some error");
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given "false";', function() {
            beforeEach(function(){
                value = "false";
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = validator[functionName](value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given "F";', function() {
            beforeEach(function(){
                value = "F";
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = validator[functionName](value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given 1;', function() {
            beforeEach(function(){
                value = 1;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = validator[functionName](value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given true;', function() {
            beforeEach(function(){
                value = true;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = validator[functionName](value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given "true";', function() {
            beforeEach(function(){
                value = "true";
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = validator[functionName](value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given "T";', function() {
            beforeEach(function(){
                value = "T";
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = validator[functionName](value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });
    });
    describe('#isFalse()', function() {
        var nothing, nan, value;
        var functionName = "isFalse";
        beforeEach(function(){
            nan = parseInt('NotANumber', 10);
        });
        describe('given typeof undefined;', function() {
            beforeEach(function(){
                value = nothing;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given an error object;', function() {
            beforeEach(function(){
                value = new Error("some error");
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
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
                    resultsReturned = validator[functionName](value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given "false";', function() {
            beforeEach(function(){
                value = "false";
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = validator[functionName](value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given "F";', function() {
            beforeEach(function(){
                value = "F";
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = validator[functionName](value);
                });
                it('then should return true', function(){
                    resultsReturned.should.equal(true);
                });
            });
        });

        describe('given 1;', function() {
            beforeEach(function(){
                value = 1;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = validator[functionName](value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given true;', function() {
            beforeEach(function(){
                value = true;
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = validator[functionName](value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given "true";', function() {
            beforeEach(function(){
                value = "true";
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = validator[functionName](value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });

        describe('given "T";', function() {
            beforeEach(function(){
                value = "T";
            });
            describe('when called', function() {
                var resultsReturned;
                beforeEach(function(){
                    resultsReturned = validator[functionName](value);
                });
                it('then should return false', function(){
                    resultsReturned.should.equal(false);
                });
            });
        });
    });

    describe('#validateFunctionInputsAreDefined() and #validateFunctionInputsAreDefinedAsync()', function() {
        var nothing, fnInputs, inputsToValidate, functionName;
        var syncFunction = "validateFunctionInputsAreDefined";
        var asyncFunction = "validateFunctionInputsAreDefinedAsync";
        beforeEach(function(){
            functionName = "validator.Tests.Unit";
        });
        describe('given fnInputs undefined;', function() {
            var expErr;
            beforeEach(function(){
                fnInputs = nothing;
                expErr = functionName + " validateInputsAreDefined[Async] fnInputs must not be empty";
            });
            describe('when sync called', function() {
                var errCaught, errThrown, resultsReturned, errReturned;
                beforeEach(function(){
                    try {
                        validator[syncFunction](fnInputs, inputsToValidate, functionName);
                        errThrown = false;
                    } catch (err) {
                        errThrown = true;
                        errCaught = err;
                    }
                });
                it('then validation should fail', function(){
                    thenReturnErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
                });
            });
            describe('when async called', function() {
                var errCaught, errThrown, resultsReturned, errReturned;
                beforeEach(function(done){
                    try {
                        validator[asyncFunction](fnInputs, inputsToValidate, functionName, function(err,result){
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
                    expErr = functionName + " validateInputsAreDefined[Async] inputsToValidate must be an array";
                });
                describe('when sync called', function() {
                    var errCaught, errThrown, resultsReturned, errReturned;
                    beforeEach(function(){
                        try {
                            validator[syncFunction](fnInputs, inputsToValidate, functionName);
                            errThrown = false;
                        } catch (err) {
                            errThrown = true;
                            errCaught = err;
                        }
                    });

                    it('then validation should fail', function(){
                        thenReturnErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
                    });
                });
                describe('when async called', function() {
                    var errCaught, errThrown, resultsReturned, errReturned;
                    beforeEach(function(done){
                        try {
                            validator[asyncFunction](fnInputs, inputsToValidate, functionName, function(err,result){
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
                            validator[syncFunction](fnInputs, inputsToValidate, functionName);
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
                            validator[asyncFunction](fnInputs, inputsToValidate, functionName, function(err,result){
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
                        thenReturnResultsNoErrorsSync(errThrown, errCaught, errReturned, resultsReturned);
                        resultsReturned.should.equal('done');
                    });
                });
            });
            describe('given inputsToValidate is an array and not all defined;', function() {
                var expErr;
                beforeEach(function(){
                    inputsToValidate = ["a","b","d","c"];
                    expErr = functionName + " validateInputsAreDefined[Async] following input must be defined: fnInputs.d";
                });
                describe('when sync called', function() {
                    var errCaught, errThrown, resultsReturned, errReturned;
                    beforeEach(function(){
                        try {
                            validator[syncFunction](fnInputs, inputsToValidate, functionName);
                            errThrown = false;
                        } catch (err) {
                            errThrown = true;
                            errCaught = err;
                        }
                    });

                    it('then validation should fail', function(){
                        thenReturnErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
                    });
                });
                describe('when async called', function() {
                    var errCaught, errThrown, resultsReturned, errReturned;
                    beforeEach(function(done){
                        try {
                            validator[asyncFunction](fnInputs, inputsToValidate, functionName, function(err,result){
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
    describe('#validateFunctionInputsAreNotEmpty() and #validateFunctionInputsAreNotEmptyAsync()', function() {
        var nothing, fnInputs, inputsToValidate, functionName;
        var syncFunction = "validateFunctionInputsAreNotEmpty";
        var asyncFunction = "validateFunctionInputsAreNotEmptyAsync";
        beforeEach(function(){
            functionName = "validator.Tests.Unit";
        });
        describe('given fnInputs undefined;', function() {
            var expErr;
            beforeEach(function(){
                fnInputs = nothing;
                expErr = functionName + " validateInputsAreNotEmpty[Async] fnInputs must not be empty";
            });
            describe('when sync called', function() {
                var errCaught, errThrown, resultsReturned, errReturned;
                beforeEach(function(){
                    try {
                        validator[syncFunction](fnInputs, inputsToValidate, functionName);
                        errThrown = false;
                    } catch (err) {
                        errThrown = true;
                        errCaught = err;
                    }
                });

                it('then validation should fail', function(){
                    thenReturnErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
                });
            });
            describe('when async called', function() {
                var errCaught, errThrown, resultsReturned, errReturned;
                beforeEach(function(done){
                    try {
                        validator[asyncFunction](fnInputs, inputsToValidate, functionName, function(err,result){
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
                    expErr = functionName + " validateInputsAreNotEmpty[Async] inputsToValidate must be an array";
                });
                describe('when sync called', function() {
                    var errCaught, errThrown, resultsReturned, errReturned;
                    beforeEach(function(){
                        try {
                            validator[syncFunction](fnInputs, inputsToValidate, functionName);
                            errThrown = false;
                        } catch (err) {
                            errThrown = true;
                            errCaught = err;
                        }
                    });

                    it('then validation should fail', function(){
                        thenReturnErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
                    });
                });
                describe('when async called', function() {
                    var errCaught, errThrown, resultsReturned, errReturned;
                    beforeEach(function(done){
                        try {
                            validator[asyncFunction](fnInputs, inputsToValidate, functionName, function(err,result){
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
                            validator[syncFunction](fnInputs, inputsToValidate, functionName);
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
                            validator[asyncFunction](fnInputs, inputsToValidate, functionName, function(err,result){
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
                        thenReturnResultsNoErrorsSync(errThrown, errCaught, errReturned, resultsReturned);
                        resultsReturned.should.equal('done');
                    });
                });
            });
            describe('given inputsToValidate is an array and one is empty;', function() {
                var expErr;
                beforeEach(function(){
                    inputsToValidate = ["a","b","d"];
                    expErr = functionName + " validateInputsAreNotEmpty[Async] following input must not be empty: fnInputs.a";
                });
                describe('when sync called', function() {
                    var errCaught, errThrown, resultsReturned, errReturned;
                    beforeEach(function(){
                        try {
                            validator[syncFunction](fnInputs, inputsToValidate, functionName);
                            errThrown = false;
                        } catch (err) {
                            errThrown = true;
                            errCaught = err;
                        }
                    });

                    it('then validation should fail', function(){
                        thenReturnErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
                    });
                });
                describe('when async called', function() {
                    var errCaught, errThrown, resultsReturned, errReturned;
                    beforeEach(function(done){
                        try {
                            validator[asyncFunction](fnInputs, inputsToValidate, functionName, function(err,result){
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
                            validator[syncFunction](fnInputs, inputsToValidate, functionName);
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
                            validator[asyncFunction](fnInputs, inputsToValidate, functionName, function(err,result){
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
                        thenReturnResultsNoErrorsSync(errThrown, errCaught, errReturned, resultsReturned);
                        resultsReturned.should.equal('done');
                    });
                });
            });
            describe('given inputsToValidate is an array and one nested is empty;', function() {
                var expErr;
                beforeEach(function(){
                    inputsToValidate = ["b","d","c.f.h"];
                    expErr = functionName + " validateInputsAreNotEmpty[Async] following input must not be empty: fnInputs.c.f.h";
                });
                describe('when sync called', function() {
                    var errCaught, errThrown, resultsReturned, errReturned;
                    beforeEach(function(){
                        try {
                            validator[syncFunction](fnInputs, inputsToValidate, functionName);
                            errThrown = false;
                        } catch (err) {
                            errThrown = true;
                            errCaught = err;
                        }
                    });

                    it('then validation should fail', function(){
                        thenReturnErrorNoResultsSync(errThrown, errCaught, errReturned, expErr, resultsReturned);
                    });
                });
                describe('when async called', function() {
                    var errCaught, errThrown, resultsReturned, errReturned;
                    beforeEach(function(done){
                        try {
                            validator[asyncFunction](fnInputs, inputsToValidate, functionName, function(err,result){
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
    var thenReturnErrorNoResultsSync = function(errThrown, errCaught, errReturned, expectedErrMsg, resultsReturned){
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
    var thenReturnSomeErrorNoResultsSync = function(errThrown, errCaught, errReturned, resultsReturned){
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

