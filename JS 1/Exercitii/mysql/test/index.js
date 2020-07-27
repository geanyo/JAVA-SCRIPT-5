const mysql = require("mysql")

var con = mysql.createConnection({
        host: "localhost",
        user: "myuser",
        password: "1234",
        database: "gregs_list"
    });

    con.connect((err) => {
        if(err) throw err
        console.log("Connected to MySQL")
    })