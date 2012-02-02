(function() {
	// All your JS code goes in here

	myNameSpace.DownloadWindow = function() {
		var _window = '';
		var _image = '';

		var _callBack_DownloadOneFileFinished = function(download_result) {
			if( typeof (download_result) !== 'undefined') {
				_image.image = Titanium.Filesystem.getFile(download_result.path);
				Ti.API.info('View this image: ' + download_result.path);
			}
		};
		var _callBack_DownloadMultipleFileFinished = function() {

			var alertDialog = Titanium.UI.createAlertDialog({
				title : '',
				message : 'All files downloaded',
				buttonNames : ['OK']
			});
			alertDialog.show();
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

				utility.downloadOneFile("http://bit.ly/qhYRW9", Titanium.Filesystem.applicationDataDirectory + '1.jpg', _callBack_DownloadOneFileFinished);

			});

			_window.add(onefileButton);

			var multifileButton = Titanium.UI.createButton({
				title : 'Get 5 file',
				height : 40,
				width : 100,
				top : 100,
				right : 30
			});

			multifileButton.addEventListener('click', function() {

				var downloadQueue = [{
					'filepath' : Titanium.Filesystem.applicationDataDirectory + "1.jpg",
					'url' : "http://bit.ly/oiAxc3"
				}, {
					'filepath' : Titanium.Filesystem.applicationDataDirectory + "2.jpg",
					'url' : "http://bit.ly/oiAxc3"
				}, {
					'filepath' : Titanium.Filesystem.applicationDataDirectory + "3.jpg",
					'url' : "http://bit.ly/qgAbOE"
				}, {
					'filepath' : Titanium.Filesystem.applicationDataDirectory + "4.jpg",
					'url' : "http://bit.ly/nzZiVd"
				}, {
					'filepath' : Titanium.Filesystem.applicationDataDirectory + "5.jpg",
					'url' : "http://bit.ly/pkGwHF"
				}];

				downloadQueue.push({
					'filepath' : Titanium.Filesystem.applicationDataDirectory + "6.jpg",
					'url' : "http://bit.ly/nlRoQi"
				});

				utility.downloadMultiFile(downloadQueue, _callBack_DownloadOneFileFinished, _callBack_DownloadMultipleFileFinished);

			});


			_window.add(multifileButton);
			_image = Titanium.UI.createImageView({
				top : 150,
				left : 0,
				width : Ti.Platform.displayCaps.platformWidth,
				height: Ti.Platform.displayCaps.platformHeight-150
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
