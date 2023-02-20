import './App.css';
import Navbar from './components/navbar';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Personnages from './pages/personnages';
import Comics from './pages/comics';
import Favoris from './pages/favoris';
import Personnage from './pages/personnage';
const router = createBrowserRouter([
  { 
    path: "/",    
    element: <Personnages />
  },
  { 
    path: "/personnages/:id",
    element: <Personnage />
  },
  { 
    path: "/comics",
    element: <Comics />
  },
  { 
    path: "/favoris",
    element: <Favoris />
  }
])

function App() {
  return (
    <div className="App">
     <Navbar />
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
