"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertIsEmpty = exports.assertIsNotEmpty = exports.assertIsNotDefined = exports.assertIsDefined = exports.isNotEmptyObject = exports.isEmptyObject = exports.isNotObject = exports.isObject = exports.isNotUniqueObject = exports.isUniqueObject = exports.isNAN = exports.isNotEmptyArray = exports.isEmptyArray = exports.isNotArray = exports.isArray = exports.isFalse = exports.isTrue = exports.isNotDefined = exports.isDefined = exports.isNotEmpty = exports.isEmpty = void 0;
const isEmpty = (thing) => {
    if (typeof thing === 'undefined') {
        return true;
    }
    else if (thing === null) {
        return true;
    }
    else if ((0, exports.isNAN)(thing)) {
        return true;
    }
    else if (thing === '') {
        return true;
    }
    else if (thing === 0) {
        return false;
    }
    else if (thing === false) {
        return false;
    }
    else if ((0, exports.isUniqueObject)(thing)) {
        return false;
    }
    else if ((0, exports.isEmptyObject)(thing)) {
        return true;
    }
    else if ((0, exports.isEmptyArray)(thing)) {
        return true;
    }
    else {
        return false;
    }
};
exports.isEmpty = isEmpty;
const isNotEmpty = (thing) => {
    return !(0, exports.isEmpty)(thing);
};
exports.isNotEmpty = isNotEmpty;
const isDefined = (thing) => {
    if (typeof thing === 'undefined') {
        return false;
    }
    else if (thing === null) {
        return false;
    }
    else if ((0, exports.isNAN)(thing)) {
        return false;
    }
    else if (thing === '') {
        return true;
    }
    else if (thing === 0) {
        return true;
    }
    else if (thing === false) {
        return true;
    }
    else if ((0, exports.isObject)(thing)) {
        return true;
    }
    else if ((0, exports.isArray)(thing)) {
        return true;
    }
    else {
        return true;
    }
};
exports.isDefined = isDefined;
const isNotDefined = (thing) => {
    return !(0, exports.isDefined)(thing);
};
exports.isNotDefined = isNotDefined;
const isTrue = (thing) => {
    if (thing === true) {
        return true;
    }
    else if (thing === 1) {
        return true;
    }
    else if (thing && typeof thing === 'string' && thing.toLowerCase() === 'true') {
        return true;
    }
    else if (thing && typeof thing === 'string' && thing.toLowerCase() === 't') {
        return true;
    }
    else {
        return false;
    }
};
exports.isTrue = isTrue;
const isFalse = (thing) => {
    if (thing === false) {
        return true;
    }
    else if (thing === 0) {
        return true;
    }
    else if (thing && typeof thing === 'string' && thing.toLowerCase() === 'false') {
        return true;
    }
    else if (thing && typeof thing === 'string' && thing.toLowerCase() === 'f') {
        return true;
    }
    else {
        return false;
    }
};
exports.isFalse = isFalse;
const isArray = (thing) => {
    if (thing && typeof thing === 'object' && typeof thing.length !== 'undefined' && thing.length >= 0) {
        return true;
    }
    else {
        return false;
    }
};
exports.isArray = isArray;
const isNotArray = (thing) => {
    return !(0, exports.isArray)(thing);
};
exports.isNotArray = isNotArray;
const isEmptyArray = (thing) => {
    if ((0, exports.isArray)(thing) && typeof thing.length !== 'undefined' && thing.length === 0) {
        return true;
    }
    else {
        return false;
    }
};
exports.isEmptyArray = isEmptyArray;
const isNotEmptyArray = (thing) => {
    if ((0, exports.isArray)(thing) && typeof thing.length !== 'undefined' && thing.length > 0) {
        return true;
    }
    else {
        return false;
    }
};
exports.isNotEmptyArray = isNotEmptyArray;
const isNAN = (thing) => {
    if (typeof thing === 'number' && isNaN(thing)) {
        return true;
    }
    else {
        return false;
    }
};
exports.isNAN = isNAN;
const isUniqueObject = (thing) => {
    if (typeof thing === 'object' && Object.prototype.toString.call(thing).indexOf('[object ') > -1 && Object.prototype.toString.call(thing) !== '[object Object]' && Object.prototype.toString.call(thing) !== '[object Array]') {
        return true;
    }
    else {
        return false;
    }
};
exports.isUniqueObject = isUniqueObject;
const isNotUniqueObject = (thing) => {
    return !(0, exports.isUniqueObject)(thing);
};
exports.isNotUniqueObject = isNotUniqueObject;
const isObject = (thing) => {
    if (thing && typeof thing === 'object' && (0, exports.isNotArray)(thing) && (0, exports.isNotUniqueObject)(thing)) {
        return true;
    }
    else {
        return false;
    }
};
exports.isObject = isObject;
const isNotObject = (thing) => {
    return !(0, exports.isObject)(thing);
};
exports.isNotObject = isNotObject;
const isEmptyObject = (thing) => {
    if ((0, exports.isObject)(thing) && Object.keys(thing).length === 0) {
        return true;
    }
    else {
        return false;
    }
};
exports.isEmptyObject = isEmptyObject;
const isNotEmptyObject = (thing) => {
    if ((0, exports.isObject)(thing) && Object.keys(thing).length > 0) {
        return true;
    }
    else {
        return false;
    }
};
exports.isNotEmptyObject = isNotEmptyObject;
const assertIsDefined = (toAssertName, thing) => {
    if ((0, exports.isNotDefined)(thing)) {
        throw new Error(`${toAssertName} is not defined.`);
    }
};
exports.assertIsDefined = assertIsDefined;
const assertIsNotDefined = (toAssertName, thing) => {
    if ((0, exports.isDefined)(thing)) {
        throw new Error(`${toAssertName} is defined.`);
    }
};
exports.assertIsNotDefined = assertIsNotDefined;
const assertIsNotEmpty = (toAssertName, thing) => {
    if ((0, exports.isEmpty)(thing)) {
        throw new Error(`${toAssertName} is empty.`);
    }
};
exports.assertIsNotEmpty = assertIsNotEmpty;
const assertIsEmpty = (toAssertName, thing) => {
    if ((0, exports.isNotEmpty)(thing)) {
        throw new Error(`${toAssertName} is not empty.`);
    }
};
exports.assertIsEmpty = assertIsEmpty;
exports.default = {
    isArray: exports.isArray,
    isDefined: exports.isDefined,
    assertIsDefined: exports.assertIsDefined,
    isEmpty: exports.isEmpty,
    assertIsEmpty: exports.assertIsEmpty,
    isEmptyArray: exports.isEmptyArray,
    isEmptyObject: exports.isEmptyObject,
    isFalse: exports.isFalse,
    isNAN: exports.isNAN,
    isNotArray: exports.isNotArray,
    isNotDefined: exports.isNotDefined,
    assertIsNotDefined: exports.assertIsNotDefined,
    isNotEmpty: exports.isNotEmpty,
    assertIsNotEmpty: exports.assertIsNotEmpty,
    isNotEmptyArray: exports.isNotEmptyArray,
    isNotEmptyObject: exports.isNotEmptyObject,
    isNotObject: exports.isNotObject,
    isNotUniqueObject: exports.isNotUniqueObject,
    isObject: exports.isObject,
    isTrue: exports.isTrue,
    isUniqueObject: exports.isUniqueObject
};
//# sourceMappingURL=simple.js.validator.js.map