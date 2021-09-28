# Object List

This module is responsible for keeping track of objects in the Firebase 
database and making them available for local consumption. Objects will 
be added to the object list via reference, all objects in the list will be
requested from Firebase. Whenever data is updates it will be cached locally
and subscribers updated.

## Interface

* initialize(db, pubSub) - Provide dependencies
* watch(ref) - Add ref to object list which is monitored. Wheenver an object is updated all pubSub scribers will be notified
* get(ref) - Returns the promise and current object for the given ref