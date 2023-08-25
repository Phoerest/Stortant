function createMenu() {
	SpreadsheetApp.getUi().createMenu('Stortant')
		.addItem('Order', 'openOrderDialog')
		.addItem('Statistics', 'showStatistics')
		.addItem('Expire', 'showExpire')
		.addItem('Initialize', 'initializeApp')
		.addToUi();
}