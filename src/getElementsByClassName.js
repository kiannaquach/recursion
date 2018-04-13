// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	// element.classList
	// document.body
	// element.childNodes
	var results = [];
	var getElements = function(element) {
		if (element.classList && element.classList.contains(className)) {
			results.push(element);
		}

		if (element.childNodes) {
			_.each(element.childNodes,function(childNodeElement) {
				getElements(childNodeElement);
			})
		}
	}

	getElements(document.body); // invoke inner function getElements on the document.body
	return results; // return the results
};
/*
[
  '<div class="targetClassName"></div>',
  '<div class="otherClassName targetClassName"></div>',
  '<div>
  	<div class="targetClassName"></div>
  </div>',
  '<div>
	  <div class="targetClassName">
	  	<div class="targetClassName">
	  	</div>
	  </div>
   </div>',
  '<div>
  	<div>
  	</div>
  		<div>
  			<div class="targetClassName">
  			</div>
  		</div>
  </div>',
  '<div><div class="targetClassName"></div><div class="targetClassName"></div></div>',
  '<div><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></div>'
]
*/