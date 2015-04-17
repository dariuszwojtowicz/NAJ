UAM.ListView = function () {
	var items = document.querySelector('#items');
	items.addEventListener('item_added', function() {
		var item = arguments[0];
		this.innerHTML += '<li>'+item+'</li>';
	})

	this.add = function (item) {
		var items = document.querySelector('#items');
		items.innerHTML += "<li class='active' onclick='toogle(this)' data='"+item.id+"'>"+item.item+"</li>";
	};

	this.update = function (item) {
		document.querySelectorAll("[data='"+item.id+"']")[0].setAttribute('class', item.state);
	};
};

UAM.utils.inherits(UAM.BaseView, UAM.ListView);

function toogle (item) {
	var item_id = parseInt(item.getAttribute('data'));
	UAM.EventEmitter.prototype.emit('toogle', item_id);
};