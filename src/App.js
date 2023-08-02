import './App.css';
import { Route, Routes } from 'react-router';
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
    <div><Toaster
      position="top-center"
      reverseOrder={false}
    /></div>
    <Routes>
      <Route path= "*" element={<Signup/>}/>
      <Route exact path='/' element={<Signup/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path="/register" element={<Signup/>}/>
      <Route exact path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </>
  );
}

export default App;
