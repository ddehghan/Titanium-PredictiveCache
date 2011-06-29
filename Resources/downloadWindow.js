var downloadWindow = {};

downloadWindow.bgColor =  '#030';

downloadWindow.renderWindow= function() {

	var win1 = Titanium.UI.createWindow({
		title:'Tab 1',
		backgroundColor:downloadWindow.bgColor
	});

	var label1 = Titanium.UI.createLabel({
		color:'#999',
		text:'I am Window 1',
		font: {
			fontSize:20,
			fontFamily:'Helvetica Neue'
		},
		textAlign:'center',
		width:'auto',
		height: 60,
		top: 10
	});

	win1.add(label1);

	var onefileButton = Titanium.UI.createButton({
		title:'Download 1 file',
		height:40,
		width:150,
		top:100,
		left:10
	});

	onefileButton.addEventListener('click', function() {
		utility.downloadOneFile ('https://www.appcelerator.com/wp-content/uploads/2009/06/titanium_desk.png', 'ti1.png');
		imagesToView.push('ti1.png');
		mainWindow.tabGroup.tabs[1].window = viewWindow.renderWindow();

	});
	win1.add(onefileButton);

	return win1;
}