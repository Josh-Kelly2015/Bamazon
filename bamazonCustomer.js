//require mysql, inquirer
var mysql = require("mysql");
var inquirer = require("inquirer");
//divider
var divider = "\n--------------------------------------------\n"
//create connection in a  variable
var connection = mysql.createConnection({
    // host 
    host: "localhost",
    // port
    port: 3306,
    // username
    user: "root",
    // password
    password: "Password!",
    database: "bamazon_db"
});
//connect to sql DB using connection.connect method
connection.connect(err => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    askBamazon();
});
//connect to my DB and select all my items from products table
function askBamazon() {
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) throw err;
        console.log(divider);
        //loop through and log products table in terminal
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        };
        console.log(divider);

    });
    runShoppingList();
};

function runShoppingList() {
    // query database for all items being sold
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) throw err;
        // prompt questions
        inquirer
            .prompt([
                {
                    name: "shoppingList",
                    type: "rawlist",
                    choices: () => {
                        var itemArray = [];
                        for (var i = 0; i < res.length; i++) {
                            itemArray.push(res[i].item_id);
                        }
                        return itemArray;
                    },
                    message: "What is the item ID of which you desire?"
                },
                {
                    name: "quantity",
                    type: "input",
                    message: "How many units of this would you like to buy?",
                    validate: value => {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;
                    }
                }
            ])
            .then(answer => {
                console.log(answer);
                //logs undefined ??????
                console.log(res.stock_quantity);

                // taking the answer and subtracting from original stock_quantity
                var newQuantity =
                    parseInt(res.stock_quantity) - parseInt(answer.quantity);
                console.log("Updating Bamazon Stock \n.\n.\n.\n");
                //updating database to dispaly new quantity
                var query = connection.query("UPDATE products SET ? WHERE ?",
                    [
                        {
                            quantity: newQuantity
                        },
                        {
                            item_id: answer.item_id
                        }
                    ],
                    //declare row updated
                    (err, res) => {
                        console.log(res.affectedRows + " products updated!");
                        if (err) throw err;
                        runTotalCost();
                    }
                );
                console.log(query.sql);
            });
    });
};
