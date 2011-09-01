(function() {
	// All your JS code goes in here

	myNameSpace.MainWindow = function() {
		var _window = '';
		var _tabGroup = '';

		var _init = function() {
			_window = '';
			_window = Ti.UI.createWindow({
				backgroundColor : "#fff",
				title : "Lean Prototype",
				fullscreen : false
			});

			// create tab group
			_tabGroup = Titanium.UI.createTabGroup();

			var tab1 = Titanium.UI.createTab({
				icon : 'images/KS_nav_views.png',
				title : 'My Apps',
				window : MyAppGlob.DownloadWindow.getWindow()
			});

			_tabGroup.addTab(tab1);

			var tab3 = Titanium.UI.createTab({
				icon : 'images/KS_nav_views.png',
				title : 'Settings',
				window : MyAppGlob.ViewWindow.getWindow()
			});

			_tabGroup.addTab(tab3);

			_tabGroup.open();
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
