var NGin = {};

NGin.World = {
	add : function(child) {
		children[numChildren++] = child;
	},
	update : function() {
		for (var i = 0; i < numChildren; ++i) {
			children[i].update();
		};
	},
	render : function() {
		for (var i = 0; i < numChildren; ++i) {
			children[i].render();
		};
	},
	children : new Array(),
	numChildren : 0
};

NGin.Entity = {
	x: 0,
	y: 0,
	update: function() {

	},
	render: function() {

	}
};

NGin.Input = {
	
};