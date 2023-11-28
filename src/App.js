import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Chat from './screens/chat';
import Home from './screens/home';
import { io } from 'socket.io-client';



const App = () => {
  const socket = io(`http://localhost:3001`);

  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home socket={socket}  />} />
            <Route exact path='/chat/:id' element={<Chat socket={socket} />} />
        </Routes>
    </BrowserRouter>

  )
}

export default App