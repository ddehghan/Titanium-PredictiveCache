var mainWindow = {};

mainWindow.bgColor=  '#300';
mainWindow.tabGroup = {};

mainWindow.renderWindow = function() {

	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor(mainWindow.bgColor);

	// create tab group
	mainWindow.tabGroup = Titanium.UI.createTabGroup();

	var tab1 = Titanium.UI.createTab({
		icon:'KS_nav_views.png',
		title:'Tab 1',
		window: downloadWindow.renderWindow()
	});

	var tab2 = Titanium.UI.createTab({
		icon:'KS_nav_views.png',
		title:'Tab 2',
		window: viewWindow.renderWindow()
	});

	//
	//  add tabs
	//
	mainWindow.tabGroup.addTab(tab1);
	mainWindow.tabGroup.addTab(tab2);

	// open tab group
	mainWindow.tabGroup.open();

};