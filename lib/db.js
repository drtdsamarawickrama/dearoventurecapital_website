import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "", // your MySQL / phpMyAdmin password
  database: "dearo_investors",
});