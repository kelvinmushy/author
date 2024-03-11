import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "story"
  });
    console.log("Connected!");



export default con;