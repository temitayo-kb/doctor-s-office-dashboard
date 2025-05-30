const { Pool } = require("pg");
require("dotenv").config();

let db;

const initDB = async () => {
  if (!db) {
    const { initDB: dbInit } = require("../config/db");
    db = await dbInit();
  }
  return db;
};

const createTablesOrCollections = async () => {
  const dbType = process.env.DB_TYPE;

  if (dbType === "postgres") {
    const client = await db.connect();
    try {
      await client.query(`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          email VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL,
          role VARCHAR(50) NOT NULL CHECK (role IN ('Admin', 'FrontDesk', 'Doctor')) -- Includes new Doctor role
        )
      `);
      console.log("Users table checked/created");
    } catch (err) {
      console.log("Error creating users table or table already exists:", err);
    } finally {
      client.release();
    }
  }
};

module.exports = { initDB, createTablesOrCollections };
