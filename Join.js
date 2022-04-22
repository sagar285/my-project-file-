import React, { useState } from 'react'
import './Join.css';
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';

let user ;

const sendUser =() =>{
  user = document.getElementById('joininput').value;
  document.getElementById('joininput').value =" ";
}

const Join = () => {
const [name, setname] = useState("");



  return (
<div className='Joinpage'>
    <div className='joinContainer'>
      <img src={logo} alt ="logo"/>
        <h1>C CHAT</h1>
        <input  onChange={ (e) =>setname(e.target.value)} placeholder='Enter your name' type= "text" id='joininput'/>
     <Link  onClick={(event) =>!name? event.preventDefault():null} to ="/chat">  <button  onClick={sendUser} className='joinBtn'>Logi in</button></Link> 
    </div>
</div>
  )
}

export default Join
export {user}