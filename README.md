simpleValidator
===============

Perform simple javascript validation like isEmpty and isDefined in a consistent manner.

# The problem
In javascript, the typical existance check is if(someVar) or if(!someVar); however, this may have unexpected results
when someVar = true/false or 1/0.  Additionally, the if(typeof someVar === "undefined") can also have some unexpected
results when someVar is null or {}.  To complicate matters NaN and new Date() also didn't behave as expected when trying
to determine if they exist and/or are populated.

This simple validation checks (isDefined and isEmpty) have defined use cases for when they will return true vs false.

Please see the [docs/index.html](./docs/index.html) for more details.
