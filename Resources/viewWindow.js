(function() {
	// All your JS code goes in here

	myNameSpace.ViewWindow = function() {
		var _window = '';
		var _tabGroup = '';

		var _init = function() {
			_window = '';
			_window = Titanium.UI.createWindow({
				title : 'Tab 2',
				backgroundColor : '#030'
			});

			var label2 = Titanium.UI.createLabel({
				color : '#999',
				text : 'I am Window 2',
				font : {
					fontSize : 20,
					fontFamily : 'Helvetica Neue'
				},
				textAlign : 'center',
				width : 'auto',
				height : 60,
				top : 10
			});

			_window.add(label2);

			// var imageView = Titanium.UI.createImageView({
// 
				// // top:150,
				// // left:10
// 
			// });
			// _window.add(imageView);

			// if( typeof MyAppGlob.imagesToView[0] !== 'undefined') {
				// label2.text = 'xxxxxx';
				// imagePath = Titanium.Filesystem.applicationDataDirectory + imagesToView[0];
				// imageView.image = Titanium.Filesystem.getFile(imagePath);
				// Ti.API.info('View this image: ' + imagePath);
			// }
		};
		return {// publicly accessible API

			init : function() {
				return _init();
			},
			getWindow : function() {
				return _window;
			}
		};

	};
})();
