const { userToWorker, logger } = require("../services/globals");
class ChatWorker {
  constructor(socket, userId) {
    this.userId = userId;
    this.socket = socket;
  }

  sendMessage(message) {
    this.socket.emit(process.env.SEND_MSG_TOPIC, message);
  }

  receiveMessage(message, to) {
    // TODO: add message to Kafka instead of sending
    let cw = userToWorker.get(to);
    if (cw) cw.sendMessage(message);
    else {
      logger.error(`User ${to} not connected`);
    }
  }
}

module.exports = { ChatWorker };
