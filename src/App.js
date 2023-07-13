// import Login from "./components/Auth/login";
// import Register from "./components/Auth/Register";
// import { Routes, Route} from 'react-router-dom'
import SideBar from './components/SideBar Section/SideBar.jsx'
import Body from './components/Body Section/Body.jsx'
import './App.css'

const App = () => {
  return ( 
    <div className="container">
    {/* <Routes>
      <Route path="/register" element={<Register/>} />
      <Route path="/" element={<SideBar />} />
      <Route path="/" element={<Body />} />
    </Routes> */}

    <SideBar />
    <Body />
    </div>
   );
}
 
export default App;