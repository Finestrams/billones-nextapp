// ==========================================================
// Database Configuration for billones_nextapp
// ==========================================================
//
// This file provides an example setup for connecting to the
// "billones_nextapp" MySQL/MariaDB database.
//
// NOTE: This is a reference/example file. To use it:
//   1. Install a database driver: npm install mysql2
//   2. Create a .env.local file with your credentials
//   3. Import and use the pool in your API routes
//
// ==========================================================

// Example .env.local contents:
// DB_HOST=localhost
// DB_USER=root
// DB_PASSWORD=your_password
// DB_NAME=billones_nextapp
// DB_PORT=3306

// Example database connection setup (uncomment to use):
//
// import mysql from "mysql2/promise";
//
// const pool = mysql.createPool({
//   host: process.env.DB_HOST || "localhost",
//   user: process.env.DB_USER || "root",
//   password: process.env.DB_PASSWORD || "",
//   database: "billones_nextapp",
//   port: parseInt(process.env.DB_PORT || "3306"),
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });
//
// export async function query(sql: string, params?: any[]) {
//   const [results] = await pool.execute(sql, params);
//   return results;
// }
//
// export default pool;

// Example users table creation SQL:
//
// CREATE TABLE IF NOT EXISTS users (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(100) NOT NULL,
//   email VARCHAR(100) NOT NULL UNIQUE,
//   password VARCHAR(255) NOT NULL,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

export const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  database: "billones_nextapp",
  port: 3306,
};