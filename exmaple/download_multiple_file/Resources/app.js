myNameSpace = {};

Ti.include('downloadWindow.js');
Ti.include('viewWindow.js');
Ti.include('utility.js');
Ti.include('mainWindow.js');


MyAppGlob = {
	MainWindow : new myNameSpace.MainWindow(),
	DownloadWindow : new myNameSpace.DownloadWindow(),
	ViewWindow : new myNameSpace.ViewWindow(),
	imagePathToShow : {}
};

MyAppGlob.ViewWindow.init();
MyAppGlob.DownloadWindow.init();
MyAppGlob.MainWindow.init();
