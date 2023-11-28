import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Home = ({socket}) => {
  const navigate = useNavigate()
  const [room, setRoom] = useState('');

  const Show_Chat = () => {
    if(room.trim().length === 0) return ;
    socket.emit('join room', room);
    navigate(`/chat/${room}`)
  }

  return (
    <div>
      <div>Home</div>
      <input placeholder='Enter room name to enter' value={room} onChange={(e)=>setRoom(e.target.value)} />
      <button onClick={Show_Chat}>Join Room </button>
    </div>
  )
}

export default Home