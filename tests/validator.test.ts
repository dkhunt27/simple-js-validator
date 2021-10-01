import validator from '../lib/simple.js.validator';

describe('validator.test.js', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let nothing: any;

  type isFunctionNameType = 'isArray' | 'isDefined' | 'isEmpty' | 'isEmptyArray' | 'isEmptyObject' | 'isFalse' | 'isNAN' | 'isNotArray' | 'isNotDefined' | 'isNotEmpty' | 'isNotEmptyArray' | 'isNotEmptyObject' | 'isNotObject' | 'isNotUniqueObject' | 'isObject' | 'isTrue' | 'isUniqueObject';

  type assertFunctionNameType = 'assertIsDefined' | 'assertIsEmpty' | 'assertIsNotDefined' | 'assertIsNotEmpty';

  const givenTypeofUndefined = (functionName: isFunctionNameType, expected: boolean) => {
    test('given typeof undefined; then should return ' + expected, () => {
      const value = nothing;
      const resultsReturned = validator[functionName](value);
      expect(resultsReturned).toBe(expected);
    });
  };

  const givenNull = (functionName: isFunctionNameType, expected: boolean) => {
    test('given null; then should return ' + expected, () => {
      const value = null;
      const resultsReturned = validator[functionName](value);
      expect(resultsReturned).toBe(expected);
    });
  };

  const givenNaN = (functionName: isFunctionNameType, expected: boolean) => {
    test('given NaN; then should return ' + expected, () => {
      const value = parseInt('NotANumber', 10);
      const resultsReturned = validator[functionName](value);
      expect(resultsReturned).toBe(expected);
    });
  };

  const givenStringEmpty = (functionName: isFunctionNameType, expected: boolean) => {
    test('given empty string; then should return ' + expected, () => {
      const value = '';
      const resultsReturned = validator[functionName](value);
      expect(resultsReturned).toBe(expected);
    });
  };

  const givenString = (functionName: isFunctionNameType, expected: boolean) => {
    test('given a string; then should return ' + expected, () => {
      const value = 'abc';
      const resultsReturned = validator[functionName](value);
      expect(resultsReturned).toBe(expected);
    });
  };

  const givenInteger = (functionName: isFunctionNameType, expected: boolean) => {
    test('given a integer; then should return ' + expected, () => {
      const value = 123;
      const resultsReturned = validator[functionName](value);
      expect(resultsReturned).toBe(expected);
    });
  };

  const givenObjectEmpty = (functionName: isFunctionNameType, expected: boolean) => {
    test('given an empty object; then should return ' + expected, () => {
      const value = {};
      const resultsReturned = validator[functionName](value);
      expect(resultsReturned).toBe(expected);
    });
  };

  const givenObjectPopulated = (functionName: isFunctionNameType, expected: boolean) => {
    test('given a populated object; then should return ' + expected, () => {
      const value = { abc: 123 };
      const resultsReturned = validator[functionName](value);
      expect(resultsReturned).toBe(expected);
    });
  };

  const givenArrayEmpty = (functionName: isFunctionNameType, expected: boolean) => {
    test('given an empty array; then should return ' + expected, () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const value: any = [];
      const resultsReturned = validator[functionName](value);
      expect(resultsReturned).toBe(expected);
    });
  };

  const givenArrayPopulated = (functionName: isFunctionNameType, expected: boolean) => {
    test('given a populated array; then should return ' + expected, () => {
      const value = ['abc'];
      const resultsReturned = validator[functionName](value);
      expect(resultsReturned).toBe(expected);
    });
  };

  const givenObjectDate = (functionName: isFunctionNameType, expected: boolean) => {
    test('given a date object; then should return ' + expected, () => {
      const value = new Date();
      const resultsReturned = validator[functionName](value);
      expect(resultsReturned).toBe(expected);
    });
  };

  const givenObjectError = (functionName: isFunctionNameType, expected: boolean) => {
    test('given an error object; then should return ' + expected, () => {
      const value = new Error('some error');
      const resultsReturned = validator[functionName](value);
      expect(resultsReturned).toBe(expected);
    });
  };

  const givenInteger0 = (functionName: isFunctionNameType, expected: boolean) => {
    test('given 0; then should return ' + expected, () => {
      const value = 0;
      const resultsReturned = validator[functionName](value);
      expect(resultsReturned).toBe(expected);
    });
  };

  const givenBooleanFalse = (functionName: isFunctionNameType, expected: boolean) => {
    test('given false; then should return ' + expected, () => {
      const value = false;
      const resultsReturned = validator[functionName](value);
      expect(resultsReturned).toBe(expected);
    });
  };

  const givenStringFalse = (functionName: isFunctionNameType, expected: boolean) => {
    test('given "false"; then should return ' + expected, () => {
      const value = 'false';
      const resultsReturned = validator[functionName](value);
      expect(resultsReturned).toBe(expected);
    });
  };

  const givenStringF = (functionName: isFunctionNameType, expected: boolean) => {
    test('given "F"; then should return ' + expected, () => {
      const value = 'F';
      const resultsReturned = validator[functionName](value);
      expect(resultsReturned).toBe(expected);
    });
  };

  const givenInteger1 = (functionName: isFunctionNameType, expected: boolean) => {
    test('given 1; then should return ' + expected, () => {
      const value = 1;
      const resultsReturned = validator[functionName](value);
      expect(resultsReturned).toBe(expected);
    });
  };

  const givenBooleanTrue = (functionName: isFunctionNameType, expected: boolean) => {
    test('given true; then should return ' + expected, () => {
      const value = true;
      const resultsReturned = validator[functionName](value);
      expect(resultsReturned).toBe(expected);
    });
  };

  const givenStringTrue = (functionName: isFunctionNameType, expected: boolean) => {
    test('given "true"; then should return ' + expected, () => {
      const value = 'true';
      const resultsReturned = validator[functionName](value);
      expect(resultsReturned).toBe(expected);
    });
  };

  const givenStringT = (functionName: isFunctionNameType, expected: boolean) => {
    test('given "T"; then should return ' + expected, () => {
      const value = 'T';
      const resultsReturned = validator[functionName](value);
      expect(resultsReturned).toBe(expected);
    });
  };

  describe('#isEmpty()', () => {
    const functionName: isFunctionNameType = 'isEmpty';
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
  describe('#isNotEmpty()', () => {
    const functionName: isFunctionNameType = 'isNotEmpty';
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
  describe('#isDefined()', () => {
    const functionName: isFunctionNameType = 'isDefined';
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
  describe('#isNotDefined()', () => {
    const functionName: isFunctionNameType = 'isNotDefined';
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
  describe('#isTrue()', () => {
    const functionName: isFunctionNameType = 'isTrue';
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
  describe('#isFalse()', () => {
    const functionName: isFunctionNameType = 'isFalse';
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
  describe('#isArray()', () => {
    const functionName: isFunctionNameType = 'isArray';
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
  describe('#isNotArray()', () => {
    const functionName: isFunctionNameType = 'isNotArray';
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
  describe('#isEmptyArray()', () => {
    const functionName: isFunctionNameType = 'isEmptyArray';
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
  describe('#isNotEmptyArray()', () => {
    const functionName: isFunctionNameType = 'isNotEmptyArray';
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
  describe('#isObject()', () => {
    const functionName: isFunctionNameType = 'isObject';
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
  describe('#isNotObject()', () => {
    const functionName: isFunctionNameType = 'isNotObject';
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
  describe('#isEmptyObject()', () => {
    const functionName: isFunctionNameType = 'isEmptyObject';
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
  describe('#isNotEmptyObject()', () => {
    const functionName: isFunctionNameType = 'isNotEmptyObject';
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
  describe('#assertIsDefined()', () => {
    const functionName: assertFunctionNameType = 'assertIsDefined';
    test('given typeof undefined; then should throw error', () => {
      const value = nothing;
      expect(() => validator[functionName]('someField', value)).toThrow('someField is not defined');
    });
    test('given typeof string; then should not throw error', () => {
      const value = 'abc';
      expect(() => validator[functionName]('someField', value)).not.toThrow('someField is not defined');
    });
  });
  describe('#assertIsNotDefined()', () => {
    const functionName: assertFunctionNameType = 'assertIsNotDefined';
    test('given typeof string; then should throw error', () => {
      const value = 'abc';
      expect(() => validator[functionName]('someField', value)).toThrow('someField is defined');
    });
    test('given typeof undefined; then should not throw error', () => {
      const value = nothing;
      expect(() => validator[functionName]('someField', value)).not.toThrow('someField is defined');
    });
  });
  describe('#assertIsEmpty()', () => {
    const functionName: assertFunctionNameType = 'assertIsEmpty';
    test('given typeof string; then should throw error', () => {
      const value = 'abc';
      expect(() => validator[functionName]('someField', value)).toThrow('someField is not empty');
    });
    test('given typeof empty string; then should not throw error', () => {
      const value = '';
      expect(() => validator[functionName]('someField', value)).not.toThrow('someField is not empty');
    });
  });
  describe('#assertIsNotEmpty()', () => {
    const functionName: assertFunctionNameType = 'assertIsNotEmpty';
    test('given typeof empty string; then should throw error', () => {
      const value = '';
      expect(() => validator[functionName]('someField', value)).toThrow('someField is empty');
    });
    test('given typeof string; then should not throw error', () => {
      const value = 'abc';
      expect(() => validator[functionName]('someField', value)).not.toThrow('someField is empty');
    });
  });
});
