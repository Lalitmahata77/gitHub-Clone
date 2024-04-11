import {Routes, Route} from "react-router-dom"
import './App.css'
import Sidebar from './components/Sidebar'
import Login from "./pages/Login"
import  Home  from "./pages/Home"
import Signup from "./pages/Signup"
import Explore from "./pages/Explore"
import Like from "./pages/Like"

function App() {
  

  return (
    <div className=' flex text-white'>
     <Sidebar/>
     <div className=" max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1">
      <Routes>
        <Route path="/" element = {< Home/>} />
        <Route path="/login" element= {<Login/>}/>
        <Route path="/signup" element = {<Signup/>} />
        <Route path="/explore" element = {<Explore/>} />
        <Route path="/like" element = {<Like/>} />

      </Routes>

     </div>
    </div>
  )
}

export default App
