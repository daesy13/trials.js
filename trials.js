// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map

phoneNumbers.set('home', '510-867-5309');
phoneNumbers.set('mobile', '415-555-1212');
phoneNumbers.set('business','415-123-4567');

// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function accountInformation(name, acctNum, businessName) {
	console.log(`Account Holder Name: ${name}`);
	console.log(`Account Holder Number: ${acctNum}`);
	console.log(`Business Name: ${businessName}`);
}

accountInformation(accountHolder, accountNumber, businessName)

// Add function to print all addresses, including a header
function showAddress(array) {
	console.log("Addresses:");
	for (let address of array) {
		console.log(address);
	}
}

showAddress(addresses)
// Add function to print phone types and numbers

function showPhoneNums(){
	console.log("Phone Numbers:")
	for (let entry of phoneNumbers){
		console.log(`${entry[0]}: ${entry[1]}`)
	}
}

showPhoneNums()
// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
// where the key is the date as a string and the value is the amount of the withdrawal/deposit.
const accountTransactions = new Map();

// Add function to add transactions
function addTransaction(date, amount){
	accountTransactions.set(date,amount);
}

// Use the function to add transactions
addTransaction('May-2', -500);
addTransaction('May-13', +1200);
addTransaction('May-15', -100);
addTransaction('May-21', -359);
addTransaction('May-29', +2200);

// console.log(accountTransactions)

// Add function to show balance status
function showBalanceStatus() {
	let total = 0;
	console.log("Balance:");
	for (let entry of accountTransactions) {
		total += entry[1];
	} console.log(`$${total}`);
	if (total < 0) {
		console.log("YOU ARE OVERDRAWN");
	} else if (20 > total && total >= 0) {
		console.log("Warning: You are close to zero balance")
	} else {
		console.log("Thank you for your business")
	}
	// (total <= 0 && total < 20)
}


showBalanceStatus()
// Add function to show transactions


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




