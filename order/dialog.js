function openOrderDialog() {
	const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Stock')
	const range = sheet.getRange(2, 1, sheet.getMaxRows() - 1, 4)
	const values = range.getValues()

	const orderDialogHTML = HtmlService.createTemplateFromFile('order/dialog/page')

  const items = values.map((value) => ({
      name: value[0], price: value[1],
      profit: value[2], quantity: value[3]
    }))
  items.unshift('', '')
	orderDialogHTML.items = JSON.stringify(items)

	const finalDialogHTML = orderDialogHTML.evaluate()

	const orderDialog = HtmlService.createHtmlOutput(finalDialogHTML)
	orderDialog.setWidth(400)
	orderDialog.setHeight(450)

	SpreadsheetApp.getUi().showModalDialog(orderDialog, 'Place an order!');
}
