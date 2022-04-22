import React, { useEffect, useState } from 'react';
import {user} from '../Join/Join';
import socketIo from "socket.io-client";
import './Test.css';
import sendlogo from "../../images/send.png";
import Message from '../Message/Message';
import ReactscrollToBottom from "react-scroll-to-bottom";
import closeIcon from "../../images/closeIcon.png";

const ENDPOINT ="http://localhost:4500/";


let socket; 


const Chat = () => {
const [id, setid]= useState(" ");
const [messages, setmessages] = useState([])

const send =()=>{
const message= document.getElementById('chatInput').value;
  socket.emit("mesaage",{message ,id});
  document.getElementById('chatInput').value= "";

}

console.log();
useEffect(() => {
  const socket = socketIo(ENDPOINT);
  socket.on('connect' ,()=>{
      alert("connected");
      setid(socket.id);
  })
socket.emit("joined",{ user})  
socket.on('welcome',(data)=>{
  setmessages([...messages ,data]);
  console.log(data.user,data.message);
})
socket.on('userJoined',(data)=>{
  setmessages([...messages ,data]);
  console.log(data.user,data.message);
})
socket.on('leave',(data) =>{
  setmessages([...messages ,data]);
  console.log(data.user , data.message); 
})

  return () => {
   socket.emit("disconnect");
   socket.off();
  }
}, [])

useEffect(() => {
  socket.on("sendMessage" ,(data) =>{
    setmessages([...messages ,data]);
console.log(data.user , data.message ,data.id);
  })

  return () => {
    socket.off();
  }
}, [messages])




  return (
    <div className='chatpage'>
      <div className='chatcontainer'>
        <div className='header'> 
        <h2>C CHAT</h2>
      <a href = "/"  ><img src={closeIcon} alt ="close"/> </a>
        </div>
        <ReactscrollToBottom className='chatBox'>
            {messages.map((item ,i) => <Message  user= {item.id === id ? '':item.user}message = {item.message} classs ={item.id === id ? 'right':'left'}/>)}
        </ReactscrollToBottom>
        <div className='InputBox'>
        <input onKeyPress={(event) =>event.key === 'Enter' ? send() : null} type="text" id ="chatInput"/>
        <button onClick ={send} className='sendBtn'><img src={sendlogo} alt ="send"/></button>
        </div>
      </div>
    </div>
  )
}

export default Chat