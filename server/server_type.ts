import * as express from "express";
import { Application } from "express";
import * as fs from "fs";
import * as https from "https";

const app: Application = express();
//const commandLineArgs = require('command-Line-args');
const optionDefinitions = [
    { name: 'secure', type: Boolean, defaultOption: true }
];

//const options = commandLineArgs(optionDefinitions);

const httpServer = app.listen(8080, () => {
    console.log("We are listening on port  9000 ");
})          