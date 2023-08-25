function getTotalStock() {
	const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Stock')
	const range = sheet.getRange(2, 1, sheet.getMaxRows() - 1, 4)
	const values = range.getValues()

	let asset = 0, profit = 0
	values.forEach((item) => {
		asset += item[1] * item[3]
		profit += item[2] * item[3]
	})
	return `Total stock assets: ${asset.toFixed(2)}
	Total stock profit: ${profit.toFixed(2)}${'\n'}`
}