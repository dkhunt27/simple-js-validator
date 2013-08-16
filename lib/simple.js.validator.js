/**
 * @class Validator
 * A collection of simple validations for common actions
 *
 * @type {SimpleJS.Validator}
 */

(function(exports) {
    "use strict";

    /**
     * Returns ***true*** if the value is empty; otherwise, returns ***false***.
     *
     * Returns ***true*** for the following:
     *
     *  - typeof undefined
     *  - null
     *  - NaN
     *  - '' (empty string)
     *  - {} (empty object)
     *  - [] (empty array)
     *
     * Returns ***false*** for the following:
     *
     *  - 0
     *  - false
     *  - anything else
     *
     * @param {Object} value         value to check
     * @returns {boolean}   true if empty; false if not empty
     */
    var isEmpty = exports.isEmpty = function(value) {

        if (typeof value === 'undefined') {
            return true;  // TRUE
        } else if (value === null) {
            return true;  // TRUE
        } else if (typeof value === 'number' && isNaN(value)) {
            // NaN value check
            // ...and yes you need to check that it is a number before checking that it is NotANumber.  Who knew?
            return true;  // TRUE
        } else if (value === '') {
            return true;  // TRUE
        } else if (value === 0) {
            return false;
        } else if (value === false) {
            return false;
        } else if (typeof value === 'object' && Object.prototype.toString.call(value) === "[object Date]") {
            // new Date() is an object, but it has no keys/props so it will fail the next check
            // so if it is a date, it is considered populated
            // ...could use _.isDate, but trying to reduce the dependency on external libs
            return false;
        } else if (typeof value === 'object' && Object.keys(value).length === 0) {
            // empty object check
            // this did not pass the new Date() check by itself, so added the date check above
            // also the for loop with the hasOwnProperty did not pass the new Date() either
            // also the _.isEmpty did not pass the new Date() check
            return true; // TRUE

        } else if (typeof value === 'object' && typeof value.length !== 'undefined' && value.length === 0) {
            // empty array check
            return true; // TRUE
        } else {
            return false;
        }
    };

    /**
     * Returns ***true*** if the value is not empty; otherwise, returns ***false***.
     *
     * Returns ***false*** for the following:
     *
     *  - typeof undefined
     *  - null
     *  - NaN
     *  - '' (empty string)
     *  - {} (empty object)
     *  - [] (empty array)
     *
     * Returns ***true*** for the following:
     *
     *  - 0
     *  - false
     *  - anything else
     *
     * @param {Object} value         value to check
     * @returns {boolean}   true if not empty; false if empty
     */
    var isNotEmpty = exports.isNotEmpty = function(value) {
        return !isEmpty(value);
    };

    /**
     * Returns ***true*** if the value is defined; otherwise, returns ***false***.
     *
     * Returns ***false*** for the following:
     *
     *  - typeof undefined
     *  - null
     *  - NaN
     *
     * Returns ***true*** for the following:
     *
     *  - 0
     *  - false
     *  - '' (empty string)
     *  - {} (empty object)
     *  - [] (empty array)
     *  - anything else
     *
     * @param {Object} value         value to check
     * @returns {boolean}   true if defined; false if not defined
     */
    var isDefined = exports.isDefined = function(value) {

        if (typeof value === 'undefined') {
            return false;
        } else if (value === null) {
            return false;
        } else if (typeof value === 'number' && isNaN(value)) {
            // NaN value check
            // ...and yes you need to check that it is a number before checking that it is NotANumber.  Who knew?
            return false;
        } else if (value === '') {
            return true;  // TRUE
        } else if (value === 0) {
            return true;  // TRUE
        } else if (value === false) {
            return true;  // TRUE
        } else if (typeof value === 'object' && Object.keys(value).length === 0) {
            // empty object check
            return true; // TRUE
        } else if (typeof value === 'object' && typeof value.length !== 'undefined' && value.length === 0) {
            // empty array check
            return true; // TRUE
        } else {
            return true;  // TRUE
        }
    };

    /**
     * Returns ***true*** if the value is not defined; otherwise, returns ***false***.
     *
     * Returns ***true*** for the following:
     *
     *  - typeof undefined
     *  - null
     *  - NaN
     *
     * Returns ***false*** for the following:
     *
     *  - 0
     *  - false
     *  - '' (empty string)
     *  - {} (empty object)
     *  - [] (empty array)
     *  - anything else
     *
     * @param {Object} value         value to check
     * @returns {boolean}   true if not defined; false if defined
     */
    var isNotDefined = exports.isNotDefined = function(value) {
        return !isDefined(value);
    };

    /**
     * Throws an error if the object is not defined (see {@link #isNotDefined} method for definition).
     *
     * @param {String} toAssertName      The name associated with the object.  This name is used when the error is thrown.
     * @param {Object} toAssertObj       The object to assert against
     * @returns {void}
     */
    var assertIsDefined = exports.assertIsDefined = function(toAssertName, toAssertObj){
        if (isNotDefined(toAssertObj)) {
            throw new Error(toAssertName + ' is not defined.');
        }
    };

    /**
     * Throws an error if the object is defined (see {@link #isDefined} method for definition).
     *
     * @param {String} toAssertName      The name associated with the object.  This name is used when the error is thrown.
     * @param {Object} toAssertObj       The object to assert against
     * @returns {void}
     */
    var assertIsNotDefined = exports.assertIsNotDefined = function(toAssertName, toAssertObj){
        if (isDefined(toAssertObj)) {
            throw new Error(toAssertName + ' is defined.');
        }
    };

    /**
     * Throws an error if the object is empty (see {@link #isEmpty} method for definition).
     *
     * @param {String} toAssertName      The name associated with the object.  This name is used when the error is thrown.
     * @param {Object} toAssertObj       The object to assert against
     * @returns {void}
     */
    var assertIsNotEmpty = exports.assertIsNotEmpty = function(toAssertName, toAssertObj){
        if (isEmpty(toAssertObj)) {
            throw new Error(toAssertName + ' is empty.');
        }
    };

    /**
     * Throws an error if the object is not empty (see {@link #isNotEmpty} method for definition).
     *
     * @param {String} toAssertName      The name associated with the object.  This name is used when the error is thrown.
     * @param {Object} toAssertObj       The object to assert against
     * @returns {void}
     */
    var assertIsEmpty = exports.assertIsEmpty = function(toAssertName, toAssertObj){
        if (isNotEmpty(toAssertObj)) {
            throw new Error(toAssertName + ' is not empty.');
        }
    };

})(typeof exports === 'undefined'? this.sjv={}: exports);