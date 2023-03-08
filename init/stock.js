function initStockPage(spreadsheet) {
	const sheet = spreadsheet.insertSheet()
	sheet.setName("Stock")

	const allRange = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns())
	allRange.applyRowBanding()
		.setHeaderRowColor('#26428b')
		.setFirstRowColor('#f6f9ff')
		.setSecondRowColor('#e9f1ff')
	allRange.setHorizontalAlignment('center')
	allRange.setFontSize('14')
	allRange.setFontColor('#5a5a5a')

	const headerRange = sheet.getRange(1, 1, 1, 4)
	const headerValues = headerRange.getValues()
	headerValues[0] = ['Items', 'Price', 'Profit', 'Quantity']
	headerRange.setValues(headerValues)
	headerRange.setFontColor('#e9f1ff')
	headerRange.setFontWeight('bold')

	const bodyRange = sheet.getRange(2, 1, 2, 4)
	bodyRange.setValues([
		['Apple', '10', '1', '25'],
		['Orange', '15', '2', '30']
	])
	bodyRange.setFontColor('#363636')

	sheet.deleteRows(4, sheet.getMaxRows() - 3)
	sheet.deleteColumns(5, sheet.getMaxColumns() - 4)
}