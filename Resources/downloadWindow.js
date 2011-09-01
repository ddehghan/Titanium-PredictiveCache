(function() {
	// All your JS code goes in here

	myNameSpace.DownloadWindow = function() {
		var _window = '';
		var _image = '';

		var _callBack_DownloadDone = function() {
			imagePath = Titanium.Filesystem.applicationDataDirectory + MyAppGlob.imagesToView[0];
			_image.image = Titanium.Filesystem.getFile(imagePath);
			Ti.API.info('View this image: ' + imagePath);
		};
		var _init = function() {
			_window = '';
			_window = Titanium.UI.createWindow({
				title : 'Tab 1',
				backgroundColor : '#030'
			});

			var label1 = Titanium.UI.createLabel({
				color : '#999',
				text : 'I am Window 1',
				font : {
					fontSize : 20,
					fontFamily : 'Helvetica Neue'
				},
				textAlign : 'center',
				width : 'auto',
				height : 60,
				top : 10
			});

			_window.add(label1);

			var onefileButton = Titanium.UI.createButton({
				title : 'Get 1 file',
				height : 40,
				width : 100,
				top : 100,
				left : 30
			});

			onefileButton.addEventListener('click', function() {
				utility.downloadOneFile('https://www.appcelerator.com/wp-content/uploads/2009/06/titanium_desk.png', 'ti1.png', _callBack_DownloadDone);
				MyAppGlob.imagesToView.push('ti1.png');
			});

			_window.add(onefileButton);
			
			var multifileButton = Titanium.UI.createButton({
				title : 'Get 3 file',
				height : 40,
				width : 100,
				top : 100,
				right : 30
			});

			multifileButton.addEventListener('click', function() {
				utility.downloadOneFile('https://www.appcelerator.com/wp-content/uploads/2009/06/titanium_desk.png', 'ti1.png', _callBack_DownloadDone);
				MyAppGlob.imagesToView.push('ti1.png');
				// mainWindow.tabGroup.tabs[1].window = viewWindow.renderWindow();

			});

			_window.add(multifileButton);
						
			_image = Titanium.UI.createImageView({
				top : 200,
				left : 20
			});

			_window.add(_image);
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
