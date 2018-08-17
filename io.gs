function validateEditIsComplete() {
	var logSS = _getRawDataForSheet(LOG_SHEET);
	var rows_to_process = 0;

	for(var i = CONFIG.NEXT_ROW; i < logSS.length; i++) {
		for(var j = 0; j < logSS[0].length; j++) {
			var currentField = logSS[i][j];

			if(currentField === "" || currentField[0] === "") {
				CONFIG.ROWS_TO_PROCESS = rows_to_process;
				return CONFIG.ROWS_TO_PROCESS > 0;
			}
		}

		rows_to_process++;
	}

	return false;
}

function _writeConfigValue(keyword, value) {
	var appConfigSheet = _getRawDataForSheet(APP_SHEET);

	for(var i = 1; i <  appConfigSheet.length; i++) {
		if(appConfigSheet[i][0].indexOf(keyword) !== -1) {
			_getCell(APP_SHEET, i + 1, 2).setValue(value);
			return true;
		}
	}

	return false;
}
