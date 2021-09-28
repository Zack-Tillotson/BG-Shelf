# Complex Object

This module is responsible for building a "complex" object
from the current objects in the store, including resolving
any refs that might exist in the object attributes. If the 
object is not able to be fully resolved then the request for
the object will throw an error which includes a list of the 
refs which are missing.

## Interface

* initialize(objectList) - Provide dependencies
* get(ref) - returns a pojo object for the given object.
    Throws an error if unable to do so.