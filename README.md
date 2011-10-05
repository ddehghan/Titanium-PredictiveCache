Download Library for Appcelerator Titanium Mobile Projects
----------------------------------------------------------


This library implements a download queue that downloads single or multiple files to local drive. 

Features:
=========
* Download 1 file or multiple files.
* Standalone library the handles all download functionality
* Logs downloaded urls to debug stream to ease truble shooting 
* Call back function after each downloaded file
* Call back function after all files are downloaded


How it works:
=============
The urls are first added to a queue. Then a recursive call is made to process each of the items in the queue. 
After each file is download a user defined call back function is called. After all files in the queue are downloaded 
an other user defined call back function is called. 


Example 1:
==========
// 1 File Download
var _callBack_DownloadOneFileFinished = function(download_result) {
	alert("finished downloading" + download_result.path);
};

utility.downloadOneFile("http://bit.ly/qhYRW9", '1.jpg', _callBack_DownloadOneFileFinished);



Example 2:
==========
// Multiple file download

var downloadQueue = [{ 'filepath' : Titanium.Filesystem.applicationDataDirectory + "2.jpg",	'url' : "http://bit.ly/oiAxc3"}, 
					{'filepath' : Titanium.Filesystem.applicationDataDirectory + "3.jpg", 'url' : "http://bit.ly/qgAbOE"}];

var _callBack_DownloadOneFileFinished = function(download_result) {
	alert("finished downloading" + download_result.path);
};
var _callBack_DownloadMultipleFileFinished = function() {
	alert("finished downloading all files");
};

utility.downloadMultiFile(downloadQueue, _callBack_DownloadOneFileFinished, _callBack_DownloadMultipleFileFinished);


Tested on:
==========
* iOS 4.3
* TI platform version 1.7.2
* Android 2.2



Please Contribute:
==================
Help make this a better library for everyone. Send me pull request. 
