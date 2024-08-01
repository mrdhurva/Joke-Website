import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  { HomePage } from './components/HomePage';
import { LoginForm } from './components/LoginAndSingup';
import Navigation from './components/Navigation';

function App() {
  return (
    < >
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginForm/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
