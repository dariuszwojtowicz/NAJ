UAM.ListCtrl = function () {
	ee.on('item_added', function() {
		var item = arguments[0];
		listView.add(item);
	});

	ee.on('toogle', function() {
		var item_id = arguments[0];
		store.update(item_id);
	});

	ee.on('item_updated', function() {
		var item = arguments[0];
		listView.update(item);
	})
};

UAM.utils.inherits(UAM.BaseCtrl, UAM.ListCtrl);