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
            return true;
        } else if (value === null) {
            return true;
        } else if (isNAN(value)) {
            return true;
        } else if (value === '') {
            return true;
        } else if (value === 0) {
            return false;
        } else if (value === false) {
            return false;
        } else if (isDate(value)) {
            // new Date() is an object, but it has no keys/props so it will fail the isObject check
            // so if it is a date, it is considered populated
            // also the for loop with the hasOwnProperty did not pass the new Date() either
            // also the _.isEmpty did not pass the new Date() check
            // ...could use _.isDate, but trying to reduce the dependency on external libs
            return false;
        } else if (isError(value)) {
            // new Error() is an object, but it has no keys/props so it will fail the isObject
            // so if it is an error, it is considered populated
            return false;
        } else if (isObject(value)) {
            // this did not pass the new Date() check by itself, so added the date check above
            // this did not pass the new Error() check by itself, so added the error check above
            return true;
        } else if (isEmptyArray(value)) {
            return true;
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
        } else if (isNAN(value)) {
            return false;
        } else if (value === '') {
            return true;
        } else if (value === 0) {
            return true;
        } else if (value === false) {
            return true;
        } else if (isObject(value)) {
            return true;
        } else if (isArray(value)) {
            return true;
        } else {
            return true;
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
     * Returns ***true*** if the value is true, "true", "T", or 1; otherwise, returns ***false***.
     *
     * Returns ***false*** for the following:
     *
     *  - typeof undefined
     *  - null
     *  - NaN
     *  - 0
     *  - false
     *  - '' (empty string)
     *  - {} (empty object)
     *  - [] (empty array)
     *  - anything else
     *
     * Returns ***true*** for the following:
     *
     *  - true
     *  - "true"
     *  - "T"
     *  - 1
     *
     * @param {Object} value         value to check
     * @returns {boolean}   true if defined; false if not defined
     */
    var isTrue = exports.isTrue = function(value) {
        if (value === true) {
            return true;
        } else if (value === 1) {
            return true;
        } else if (value && typeof value === "string" && value.toLowerCase() === "true") {
            return true;
        } else if (value && typeof value === "string" &&  value.toLowerCase() === "t") {
            return true;
        } else {
            return false;
        }
    };

    /**
     * Returns ***true*** if the value is false, "false", "f", or 0; otherwise, returns ***false***.
     *
     * Returns ***false*** for the following:
     *
     *  - typeof undefined
     *  - null
     *  - NaN
     *  - '' (empty string)
     *  - {} (empty object)
     *  - [] (empty array)
     *  - true
     *  - 1
     *  - anything else
     *
     *  * Returns ***true*** for the following:
     *
     *  - false
     *  - "false"
     *  - "F"
     *  - 0
     *
     * @param {Object} value         value to check
     * @returns {boolean}   true if defined; false if not defined
     */
    var isFalse = exports.isFalse = function(value) {
        if (value === false) {
            return true;
        } else if (value === 0) {
            return true;
        } else if (value && typeof value === "string" &&  value.toLowerCase() === "false") {
            return true;
        } else if (value && typeof value === "string" &&  value.toLowerCase() === "f") {
            return true;
        } else {
            return false;
        }
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

    /**
     * Validates all function inputs are defined.  It will throw an error if any input is not defined
     *
     * @param {Object} fnInputs                     object containing all the function inputs
     * @param {Array} inputsToValidate              a string array of the input names that must be defined in the fnInputs
     * @param {String} functionName                 string identifier of the calling function to output with any error messages
     * @returns {void}
     */
    var validateFunctionInputsAreDefined = exports.validateFunctionInputsAreDefined = function (fnInputs, inputsToValidate, functionName) {
        return validateInputsAreDefined(fnInputs, inputsToValidate, 'fnInputs', functionName);
    };

    /**
     * Validates all inputs are defined.  It will throw an error if any input is not defined
     *
     * @param {Object} inputs                       object containing all the inputs
     * @param {Array} inputsToValidate              a string array of the input names that must be defined in the inputs
     * @param {String} inputName                    string identifier of the inputs to output with any error messages
     * @param {String} functionName                 string identifier of the calling function to output with any error messages
     * @returns {void}
     */
    var validateInputsAreDefined = exports.validateInputsAreDefined = function (inputs, inputsToValidate, inputName, functionName) {
        functionName = functionName + ' validateInputsAreDefined[Async] ';

        if (isEmpty(inputs)) {
            throw new Error(functionName +  inputName + ' must not be empty');
        }

        if (!isArray(inputsToValidate)) {
            throw new Error(functionName + 'inputsToValidate must be an array');
        }

        for (var i=0; i<inputsToValidate.length; i++) {
            var input = inputsToValidate[i];

            var toTest = getPropertyByString(inputs, input);

            if (isNotDefined(toTest)) {
                throw new Error(functionName + 'following input must be defined: ' + inputName + '.' + input);
            }
        }
    };

    /**
     * Validates all function inputs are defined.  It will call the callback with an error or 'done' when finished
     *
     * @param {Object} fnInputs                     object containing all the function inputs
     * @param {Array} inputsToValidate       a string array of the input names that must be defined in the fnInputs
     * @param {String} functionName                 string identifier of the calling function to output with any error messages
     * @param {Function} callback                   a callback function
     * @returns {void}
     */
    var validateFunctionInputsAreDefinedAsync = exports.validateFunctionInputsAreDefinedAsync = function (fnInputs, inputsToValidate, functionName, callback) {

        try {
            validateFunctionInputsAreDefined(fnInputs, inputsToValidate, functionName);
            return callback(null, 'done');
        } catch (err) {
            return callback(err, null);
        }
    };

    /**
     * Validates all inputs are defined.  It will call the callback with an error or 'done' when finished
     *
     * @param {Object} fnInputs                     object containing all the function inputs
     * @param {Array} inputsToValidate       a string array of the input names that must be defined in the fnInputs
     * @param {String} functionName                 string identifier of the calling function to output with any error messages
     * @param {Function} callback                   a callback function
     * @returns {void}
     */
    var validateInputsAreDefinedAsync = exports.validateInputsAreDefinedAsync = function (fnInputs, inputsToValidate, inputName, functionName, callback) {

        try {
            validateInputsAreDefined(fnInputs, inputsToValidate, inputName, functionName);
            return callback(null, 'done');
        } catch (err) {
            return callback(err, null);
        }
    };

    /**
     * Validates all function inputs are not empty.  It will throw an error if any input is empty
     *
     * @param {Object} fnInputs                     object containing all the function inputs
     * @param {Array} inputsToValidate              a string array of the input names that must not be empty in the fnInputs
     * @param {String} functionName                 string identifier of the calling function to output with any error messages
     * @returns {void}
     */
    var validateFunctionInputsAreNotEmpty = exports.validateFunctionInputsAreNotEmpty = function (fnInputs, inputsToValidate, functionName) {
        return validateInputsAreNotEmpty(fnInputs, inputsToValidate, 'fnInputs', functionName);
    };

    /**
     * Validates all inputs are not empty.  It will throw an error if any input is empty
     *
     * @param {Object} inputs                       object containing all the inputs
     * @param {Array} inputsToValidate              a string array of the input names that must not be empty in the inputs
     * @param {String} inputName                    string identifier of the inputs to output with any error messages
     * @param {String} functionName                 string identifier of the calling function to output with any error messages
     * @returns {void}
     */
    var validateInputsAreNotEmpty = exports.validateInputsAreNotEmpty = function (inputs, inputsToValidate, inputName, functionName) {
        functionName = functionName + ' validateInputsAreNotEmpty[Async] ';

        if (isEmpty(inputs)) {
            throw new Error(functionName +  inputName + ' must not be empty');
        }

        if (!isArray(inputsToValidate)) {
            throw new Error(functionName + 'inputsToValidate must be an array');
        }

        for (var i=0; i<inputsToValidate.length; i++) {
            var input = inputsToValidate[i];

            var toTest = getPropertyByString(inputs, input);

            if (isEmpty(toTest)) {
                throw new Error(functionName + 'following input must not be empty: ' + inputName + '.' + input);
            }
        }
    };

    /**
     * Validates all function inputs are not empty.  It will call the callback with an error or 'done' when finished
     *
     * @param {Object} fnInputs                     object containing all the function inputs
     * @param {Array} inputsToValidate      a string array of the input names that must not be empty in the fnInputs
     * @param {String} functionName                 string identifier of the calling function to output with any error messages
     * @param {Function} callback                   a callback function
     * @returns {void}
     */
    var validateFunctionInputsAreNotEmptyAsync = exports.validateFunctionInputsAreNotEmptyAsync = function (fnInputs, inputsToValidate, functionName, callback) {

        try {
            validateFunctionInputsAreNotEmpty(fnInputs, inputsToValidate, functionName);
            return callback(null, 'done');
        } catch (err) {
            return callback(err, null);
        }
    };

    /**
     * Validates all inputs are not empty.  It will call the callback with an error or 'done' when finished
     *
     * @param {Object} fnInputs                     object containing all the inputs
     * @param {Array} inputsToValidate              a string array of the input names that must not be empty in the inputs
     * @param {String} inputName                    string identifier of the inputs to output with any error messages
     * @param {String} functionName                 string identifier of the calling function to output with any error messages
     * @param {Function} callback                   a callback function
     * @returns {void}
     */
    var validateInputsAreNotEmptyAsync = exports.validateInputsAreNotEmptyAsync = function (fnInputs, inputsToValidate, inputName, functionName, callback) {

        try {
            validateInputsAreNotEmpty(fnInputs, inputsToValidate, inputName, functionName);
            return callback(null, 'done');
        } catch (err) {
            return callback(err, null);
        }
    };

    /**
     * Determines if the object is an array or not
     *
     * @param {Object} obj                      object to be checked
     * @returns {Boolean}                       true if array; otherwise, false
     */
    var isArray = exports.isArray = function(obj) {
        if (typeof obj === 'object' && typeof obj.length !== 'undefined' && obj.length >= 0) {
            return true;
        } else {
            return false;
        }
    };

    /**
     * Determines if the object is an empty array or not
     *
     * @param {Object} obj                      object to be checked
     * @returns {Boolean}                       true if empty array; otherwise, false
     */
    var isEmptyArray = exports.isEmptyArray = function(obj) {
        if (typeof obj === 'object' && typeof obj.length !== 'undefined' && obj.length === 0) {
            return true;
        } else {
            return false;
        }
    };

    /**
     * Determines if the object is a NaN or not
     *
     * @param {Object} obj                      object to be checked
     * @returns {Boolean}                       true if NaN; otherwise, false
     */
    var isNAN = exports.isNAN = function(obj) {
        // NaN value check
        // ...and yes you need to check that it is a number before checking that it is NotANumber.  Who knew?
        if (typeof obj === 'number' && isNaN(obj)) {
            return true;
        } else {
            return false;
        }
    };

    /**
     * Determines if the object is a Date or not
     *
     * @param {Object} obj                      object to be checked
     * @returns {Boolean}                       true if Date; otherwise, false
     */
    var isDate = exports.isDate = function(obj) {
        // new Date() is an object, but it has no keys/props so it will fail straight isObject check
        // so if it is a date, it is considered populated
        // also the for loop with the hasOwnProperty did not pass the new Date() either
        // also the _.isEmpty did not pass the new Date() check
        // ...could use _.isDate, but trying to reduce the dependency on external libs
        if (typeof obj === 'object' && Object.prototype.toString.call(obj) === "[object Date]") {
            return true;
        } else {
            return false;
        }
    };

    /**
     * Determines if the object is an Error or not
     *
     * @param {Object} obj                      object to be checked
     * @returns {Boolean}                       true if Error; otherwise, false
     */
    var isError = exports.isError = function(obj) {
        // new Error() is an object, but it has no keys/props so it will fail straight isObject check
        if (typeof obj === 'object' && Object.prototype.toString.call(obj) === "[object Error]") {
            return true;
        } else {
            return false;
        }
    };

    /**
     * Determines if the object is an Object or not.  Note returns false on new Date() and new Error().
     *
     * @param {Object} obj                      object to be checked
     * @returns {Boolean}                       true if Object; otherwise, false
     */
    var isObject = exports.isObject = function(obj) {
        // object check
        // this returns false if obj=new Date()
        // this returns false if obj=new Error()
        if (typeof obj === 'object' && Object.keys(obj).length === 0) {
            return true;
        } else {
            return false;
        }
    };

    /*
     * Gets the property based on the string.
     * So if the obj={foo:{bar:{blah:"here"}}}, getPropertyByString(obj, "foo.bar.blah") would return "here"
     * There cannot be any "." in any of the property names for this to work correctly
     * see http://stackoverflow.com/questions/6906108/in-javascript-how-can-i-dynamically-get-a-nested-property-of-an-object
     *
     * @param {Object} obj                      object to be search
     * @param {String} propString               name of the property to find; use "." to indicate parent/child elements
     * @returns {Object}                        returns the property value
     */
    var getPropertyByString = exports.getPropertyByString = function(obj, propString) {
        if (isEmpty(propString)) {return obj;}

        var prop;
        var props = propString.split('.');

        var propLength = props.length - 1;
        var i=0;
        for (i=0; i < propLength; i++) {
            prop = props[i];

            if (typeof obj === 'object' && obj !== null && prop in obj) {
                obj = obj[prop];
            } else {
                break;
            }
        }
        return obj[props[i]];
    };

    /*
     * Sets the property based on the string.
     * So if the obj={foo:{bar:{blah:"here"}}}, setPropertyByString(obj, "foo.bar.blah", "newHere") would replace "here" with "newHere"
     * There cannot be any "." in any of the property names for this to work correctly
     * see http://stackoverflow.com/questions/6906108/in-javascript-how-can-i-dynamically-get-a-nested-property-of-an-object
     *
     * @param {Object} obj                      object to be search
     * @param {String} propString               name of the property to find; use "." to indicate parent/child elements
     * @param {Object} newValue                 the property value to set
     */
    var setPropertyByString =  exports.setPropertyByString = function(obj, propString, newValue) {
        if (isEmpty(propString)) {return obj;}

        var prop;
        var props = propString.split('.');

        var propLength = props.length - 1;

        if (propLength === 0) {
            obj[propString] = newValue;
        } else {
            var lookupObj = obj;
            for (var i=0; i <= propLength - 1; i++) {
                prop = props[i];

                if (typeof obj === 'object' && obj !== null && prop in obj) {
                    obj = obj[prop];
                } else {
                    break;
                }
            }

            // then on last prop in propString
            prop = props[i];
            if (typeof obj === 'object' && obj !== null) {
                obj[prop] = newValue;
            } else {
                // do not update anything since the obj doesn't exist
            }
        }
        return;
    };

})(typeof exports === 'undefined'? this.sjv={}: exports);
