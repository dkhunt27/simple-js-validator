[![Build Status](https://api.travis-ci.org/dkhunt27/simple-js-validator.png?branch=master)](https://travis-ci.org/dkhunt27/simple-js-validator)
[![NPM version](https://badge.fury.io/js/simple-js-validator.png)](http://badge.fury.io/js/simple-js-validator)

Simple Javascript Validator
===============

Perform simple javascript validation like isEmpty and isDefined in a consistent manner.

# The problem
In javascript, the typical existance check is if(someVar) or if(!someVar); however, this may have unexpected results
when someVar = true/false or 1/0.  Additionally, the if(typeof someVar === "undefined") can also have some unexpected
results when someVar is null or {}.  To complicate matters NaN and new Date() also didn't behave as expected when trying
to determine if they exist and/or are populated.

# The solution
This simple validator exposes methods to perform these checks (isDefined and isEmpty) and have a clearly defined
use cases for when they will return true vs false.

Please see the <a href="http://dkhunt27.github.io/simple-js-validator/#!/api/Validator" target="_blank">docs/index.html</a> for more details.

