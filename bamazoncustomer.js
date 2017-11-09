
//Start the app
console.log(" ");
console.log("-------------------------------********************-------------------------------");
console.log("-----                           Welcome to BAMAZON!                          -----");
console.log("-------------------------------____________________-------------------------------");


var mysql = require('mysql');
var prompt = require("prompt");
var delayed = require("delayed");
var inquirer = require("inquirer");



var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Test101!',
  database : 'bamazon'
});


var products = [];
var itemID = 0;
var itemquant = 0;
var questionsOFF =0;
var itemselected = [];
var prod_quant = 0;


var questions = [{
  name: 'itemIDask',
  message: 'What is the product ID you want to order?'
}, {
  name:'itemquant',
  message: "What quantity do you want to order?",
}]


//Run the store

displayitems();

//delayed.delay(function () { itemtobuy() }, 1000);
//delayed.delay(function () { getquantity() }, 1000);

delayed.delay(function () { 

inquirer.prompt(questions).then(function(answers){
 console.log("YOUR ANSWERS:" + answers.itemIDask + ' and ' + answers.itemquant); //an object containing the user response.
 itemID = answers.itemIDask;
 itemquant = answers.itemquant;
 questionsOFF = 1;
 console.log("GET OFF: " + questionsOFF);
 checksql();

});

}, 2000);

checksql();



if (questionsOFF === 1) {
	console.log("YOUR ANSWERS GLOBAL:" + itemID + ' and ' + itemquant); //an object containing the user response.
}




//FUNCTIONS ___________________________________________

function displayitems () {
	console.log(" ");
	console.log("Welcome to the store.")
	get_products();

	// DELAY TO ENSURE TABLE SHOWS BEFORE PROMPT: print "beep" to the console after 1/2 a second 
//delayed.delay(function () { console.log('beep') }, 1000)

//Close the displayitems function
}



//Test SQL function
function testsql() {
	connection.connect();
	connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
	  if (error) throw error;
	  console.log('The solution is: ', results[0].solution);
	});
	connection.end();
}

//Get products from MYSQL db
function get_products() {
	connection.connect();
 
	connection.query('SELECT * FROM products', function (error, results, fields) {
	  if (error) throw error;

	  products = results;
	  prod_count = results.length;
	  
	  console.log("Products available for sale today: " + prod_count);
	  console.log(" ");
	  console.log("----------------------------------------------------------------------------------")
	  console.log("| ID   | Product Name                | Department              | Price           |")
	  console.log("----------------------------------------------------------------------------------")
	  console.log("----------------------------------------------------------------------------------")

	  for (i = 0; i < prod_count; i++) {
	  console.log("| " + products[i].item_id + "     | " + products[i].product_name + "     | " + products[i].department_name + "     | " + products[i].price);
	  console.log("----------------------------------------------------------------------------------");
	  }

	});


	
}




function itemtobuy() {

console.log("Please tell me what Product ID you want to buy: ");
prompt.get(['ID'], function (err, result) {
  // Log the results. 
  console.log(' --> You chose: ' + result.ID);
  var itemID = result.ID
  //console.log("Item ID is: " + itemID);
  if (itemID != 0) {
	getquantity()
}


//Closing the prompt
 });

//Closing the function
}

function getquantity() {

console.log("Please tell me what quantity you need: ");
prompt.get(['quant'], function (err, result) {
  // Log the results. 
  console.log(' --> You chose: ' + result.quant);


  var itemquant = result.quant
  console.log("Item ID is: " + itemID);


//Closing the prompt
 });

//Closing the function
}


function checksql() {
	 
	connection.query('SELECT * FROM products WHERE item_ID=' + itemID, function (error, results, fields) {
	  if (error) throw error;

	  itemselected = results;
	  prod_quant = results.stock_quantity;
	  console.log("SQL RESULTS: " + itemselected + " AND RESULTS QUANT: " + prod_quant);
	  

	});


	connection.end();
}