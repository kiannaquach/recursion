// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'number') {
  	return '' + obj;
  }

  if (obj === null) {
  	return 'null';
  }

  if (typeof obj === 'boolean') {
  	return obj + '';
  }

  if (typeof obj === 'string') {
  	return '"' + obj + '"';
  }

  var stringifiedArray = [];
  var stringifiedObj = [];

  if (Array.isArray(obj)) {
  	for (var i = 0; i < obj.length; i++) {
  		stringifiedArray.push(stringifyJSON(obj[i])); // stringifies every el in arr according to base cases
  		// console.log(stringifiedArray)
  	}
  	return '[' + stringifiedArray + ']';
  } else {
  	for (var key in obj) {
  		if (typeof obj[key] !== 'undefined' && typeof obj[key] !== 'function') { 
  			stringifiedObj.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
  			// console.log(stringifiedObj)
  		}
  	}
  	return '{' + stringifiedObj + '}';
  }
};
