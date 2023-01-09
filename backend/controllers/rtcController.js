const online = new Set();
const sessionToUserId = new Map();

function goOnline(socket, payload) {
  // TODO: check if user exists
  console.log(`USER ${payload.userId} CONNECTED`);
  online.add(payload.from);
  sessionToUserId.set(socket.id, payload.from);
}

function disconnect(socket) {
  // TODO: get userId from sessionId, and update user's status to offline
  console.log(`Client ${sessionId} disconnected`);
  online.delete(sessionToUserId.get(socket.id));
  sessionToUserId.delete(socket.id);
}

function forwardPayload(channel, io, payload) {
  io.to(payload.to).emit(channel, payload);
}

module.exports = {
  connect,
  disconnect,
  forwardPayload,
};
