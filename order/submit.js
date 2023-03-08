function submitOrder(order) {
	const ordersSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Orders')
	ordersSheet.insertRowBefore(2)
	const ordersRange = ordersSheet.getRange(2, 1, 1, 5)
	Logger.log(ordersRange.getValues())
	ordersRange.setValues([ [
		order.date, order.price, order.profit,
		order.notes, JSON.stringify(order.details)
	] ])

	const stockSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Stock')
	const stockRange = stockSheet.getRange(2, 4, stockSheet.getMaxRows() - 1, 1)
	const stockValues = stockRange.getValues()
	
	stockRange.setValues( stockValues.map((value, index) => {
		if (value && order.details?.[index])
			return [ parseInt(value) - parseInt(order.details[index].quantity) ]
		return value
	}) )
}