
//Start the app
console.log(" ");
console.log("-------------------------------********************-------------------------------");
console.log("-----                           Welcome to BAMAZON!                          -----");
console.log("-------------------------------____________________-------------------------------");


var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Test101!',
  database : 'bamazon'
});

var products = [];



//Start the store

displayitems();




//FUNCTIONS ___________________________________________

function displayitems () {
	console.log(" ");
	console.log("Welcome to the store.")
	get_products();

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


	connection.end();
}

