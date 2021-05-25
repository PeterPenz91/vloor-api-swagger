'use strict';

var utils = require('../utils/writer.js');
var Floorplan = require('../service/FloorplanService');

module.exports.createFloorplanFML = function createFloorplanFML (req, res, next) {
  Floorplan.createFloorplanFML()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFloorplanById = function getFloorplanById (req, res, next, floorplanId) {
  Floorplan.getFloorplanById(floorplanId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
