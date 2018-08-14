function _getRawDataForSheet(index) {
	return SpreadsheetApp
		.getActiveSpreadsheet()
		.getSheets()[index]
		.getDataRange()
		.getValues();
}
