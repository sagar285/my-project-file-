
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Join from './Component/Join/Join';
// import Chat from './Component/Chat/Chat';
import Test from "./Component/test/Test"
import Chat from './Component/Chat/Chat';

function App() {

  return(
  <>
 
 <Routes>
   <Route path="/" element = {<Join/>} />
   <Route path="/chat" element = {<Chat/>} />
 </Routes>


  </>
  );
}

export default App;
