function showStatistics () {
	SpreadsheetApp.getUi().alert(`${getTotalStock()}
	${getTotalOrder()}`);
}