const winston = require("winston");
const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});
const userToWorker = new Map();
let usercounter = 1;

module.exports = { userToWorker, usercounter, logger };
