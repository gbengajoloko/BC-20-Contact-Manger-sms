var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('newdb');
var inquirer = require('inquirer');
/*db.serialize(function() {
db.run("CREATE TABLE IF NOT EXISTS contacts (name TEXT, phoneNumber INT UNIQUE)");
db.each("SELECT rowid AS id,name,phoneNumber FROM contacts", function(err, row) {
console.log('id: '+row.id+'  NAME: '+row.name + '  Phonenumber: '+ row.phoneNumber);
});
  
});*/
function search(value){
	var newarr=[];
 db.serialize(function() {
  var smt=db.prepare("SELECT name , phoneNumber FROM contacts WHERE name LIKE ?");

	 smt.each(`%${value}%`, function(err,row) {
	 	if (err){ console.log('name not found')}
	 	if (row) {
	 		newarr.push(row)
	 	}
	 });
  	 setTimeout(() => {
  	 	if (newarr.length==0){console.log('name does not exists in contact list')}
  	 	else if(newarr.length==1){console.log(`the phonenumber is: ${newarr[0]['phoneNumber']}`)}
  	 	else{ console.log(`you have more than one person named ${value} `)
  	 		for (i=0;i<newarr.length;i++) {
  	 			console.log(`${i+1}: ${newarr[i]['name']}`)
  	 		  }
  	 		inquirer.prompt([
  	 		{
              type: 'input',
              name: 'number',
              message: 'Which person are you searching for?',
              validate: function (value){
              	if (value>0 && value<=newarr.length){
              		return true
              	}
              	else{
              		return 'please enter valid value'
              	}
              }
              

              }]).then(function (answers) {
              console.log(newarr)
              console.log(newarr[answers['number']-1]['phoneNumber']);
              });
  	 		  
  	 	}

  	 	}, 20);
});
}
var arr=process.argv.slice(2)
if (arr.length>2){
	console.log('too many search parameters entereed')
	process.exit()
} else if (!arr.length) {
  console.log('no delete parameter entered')
  process.exit()
} else if ( arr[0] && arr[1] ) {
  var val = arr.join(' ')
  search(val)
} else if (arr[0]!==undefined){
	search(arr[0])
}
