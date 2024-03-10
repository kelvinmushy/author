import mysql from "mysql";

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "story"
  });
    console.log("Connected!");



export default con;