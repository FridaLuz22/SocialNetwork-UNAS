import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import CreatePost from './pages/CreatePost';
import Videos from './pages/Videos';
import Publicar from './pages/Publicar';
import Map from './pages/Map';
import Notification from './pages/Notification';
import Messages from './pages/Messages';

import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import NotFound from './NotFound';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home/>}/>
        <Route path="/CreatePost" element={<CreatePost />} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/Videos" element={<Videos/>} />
        <Route path="/Map" element={<Map/>} />
        <Route path="/Publicar" element={<Publicar/>} />
        <Route path="/Notification" element={<Notification/>} />
        <Route path="/Messages" element={<Messages/>} />
        <Route />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
