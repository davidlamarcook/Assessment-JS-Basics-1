const readline = require('readline');
const { CLIENT_RENEG_LIMIT } = require('tls');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Hello, Please enter your password: ", function(input){
	password = input.split(' ');
	
	password = input;
	

	console.log("Password:", password)


	password.length >= 10 ? console.log('Successful password.') : console.log('Password incorrect, please try again.')       
    


	// This line closes the connection to the command line interface.
reader.close()
})