const mysql = require("mysql");
const connection = mysql.createConnection({
  user: "TheFabSix",
  password: "1456",
  database: "savedb"
});
connection.connect(error => {
  if (error) throw error;
  connection.query("SELECT * FROM category", function(error, data, fields) {
    if (error) throw error;
    const jsonData = JSON.parse(JSON.stringify(JsSamp.js));
    console.log("jsonData", jsonData);
  });
});