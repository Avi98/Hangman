import Socket, { Socket as SocketType } from "socket.io-client";
import { getSocketBaseUrl } from "../utils";

type MessageType = "new-user" | "message" | "new-word" | "key-pressed";

class RealTimeConnection {
  private socket?: SocketType;
  private clientId?: string;

  private isConnected = false;

  private static connect(): SocketType {
    const socketUrl = getSocketBaseUrl();
    const socket: SocketType = Socket(socketUrl, { path: "/realtime" });
    console.log("Connection established");
    return socket;
  }

  private noConnectionFound(socket?: SocketType): asserts socket is SocketType {
    if (!this.socket) throw new Error("Connection not found");
  }

  private asyncConnection = (): Promise<{
    socket: SocketType;
    clientId: string;
    isConnected: boolean;
  }> => {
    return new Promise((res, rej) => {
      const io = RealTimeConnection.connect();

      setTimeout(() => {
        io.on("connect", () => {
          res({
            socket: io,
            clientId: io.id || "",
            isConnected: true,
          });
        });

        io.on("error", (e) => {
          // @TODO: add retry logic here
          rej({
            isConnected: false,
            errorMessage: e,
          });
        });
      }, 0);
    });
  };

  async establishConnection() {
    return await this.asyncConnection()
      .then(({ socket, clientId, isConnected }) => {
        this.socket = socket;
        this.clientId = clientId;
        this.isConnected = isConnected;
      })
      .catch((e) => {
        console.error({ ERROR_CONNECTION: e });
      });
  }

  private retryOnError() {
    // @TODO: add retry logic here
  }

  disconnect() {
    this.noConnectionFound(this.socket);

    this.isConnected = false;
    this.socket.close();
  }

  sendMessage<Message = {}>(type: MessageType, message: Message) {
    this.noConnectionFound(this.socket);

    this.socket.emit(type, message);
  }

  getConnectionId() {
    if (!this.clientId) return null;

    return this.clientId;
  }

  getIsConnected() {
    return this.isConnected;
  }
}

export default RealTimeConnection;
