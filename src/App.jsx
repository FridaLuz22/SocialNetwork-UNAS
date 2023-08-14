import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  
  return (
    <> 
      <Header/>

      {Footer}
      <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', textAlign: 'center' }}>
        <Footer />
      </div>
     
   



      
    </>
  )

  
}

export default App
