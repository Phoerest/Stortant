function initializeApp() {
	const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()

	initStockPage(spreadsheet)
	initOrdersPage(spreadsheet)
}