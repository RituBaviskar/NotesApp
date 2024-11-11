import{createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Pastes from './components/Pastes';
import ViewPates from './components/ViewPates';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
      <div>
       <Navbar />
       <Home />
      </div>
    },
    {
      path: "/pastes",
      element:
      <div>
       <Navbar />
       <Pastes />
      </div>
    },
    {
      path: "/pastes/:id",
      element: 
      <div>
       <Navbar />
       <ViewPates />
      </div>
    }
  ]
);

function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
