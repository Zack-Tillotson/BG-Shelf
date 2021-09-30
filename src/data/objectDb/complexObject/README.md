# Complex Object

This module is responsible for managing "complex" objects, first
in building them on get request and in preparing them for storage
in the store 

"get" is the task of building a complex object from current objects 
in the store including resolving any refs that might exist in the 
object attributes. If the object is not able to be fully resolved 
then the request for the object will throw an error which includes a 
list of the refs which are missing.

"normalize" is the task of taking a complex object and converting
to a flat list of objects which reference each other.

## Interface

* initialize(objectList) - Provide dependencies
* get(ref) - returns a pojo object for the given object.
    Throws an error if unable to do so.
* normalize(object) - returns an array of uncomplex objects. Any 
    objects which were linked are converted to references.