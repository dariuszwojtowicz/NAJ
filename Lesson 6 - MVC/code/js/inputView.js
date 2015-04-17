UAM.InputView = function () {
	var button = document.querySelector('button');
	button.addEventListener('click', function() {
		var input = document.querySelector('input#value').value;
		ee.emit('new_item', input);
		document.querySelector('input#value').value = '';
	})
};



UAM.utils.inherits(UAM.BaseView, UAM.InputView);