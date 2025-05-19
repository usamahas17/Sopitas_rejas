import dotenv from "dotenv";
import Server from "./index";

dotenv.config();
const server = new Server();
server.listen()