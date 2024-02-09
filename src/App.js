import './App.css';
import AiUComponent from './components/AiUComponent';
import HellowComponent from './components/HellowComponent';
import HomeComponent from './components/HomeComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WUComponent from './components/WUComponent';
import GoLComponent from './components/GoLComponent';
import MLibComponent from './components/MLibComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<HomeComponent/>}/>
        <Route path = 'Hellow' element = {<HellowComponent/>}/>
        <Route path = 'AiU' element = {<AiUComponent/>}/>
        <Route path = 'WU' element = {<WUComponent/>}/>
        <Route path = 'GoL' element = {<GoLComponent/>}/>
        <Route path = 'Mlib' element = {<MLibComponent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
