function initOrdersPage(spreadsheet) {
	const sheet = spreadsheet.insertSheet()
	sheet.setName("Orders")
	
	const allRange = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns())
	allRange.applyRowBanding(SpreadsheetApp.BandingTheme.LIGHT_GREY, false, false)
		.setHeaderRowColor('#26428b')
		.setFirstRowColor('#f6f9ff')
		.setSecondRowColor('#e9f1ff')
	allRange.setHorizontalAlignment('center')
	allRange.setFontSize('12')

	const headerRange = sheet.getRange(1, 1, 1, 5)
	const headerValues = headerRange.getValues()
	headerValues[0] = ['Date', 'Price', 'Profit', 'Notes', 'Details']
	headerRange.setValues(headerValues)
	headerRange.setFontColor('#e9f1ff')
	headerRange.setFontWeight('bold')

	sheet.deleteRows(2, sheet.getMaxRows() - 2)
	sheet.deleteColumns(6, sheet.getMaxColumns() - 5)
}