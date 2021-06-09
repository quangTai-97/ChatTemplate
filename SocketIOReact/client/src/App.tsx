import React,{useEffect, useRef} from 'react';
import * as io from 'socket.io-client';



function App() {
  const socketClient = useRef<SocketIOClient.Socket>()

  useEffect(() => {
      socketClient.current = io.connect("http://localhost:5000");
  if(socketClient.current){
    
  }
  
    },[])

  
  return (
    <div className="App">

    </div>
  );
}

export default App;
