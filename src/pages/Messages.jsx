import Footer from '../components/Footer';
import { useNavigate} from 'react-router-dom';

function Messages(){

  const navigateTo = useNavigate();

  const Home=()=>{
    navigateTo('/Home');
  };
  const containerStyle = {
    minHeight: '100vh', //  altura de la ventana
    backgroundColor: 'gray', // Color de fondo
    
  };

  const Notification = [
    
    {
      name: 'Leslie ',
      email: 'leslie@example.com',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    
    {
      name: 'Dries Vincent',
      email: 'dries.vincent@example.com',
      role: 'Business Relations',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: null,
    },
    {
      name: 'Lindsay Walton',
      email: 'lindsay.walton@example.com',
      role: 'Front-end Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Courtney Henry',
      email: 'courtney.henry@example.com',
      role: 'Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Tom Cook',
      email: 'tom.cook@example.com',
      role: 'Director of Product',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: null,
    },
  ]
  
  
  
  return(  
    <>
    
      <div style={containerStyle} className="flex justify-center items-center">
      <div className="border border-gray-300 p-4 rounded w-full max-w-screen-md">
                {/* 1*/}
                <div className="border-b border-gray-300 mb-4 pb-4">
                <header className="flex items-center justify-between">
                    <div className="flex items-center">
                    <button className="flex items-center text-black " onClick={Home}>
                        <img
                        src="../assets/icons/FlechaIzquierda.png"  // Ruta 
                        alt="Botón de Imagen"
                        className="w-6 h-6 mr-2 border-transparent  hover:bg-transparent  rounded focus:outline-none focus:ring focus:ring-transparent active:shadow-md active:bg-transparent transform transition-transform hover:-translate-y-1 active:-translate-y-0.5 "  // Clases para establecer el tamaño de la imagen
                        />
                        
                    </button>
                    <h1 className="text-xl  text-black font-extrabold animate-pulse">Mensajes</h1>
                    </div>
                </header>
                </div>

                {/* 2 */}
                <>
    
    <ul role="list" className="divide-y divide-gray-100">
      {Notification.map((person) => (
        <li key={person.email} className="flex justify-between py-5 gap-x-6">
          <div className="flex min-w-0 gap-x-4">
            <img className="flex-none w-12 h-12 rounded-full bg-gray-50" src={person.imageUrl} alt="" />
            <div className="flex-auto min-w-0">
              <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
              <p className="mt-1 text-xs leading-5 text-gray-500 truncate">{person.email}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{person.role}</p>
            {person.lastSeen ? (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none p-1 rounded-full bg-emerald-500/20">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">Online</p>
              </div>
            )} 
          </div>
          
        </li>
        
      ))}
      
      
    </ul>
    
    </>
    

        
      </div>
    </div>
    <Footer />
    </>
    
  )
}

export default Messages;