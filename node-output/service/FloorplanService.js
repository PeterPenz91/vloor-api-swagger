'use strict';


/**
 * Digitize a new floor plan to FML by providing an image
 *
 * returns FloorplanId
 **/
exports.createFloorplanFML = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "floorplanId" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find floor plan FML by floorplan ID
 * Returns a single floor plan FML file
 *
 * floorplanId Long ID of floor plan FML file to return
 * returns FML
 **/
exports.getFloorplanById = function(floorplanId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

