function createMenu() {
	SpreadsheetApp.getUi().createMenu('Stortant')
		.addItem('Order', 'openOrderDialog')
		.addItem('Init', 'initializeApp')
		.addToUi();
}