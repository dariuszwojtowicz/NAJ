UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.add = function (item) {
	var new_item = {};
	new_item.item = item;
	new_item.state = 'active';
	new_item.id = this.data.length;
	this.data.push(new_item)		
	this.emit('item_added', new_item);
};

UAM.Store.prototype.update = function (id) {
	this.data[id].state = (this.data[id].state == 'active') ? 'inactive' : 'active';
	var updated_item = {};
	updated_item.id = id;
	updated_item.state = this.data[id].state;
	this.emit('item_updated', updated_item);
};
