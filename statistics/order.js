function getTotalOrder() {
	const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 
		'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

	const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Orders')
	const range = sheet.getRange(2, 1, sheet.getMaxRows() - 1, 4)
	const values = range.getValues()

	let monthlyStatistics = '', currentMonth = '',
		totalAsset = 0, totalProfit = 0,
		monthlyAsset = 0, monthlyProfit = 0
	values.forEach((item) => {
		const month = months[new Date(item[0]).getMonth()]
		if (currentMonth != month) {
			if (currentMonth != '') {
				monthlyStatistics += `${month}:::
				Assets: ${monthlyAsset.toFixed(2)}
				Profit: ${monthlyProfit.toFixed(2)}${'\n'}${'\n'}`
			}
			monthlyAsset = 0
			monthlyProfit = 0
			currentMonth = month
		}
		totalAsset += item[1]
		totalProfit += item[2]
		monthlyAsset += item[1]
		monthlyProfit += item[2]
	})
	monthlyStatistics += `${currentMonth}:::
	Assets: ${monthlyAsset.toFixed(2)}
	Profit: ${monthlyProfit.toFixed(2)}${'\n'}${'\n'}`
	return `Total order assets: ${totalAsset.toFixed(2)}
	Total order profit: ${totalProfit.toFixed(2)}
	
	${monthlyStatistics}`
}