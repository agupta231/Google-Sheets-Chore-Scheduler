function Config(maxWorkTime, chores, nextRow) {
	this.MAX_WORK_TIME = maxWorkTime;
	this.CHORES = chores;
	this.NEXT_ROW = nextRow;
	this.ROWS_TO_PROCESS = 0;
}

function Chore(name, weight, dayMatrix, heap) {
	this.name = name;
	this.weight = weight;
	this.dayMatrix = dayMatrix;
	this.heap = heap;
}

function getConfig() {
	var config = new Config();

	config = withChoresConfig(config);
	config = withAppConfig(config);

	CONFIG = config;
}

function _generate_heap(row, col) {
	var indexes_arr = [];
	var heap = [];

	for(var i = 0; i < USERS.length; i++) {
		indexes_arr.push(i);
	}

	for(var i = 0; i < USERS.length; i++) {
		var userIndex = Math.floor(Math.random() * indexes_arr.length);

		heap.push([USERS[indexes_arr[userIndex]].id, 0]);
		indexes_arr.splice(userIndex, 1);
	}

	_getCell(CHORES_SHEET, row, col).setValue(JSON.stringify(heap));
	return heap;
}

function withChoresConfig(config) {
	var choresConfigSheet = _getRawDataForSheet(CHORES_SHEET);
	config.CHORES = []

	for(var i = 1; i < choresConfigSheet.length; i++) {
		var currentChoreRaw = choresConfigSheet[i];
		var heapRaw = currentChoreRaw.slice(9);

		if(_getCell(CHORES_SHEET, i, 10).isBlank() || heapRaw[0] === "") {
			var heap = _generate_heap(i + 1, 10);
		}
		else {
			var heap = heapRaw[0];
		}

		var currentChore = new Chore(
			currentChoreRaw[0],
			currentChoreRaw[1],
			currentChoreRaw.slice(2, 9),
			heap
		);

		config.CHORES.push(currentChore);
	}

	return config;
}

function withAppConfig(config) {
	var appConfigSheet = _getRawDataForSheet(APP_SHEET);

	for(var i = 1; i < appConfigSheet.length; i++) {
		if(appConfigSheet[i][0].indexOf(WORKTIME_KEYWORD) !== -1) {
			config.MAX_WORK_TIME = appConfigSheet[i][1];
			continue;
		}
		if(appConfigSheet[i][0].indexOf(NEXT_ROW_KEYWORD) !== -1) {
			config.NEXT_ROW = appConfigSheet[i][1];
			continue;
		}
	}

	return config;
}
