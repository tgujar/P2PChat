let { usercounter, userToWorker } = require("../services/globals");
const { ChatWorker } = require("../services/ChatWorker");

module.exports = function (socket) {
  let worker = new ChatWorker(socket, usercounter);
  socket.on(process.env.SEND_MSG_TOPIC, (data) => {
    worker.receiveMessage(data.message, data.receiverId);
  });
  userToWorker.set(usercounter, worker);
  usercounter++; // TODO: remove temporary user id, user auth for user Id
};

// TODO: use typescript types
