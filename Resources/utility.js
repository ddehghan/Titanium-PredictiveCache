var utility = {};

// Download any file. The path folder in which the file to be downloaded must exsists.
utility.downloadOneFile = function(url, filepath, callBack) {

	var c = Titanium.Network.createHTTPClient();

	if(null != callBack) {
		c.onerror = function(e) {
			Ti.API.info('MyApp: Download failed: url= ' + url + ' Error=' + e.error);
			callBack('CONNECTION_ERROR');
		};

		c.onload = function(e) {

			if(Titanium.Platform.name === 'android') {

				// On android HTTPClient will not save the file to disk. So have to hack around it
				Ti.API.info('MyApp: (Andoid) Downloaded this file from server:.' + filepath);
				var f = Titanium.Filesystem.getFile(filepath);
				f.write(c.responseData);
			}

			callBack(c.status);
		};
	}

	c.open('GET', url);

	if(null != filepath && Titanium.Platform.name !== 'android') {
		Ti.API.info('MyApp:  (iOS) Downloaded this file from server:.' + filepath);
		c.file = Titanium.Filesystem.getFile(filepath);
	}

	c.send();

};
