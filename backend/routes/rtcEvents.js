const { goOnline, disconnect, forwardPayload } = req;

module.exports = function (io, socket) {
  socket.on("offer", forwardPayload("offer", io));
  socket.on("answer", forwardPayload("answer", io));
  socket.on("ice-candidate", forwardPayload("ice-candidate", io));
};
