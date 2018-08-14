var SUNDAY = 0;
var MONDAY = 1;
var TUESDAY = 2;
var WEDNESDAY = 3;
var THURSDAY = 4;
var FRIDAY = 5;
var SATURDAY = 6;

var SCHEDULE_SHEET = 0;
var LOG_SHEET = 1;
var CHORES_SHEET = 2
var APP_SHEET = 3;
var USER_SHEET = 4;

function _getRawDataForSheet(index) {
	return SpreadsheetApp
		.getActiveSpreadsheet()
		.getSheets()[index]
		.getDataRange()
		.getValues();
}
