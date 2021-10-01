/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Simple.Js.Validator v2.0.0
 *
 * @class Validator
 * A collection of simple validations for common actions
 *
 * @type {SimpleJS.Validator}
 */

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
 * @param {any} thing         thing to check
 * @returns {boolean}   true if empty; false if not empty
 */

export const isEmpty = (thing: any): boolean => {
  if (typeof thing === 'undefined') {
    return true;
  } else if (thing === null) {
    return true;
  } else if (isNAN(thing)) {
    return true;
  } else if (thing === '') {
    return true;
  } else if (thing === 0) {
    return false;
  } else if (thing === false) {
    return false;
  } else if (isUniqueObject(thing)) {
    // new Date() is an object, but it has no keys/props so it will fail the isObject check
    // new Error() is an object, but it has no keys/props so it will fail the isObject
    // so if it is a date, error, or some other unique object, it is considered populated
    // also the for loop with the hasOwnProperty did not pass the new Date() either
    // also the _.isEmpty did not pass the new Date() check
    return false;
  } else if (isEmptyObject(thing)) {
    // this did not pass the new Date() or new Error() check by itself, so added the date check above
    return true;
  } else if (isEmptyArray(thing)) {
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
 * @param {any} thing         thing to check
 * @returns {boolean}   true if not empty; false if empty
 */
export const isNotEmpty = (thing: any): boolean => {
  return !isEmpty(thing);
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
 * @param {any} thing         thing to check
 * @returns {boolean}   true if defined; false if not defined
 */
export const isDefined = (thing: any): boolean => {
  if (typeof thing === 'undefined') {
    return false;
  } else if (thing === null) {
    return false;
  } else if (isNAN(thing)) {
    return false;
  } else if (thing === '') {
    return true;
  } else if (thing === 0) {
    return true;
  } else if (thing === false) {
    return true;
  } else if (isObject(thing)) {
    return true;
  } else if (isArray(thing)) {
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
 * @param {any} thing         thing to check
 * @returns {boolean}   true if not defined; false if defined
 */
export const isNotDefined = (thing: any): boolean => {
  return !isDefined(thing);
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
 * @param {any} thing         thing to check
 * @returns {boolean}   true if defined; false if not defined
 */
export const isTrue = (thing: any): boolean => {
  if (thing === true) {
    return true;
  } else if (thing === 1) {
    return true;
  } else if (thing && typeof thing === 'string' && thing.toLowerCase() === 'true') {
    return true;
  } else if (thing && typeof thing === 'string' && thing.toLowerCase() === 't') {
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
 * @param {any} thing         thing to check
 * @returns {boolean}   true if defined; false if not defined
 */
export const isFalse = (thing: any): boolean => {
  if (thing === false) {
    return true;
  } else if (thing === 0) {
    return true;
  } else if (thing && typeof thing === 'string' && thing.toLowerCase() === 'false') {
    return true;
  } else if (thing && typeof thing === 'string' && thing.toLowerCase() === 'f') {
    return true;
  } else {
    return false;
  }
};

/**
 * Determines if the object is an array or not
 *
 * @param {any} thing                       thing to be checked
 * @returns {Boolean}                       true if array; otherwise, false
 */
export const isArray = (thing: any): boolean => {
  if (thing && typeof thing === 'object' && typeof thing.length !== 'undefined' && thing.length >= 0) {
    return true;
  } else {
    return false;
  }
};

/**
 * Determines if the object is not an array or not
 *
 * @param {any} thing                       thing to be checked
 * @returns {Boolean}                       true if not array; otherwise, false
 */
export const isNotArray = (thing: any): boolean => {
  return !isArray(thing);
};

/**
 * Determines if the object is an empty array or not
 *
 * @param {any} thing                       thing to be checked
 * @returns {Boolean}                       true if empty array; otherwise, false
 */
export const isEmptyArray = (thing: any): boolean => {
  if (isArray(thing) && typeof thing.length !== 'undefined' && thing.length === 0) {
    return true;
  } else {
    return false;
  }
};

/**
 * Determines if the object is a populated array or not
 *
 * @param {any} thing                       thing to be checked
 * @returns {Boolean}                       true if populated array; otherwise, false
 */
export const isNotEmptyArray = (thing: any): boolean => {
  if (isArray(thing) && typeof thing.length !== 'undefined' && thing.length > 0) {
    return true;
  } else {
    return false;
  }
};

/**
 * Determines if the object is a NaN or not
 *
 * @param {any} thing                       thing to be checked
 * @returns {Boolean}                       true if NaN; otherwise, false
 */
export const isNAN = (thing: any): boolean => {
  // NaN value check
  // ...and yes you need to check that it is a number before checking that it is NotANumber.  Who knew?
  if (typeof thing === 'number' && isNaN(thing)) {
    return true;
  } else {
    return false;
  }
};

/**
 * Determines if the object is an unique object (like Date or File) or not
 *
 * @param {any} thing                       thing to be checked
 * @returns {Boolean}                       true if unique object; otherwise, false
 */
export const isUniqueObject = (thing: any): boolean => {
  // new Date() is an object, but it has no keys/props so it will fail straight isObject check
  // so if it is a unique object (date, file), it is considered populated
  // also the for loop with the hasOwnProperty did not pass the new Date() either
  // also the _.isEmpty did not pass the new Date() check
  // ...could use _.isDate, but trying to reduce the dependency on external libs
  if (typeof thing === 'object' && Object.prototype.toString.call(thing).indexOf('[object ') > -1 && Object.prototype.toString.call(thing) !== '[object Object]' && Object.prototype.toString.call(thing) !== '[object Array]') {
    return true;
  } else {
    return false;
  }
};

/**
 * Determines if the object is not an unique object (like Date or File) or not
 *
 * @param {any} thing                       thing to be checked
 * @returns {Boolean}                       true if not unique object; otherwise, false
 */
export const isNotUniqueObject = (thing: any): boolean => {
  return !isUniqueObject(thing);
};

/**
 * Determines if the object is an Object or not.  Note returns false on new Date() and new Error().
 *
 * @param {any} thing                       thing to be checked
 * @returns {Boolean}                       true if Object; otherwise, false
 */
export const isObject = (thing: any): boolean => {
  // object check
  // this returns false if thing=new Date()
  // this returns false if thing=new Error()
  if (thing && typeof thing === 'object' && isNotArray(thing) && isNotUniqueObject(thing)) {
    return true;
  } else {
    return false;
  }
};

/**
 * Determines if the object is not an Object or not
 *
 * @param {any} thing                       thing to be checked
 * @returns {Boolean}                       true if not Object; otherwise, false
 */
export const isNotObject = (thing: any): boolean => {
  return !isObject(thing);
};

/**
 * Determines if the object is an empty object or not
 *
 * @param {any} thing                       thing to be checked
 * @returns {Boolean}                       true if empty object; otherwise, false
 */
export const isEmptyObject = (thing: any): boolean => {
  if (isObject(thing) && Object.keys(thing).length === 0) {
    return true;
  } else {
    return false;
  }
};

/**
 * Determines if the object is a populated object or not
 *
 * @param {any} thing                       thing to be checked
 * @returns {Boolean}                       true if populated object; otherwise, false
 */
export const isNotEmptyObject = (thing: any): boolean => {
  if (isObject(thing) && Object.keys(thing).length > 0) {
    return true;
  } else {
    return false;
  }
};

/**
 * Throws an error if the object is not defined (see {@link #isNotDefined} method for definition).
 *
 * @param {String} toAssertName      The name associated with the object.  This name is used when the error is thrown.
 * @param {any} thing                The thing to assert against
 * @returns {void}
 */
export const assertIsDefined = (toAssertName: string, thing: any): void => {
  if (isNotDefined(thing)) {
    throw new Error(`${toAssertName} is not defined.`);
  }
};

/**
 * Throws an error if the object is defined (see {@link #isDefined} method for definition).
 *
 * @param {String} toAssertName      The name associated with the object.  This name is used when the error is thrown.
 * @param {any} thing                The thing to assert against
 * @returns {void}
 */
export const assertIsNotDefined = (toAssertName: string, thing: any): void => {
  if (isDefined(thing)) {
    throw new Error(`${toAssertName} is defined.`);
  }
};

/**
 * Throws an error if the object is empty (see {@link #isEmpty} method for definition).
 *
 * @param {String} toAssertName      The name associated with the object.  This name is used when the error is thrown.
 * @param {any} thing                The thing to assert against
 * @returns {void}
 */
export const assertIsNotEmpty = (toAssertName: string, thing: any): void => {
  if (isEmpty(thing)) {
    throw new Error(`${toAssertName} is empty.`);
  }
};

/**
 * Throws an error if the object is not empty (see {@link #isNotEmpty} method for definition).
 *
 * @param {String} toAssertName      The name associated with the object.  This name is used when the error is thrown.
 * @param {any} thing                The thing to assert against
 * @returns {void}
 */
export const assertIsEmpty = (toAssertName: string, thing: any): void => {
  if (isNotEmpty(thing)) {
    throw new Error(`${toAssertName} is not empty.`);
  }
};

export default {
  isArray,
  isDefined,
  assertIsDefined,
  isEmpty,
  assertIsEmpty,
  isEmptyArray,
  isEmptyObject,
  isFalse,
  isNAN,
  isNotArray,
  isNotDefined,
  assertIsNotDefined,
  isNotEmpty,
  assertIsNotEmpty,
  isNotEmptyArray,
  isNotEmptyObject,
  isNotObject,
  isNotUniqueObject,
  isObject,
  isTrue,
  isUniqueObject
};
