var arr=process.argv.slice(2)
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('newtest');
function addContacts(fullName,number){
  db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS contacts (name TEXT, phoneNumber INT UNIQUE)");
 
  var stmt = db.prepare("INSERT INTO contacts VALUES (?,?)");
  stmt.run(fullName,number);
  stmt.finalize();
  console.log('number added succesfully');
  db.each("SELECT rowid AS id,name,phoneNumber FROM contacts", function(err, row) {
      console.log('id: '+row.id+'  NAME: '+row.name + '  Phonenumber: '+ row.phoneNumber);
  });
  
});

db.close();
}
function CheckDuplicate(number){
	number=Number(number)
	console.log(number)
	db.each(`SELECT phoneNumber FROM contacts WHERE phoneNumber=${number}`,function (err, row){
		if (row!==undefined){
			return true
		}
		else{return false}
	})
}

var checkValidName=(/^[a-zA-Z0-9]+$/)
var firstname=arr[1]
var lastname=arr[2]
var fullName
var checkValidNum=(/^[0-9]+$/)
var number=arr[4]
if (arr.indexOf('-n')==-1){
	console.log('missing -n argument')
	process.exit();
}
else if(arr.indexOf('-n')!==0){
	console.log('-n argument placed in wrong position')
	process.exit();
}
else{
	if (checkValidName.test(firstname) && checkValidName.test(lastname)) {
     fullName=firstname + '_' + lastname
	}
	else{
		console.log('invalid character present in name')
	}
}
if (arr.indexOf('-p')===-1){
	console.log('please include -p tag')
	process.exit();
}
else if (arr.indexOf('-p')!==3){
	console.log('-p argument placed in wrong postition')
	process.exit()
}
else{
	if (checkValidNum.test(number)) {
    if (number.length !== 11) {
    console.log('number is invalid')
	process.exit()
  } else {
    //if (CheckDuplicate(number)) {
        addContacts(fullName, number)
   // } else {
     // console.log('number already exist')
     // process.exit()
    }
 
} else {
  console.log('number contaion invalid characters')
  process.exit()
}
}


//node add -n gbenga joloko -p 09090897867