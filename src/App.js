// import Login from "./components/Auth/login";
import Register from "./components/Auth/Register";
import { Routes, Route} from 'react-router-dom'
// import Body from './components/Body Section/Body.jsx'
// import Dashboard from './components/Dashboard/Dashboard.jsx';
import './App.css'
import ProfileCard from '../src/components/Profile/ProfileCard.jsx';
import Information from '../src/components/Profile/Information.jsx'
import Online from "./components/Online/Online";
import Layout from "./components/Layout";
// import Ui from "./components/Ui";
import Vide from "./components/Vide.jsx";

const App = () => {
  return ( 
<>

<Routes>
  <Route element={<Layout />}>
  <Route path="/" element={<Vide />} />
  <Route path="/register" element={<Register />} />
  <Route path="/Online" element={<Online />} />
  <Route path="/ProfileCard" element={<ProfileCard />} />
  <Route path="/ProfileCard/Information" element={<Information />} />
  
  </Route>
</Routes>

</>
   );
}
 
export default App;