UAM.InputCtrl = function () {
	var ee = UAM.EventEmitter.prototype;
	ee.on('new_item');
};

UAM.utils.inherits(UAM.BaseCtrl, UAM.InputCtrl);