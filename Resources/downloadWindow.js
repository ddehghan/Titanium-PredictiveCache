(function() {
	// All your JS code goes in here

	myNameSpace.DownloadWindow = function() {
		var _window = '';
		var _image = '';

		var _callBack_DisplayFile = function() {

			_image.image = Titanium.Filesystem.getFile(MyAppGlob.imagePathToShow);
			Ti.API.info('View this image: ' + MyAppGlob.imagePathToShow);
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
				var filePath = Titanium.Filesystem.applicationDataDirectory + 'ti1.png';
				MyAppGlob.imagePathToShow = filePath;
				utility.downloadOneFile("http://www.appcelerator.com/wp-content/uploads/2009/06/titanium_desk.png", filePath, _callBack_DisplayFile);

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

				var downloadQueue = [];

				downloadQueue.push({
					'filepath' : Titanium.Filesystem.applicationDataDirectory + "c.png",
					'url' : "http://upload.wikimedia.org/wikipedia/commons/thumb/6/62/PD-icon.svg/64px-PD-icon.svg.png"
				});

				downloadQueue.push({
					'filepath' : Titanium.Filesystem.applicationDataDirectory + "ti.png",
					'url' : "http://www.appcelerator.com/wp-content/uploads/2009/06/titanium_desk.png"
				});
				
				downloadQueue.push({
					'filepath' : Titanium.Filesystem.applicationDataDirectory + "r.png",
					'url' : "http://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Orange_trademark.svg/64px-Orange_trademark.svg.png"
				});

				utility.downloadMultiFile(downloadQueue, _callBack_DisplayFile);

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
