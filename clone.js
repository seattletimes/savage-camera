//simple clone
//necessary because SVG bounding box objects are read-only in IE

module.exports = function(obj) {
  var o = {};
  for (var key in obj) {
    o[key] = obj[key];
  }
  return o;
};