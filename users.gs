function User(id, name, credit) {
	this.id = id;
	this.name = name;
	this.credit = credit;
}

function getUsers() {
	var userSheet = _getRawDataForSheet(USER_SHEET);

	var users = [];
	for(var i = 1; i < userSheet.length; i++) {
		var currentUser = new User( 
			userSheet[i][0],
			userSheet[i][1],
			userSheet[i][2]
		); 
		users.push(currentUser);	
	}

	USERS = users;
}
