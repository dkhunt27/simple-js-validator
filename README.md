[![Build Status](https://api.travis-ci.org/dkhunt27/simpleJSValidator.png?branch=dev)](https://travis-ci.org/dkhunt27/simpleJSValidator)
[![NPM version](https://badge.fury.io/js/simpleJSValidator.png)](http://badge.fury.io/js/simpleJSValidator)

simpleValidator
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

Please see the <a href="http://dkhunt27.github.io/simpleJSValidator/#!/api/Validator" target="_blank">docs/index.html</a> for more details.


# Release History
2013/07/30    v1.0.0    Initial public release