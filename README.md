A File Download Library for Appcelerator Titanium Mobile Projects
----------------------------------------------------------


Support:
========
 * Download the latest version from: https://github.com/ddehghan/Titanium-PredictiveCache
 * Please file bugs or suggestion on github.


This library implements a download queue that downloads a single or multiple files to device. 

Features:
=========

Version 1.0:

 * Download 1 file or multiple files.
 * Standalone library the handles all download functionality
 * Logs downloaded urls to debug stream to ease troubleshooting 
 * Callback function after each file is downloaded
 * Callback function after all files in a queue are downloaded

Version 2.0:

 * Predictively download files that the user will likely download in the future. So that they are ready when the application needs them. We are currently developing this prediction algorithm. If you would like to get a preview send me an email. ddehghan at gmail.com


How it works:
=============
The urls are first added to a queue. Then a recursive call is made to process each of the items in the queue. 
After each file is download a user defined callback function is called. After all files in the queue are downloaded 
an other user defined callback function is called. 


Example 1:
==========
	// Download 1 File
	Ti.include('download_utility.js');
	    
	var _callBack_DownloadOneFileFinished = function(download_result) {
		alert("finished downloading" + download_result.path);
	};
	
	utility.downloadOneFile("http://bit.ly/qhYRW9", Titanium.Filesystem.applicationDataDirectory + '1.jpg', _callBack_DownloadOneFileFinished);
	


Example 2:
==========
	// Download multiple files
    Ti.include('download_utility.js');
    
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
* TI platform version 1.8.x
* Android 2.2



Please Contribute:
==================
Help make this a better library for everyone. Send your pull request!
