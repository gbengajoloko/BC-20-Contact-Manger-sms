var Table = require('easy-table')
var chalk = require('chalk');
var data = [
  { id: 'When using for the first time', desc: 'npm install'},
  { id: 'To add contact', desc: 'node add -n <name> -p <phone number>'},
  { id: 'To view contact ', desc: 'node view'},
  { id: 'To Delete contact ', desc: 'node delete <name>'},
  { id: 'To search for contact', desc: 'node search <name>'},
  { id: 'To send SMS to contact', desc: 'node text <name> -m \'message to be sent\''},
  { id: 'To view help', desc: 'node help'}
]
 
var t = new Table
 
data.forEach(function(product) {
  t.cell('Functions', product.id)
  t.cell('Instruction', product.desc)
  t.newRow()
})
 
console.log(chalk.red.bold(t.toString()))