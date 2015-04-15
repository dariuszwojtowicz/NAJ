UAM.InputView = function () {
	var ee = UAM.EventEmitter;
	ee.call(this);
	var button = document.querySelector('button');
	button.addEventListener('click', function() {
		var input = document.querySelector('input#value').value;
		ee.emit('new_item', input);
	})

	
};

UAM.utils.inherits(UAM.BaseView, UAM.InputView);