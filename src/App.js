import { io } from "socket.io-client";
import { useEffect } from "react";
import "./App.css";
const socket = io(`http://localhost:8080/compile`, {
  autoConnect: false,
});

function App() {
  useEffect(() => {
    socket.open();
  });
  const sendCompile = () => {
    socket.emit("blockEditor", {
      code: "void setup(){} void loop(){}",
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            sendCompile();
          }}
        >
          컴파일 서버로 전송
        </button>
      </header>
    </div>
  );
}

export default App;
