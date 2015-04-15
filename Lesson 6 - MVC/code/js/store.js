UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.add = function (item) {
	console.log(item);
	this.data.push(item);
};
UAM.Store.prototype.update = function (id, item) {};
