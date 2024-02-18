import { name } from "./module";
import "./style.css";

import isEmail from "validator/es/lib/isEmail";
import isURL from "validator/es/lib/isURL";
let socket = new WebSocket(
  '"wss://javascript.info/article/websocket/demo/hello"'
);
socket.onopen = function (e) {
  console.log("connect");
  socket.send("hey");
};
socket.onmessage = function (e) {
  console.log(e.data);
};
socket.onclose = function (event) {
  if (event.wasClear) {
    console.log("stopped ", event.code);
  } else {
    console.log("disconnect");
  }
};
socket.onerror = function (err) {
  console.log(err);
};
