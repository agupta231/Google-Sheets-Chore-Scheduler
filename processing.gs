function Event(timestamp, user, chore, day) {
	this.timestamp = timestamp;
	this.user = user;
	this.chore = chore;
	this.day = day;
}

function processBacklog() {
	var logSS = _getRawDataForSheet(LOG_SHEET);

	for(var i = 0; i < CONFIG.ROWS_TO_PROCESS; i++) {
	}
}

function processEvent(e) {
}
