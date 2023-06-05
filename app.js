const express = require("express");
const app = express();
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

const dbpath = path.join(__dirname, "cricketTeam.db");

const initializeDBAndServer = () => {
  try {
    open({
      filename: dbpath,
      driver: sqlite3.db,
    });
    app.listen(3000, () => {
      console.log("sever is running");
    });
  } catch (e) {
    console.log(e.message);
  }
};

initializeDBAndServer();
