import React, { useEffect, useState } from 'react';
import {
    useParams
} from "react-router-dom";


const Chat = ({socket}) => {
    const [chat, setChat] = useState('');

    const Show_Chat = () => {
        if(chat.trim().length === 0) return ;
        console.log(id);
        console.log(chat);
        socket.emit('chat message', {id, chat});
    }

    const [messages, setMessages] = useState([]);
    const {id} = useParams();

    console.log(id);
    socket.on('chat message', (data) => {
        console.log("i am here");
        setMessages([...messages, data])
        console.log(messages);
    } );

    useEffect(() => {
        console.log(messages);
      }, [messages]);

    return (
        <div>
        <div>chat {id}</div>
        <input placeholder='Enter message' value={chat} onChange={(e)=>setChat(e.target.value)} />
        <button onClick={Show_Chat}>send Message</button>
        </div>
    );
}

export default Chat