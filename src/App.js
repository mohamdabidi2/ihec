import Login from "./components/Auth/login";
import Register from "./components/Auth/Register";
import { Routes, Route} from 'react-router-dom'
// import Body from './components/Body Section/Body.jsx'
// import Dashboard from './components/Dashboard/Dashboard.jsx';
import './App.css'
import ProfileCard from '../src/components/Profile/ProfileCard.jsx';
import Information from '../src/components/Profile/Information.jsx'
import Online from "./components/Online/Online";
import Layout from "./components/Layout/Layout";
import Vide from "./components/Vide.jsx";
import CourLayout from "./components/CoursLayout/CourLayout";
import Gestion from "./components/Cours/Gestion/Gestion.jsx";
import Offer from "./components/Pages/Offer/Offer.jsx";
import ChapGest from "./components/Cours/chapitre/chapGest.jsx";
import Livre from "./components/Pages/Offer/Livre/Livre";
import Math from "./components/Cours/Math/Math.jsx";
import Economie from "./components/Cours/Economie/Economie";

const App = () => {
  return ( 
<>

<Routes>
  <Route path="login" element={<Login />} />
  <Route path="/" element={<Layout />}>
  <Route  index element={<Vide />} />
  
  <Route path="Online" element={<Online />} />
  <Route path="livre" element={<Livre />} />
  <Route path="Offer" element={<Offer />} />
  <Route path="ProfileCard" element={<ProfileCard />} />
  <Route path="ProfileCard/Information" element={<Information />} />

  <Route path="chapGest" element={<CourLayout />}>
    <Route index element={<ChapGest />} />
    <Route path="chapGest/matiere" element={<Gestion />} />
    <Route path="math" element={<Math />} />
    <Route path="economie" element={<Economie />} />
  </Route>
  </Route>
  
</Routes>

</>
   );
}
 
export default App;