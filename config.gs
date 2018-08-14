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

function Config(maxWorkTime, chores) {
	this.MAX_WORK_TIME = maxWorkTime;
	this.CHORES = chores;
}

function Chore(name, weight, dayMatrix) {
	this.name = name;
	this.weight = weight;
	this.dayMatrix = dayMatrix;
}

function getConfig() {
	var config = new Config();

	config = withChoresConfig(config);
	config = withAppConfig(config);

	return config;
}

function withChoresConfig(config) {
	var choresConfigSheet = _getRawDataForSheet(CHORES_SHEET);
	config.CHORES = []

	for(var i = 1; i < choresConfigSheet.length; i++) {
		var currentChoreRaw = choresConfigSheet[i];
		var dayMatrix = currentChoreRaw.slice(2);

		var currentChore = new Chore(
			currentChoreRaw[0], 
			currentChoreRaw[1],
			dayMatrix
		);
		
		config.CHORES.push(currentChore);
	}

	return config;
}

function withAppConfig(config) {
	var appConfigSheet = _getRawDataForSheet(APP_SHEET);

	for(var i = 1; i < appConfigSheet.length; i++) {
		if(appConfigSheet[i][0].indexOf("work time") !== -1) {
			config.MAX_WORK_TIME = appConfigSheet[i][1];
			break;
		}
	}	

	return config;
}
