import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/Protected-Route';
import Home from './components/Home';
import Login from './components/Login';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/login' element={<Login/>}/>
        <Route
          path='/home'
          element={
            <ProtectedRoute isLoggedIn={true}>
              <Home/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
