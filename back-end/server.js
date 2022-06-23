import { Server } from "socket.io";

const io = new Server(5000, {
  cors: {
    origin: "http://127.0.0.1:5500",
  },
});

io.on("connection", (socket) => {
  socket.on("newMessage", (message, id) => {
    io.emit("message", message, id);
  });
});
