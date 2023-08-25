function submitOrder(order) {
	const ordersSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Orders')
	ordersSheet.insertRowBefore(2)
	const ordersRange = ordersSheet.getRange(2, 1, 1, 5)
	ordersRange.setValues([ [
		order.date, order.price, order.profit,
		order.notes, JSON.stringify(order.details)
	] ])

	const stockSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Stock')
	order.details.forEach((item) => {
		const stockRange = stockSheet.getRange(item.index, 4, 1, 1)
		const value = stockRange.getValues()
		Logger.log(value)
		Logger.log(value[0][0])
		stockRange.setValues(
			[[ parseInt(value[0][0]) - parseInt(item.quantity) ]])
	})
	
}