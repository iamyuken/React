
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Project from './pages/Project'
const App = () =>{
    return(
        <>
           <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/projects' element={<Project/>}/>
              </Routes>
           </BrowserRouter>
        </>
    );
}

export default App;