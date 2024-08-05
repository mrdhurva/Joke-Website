import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  { HomePage } from './components/HomePage';
import { LoginForm } from './components/LoginAndSingup';
import Navigation from './components/Navigation';
import { DadJoke, HindiJoke, HumorJoke, HumorMemeGenerator, MemeGenerator, NinjaJoke, ProgrammingJoke, ProgrammingMemeGenerator, RandomJoke } from './components/Jokes';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    < >
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/randomjoke' element={<RandomJoke/>} />
          <Route path='/dadjoke' element={<DadJoke/>} />
          <Route path='/programmingjoke' element={<ProgrammingJoke/>} />
          <Route path='/humorjoke' element={<HumorJoke/>} />
          <Route path='/ninjajoke' element={<NinjaJoke/>} />
          <Route path='/hindijoke' element={<HindiJoke/>} />
          <Route path='/memegenerator' element={<MemeGenerator/>} />
          <Route path='/programmingmemegenerator' element={<ProgrammingMemeGenerator/>} />
          <Route path='/humormemegenerator' element={<HumorMemeGenerator/>} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
