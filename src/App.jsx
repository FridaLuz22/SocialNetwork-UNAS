import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
