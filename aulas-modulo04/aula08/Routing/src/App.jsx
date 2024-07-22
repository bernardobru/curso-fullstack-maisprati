import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Navigation from './components/Navigation';
function App() {
  return (
   <>
    <Router>
      <Navigation/>
      <Routes>
        {/* <Route path='/' Component={Home}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/about' Component={About}/> */}
        <Route path='/' Component={Home}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/about' element={<Navigate to={'/'} />}/>
      </Routes>
    </Router>
   </> 
  )
}
export default App;