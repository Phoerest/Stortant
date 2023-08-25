function showExpire() {
	const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Stock')
	const range = sheet.getRange(2, 1, sheet.getMaxRows() - 1, 5)
	const values = range.getValues()

	let expires = ''
	values.forEach((item) => {
		if (new Date(item[4]).getTime() < new Date().getTime())
			expires += '---expired---' + item[0] + '\n'
		else if (new Date(item[4]).getTime() < new Date().getTime() + 6.048e+8)
			expires += item[0] + '\n'
	})
	SpreadsheetApp.getUi().alert(expires)
}