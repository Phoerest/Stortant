function createMenu() {
	SpreadsheetApp.getUi().createMenu('Stortant')
		.addItem('Order', 'openOrderDialog')
		.addItem('Initialize', 'initializeApp')
		.addToUi();
}