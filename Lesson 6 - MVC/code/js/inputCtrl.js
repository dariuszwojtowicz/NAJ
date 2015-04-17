UAM.InputCtrl = function () {
	
	ee.on('new_item', function() {
		var input = arguments[0];
		store.add(input);
	});
};

UAM.utils.inherits(UAM.BaseCtrl, UAM.InputCtrl);