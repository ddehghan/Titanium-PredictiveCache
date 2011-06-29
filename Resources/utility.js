var utility = {};

utility.downloadOneFile = function(url, fileName) {

	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function() {
		var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, fileName);
		f.write(this.responseData);
		// imageView.url = f.nativePath;
	};
	xhr.open('GET',url);
	xhr.send();
	
}