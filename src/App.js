import './App.css';
import AiUComponent from './components/AiUComponent';
import HellowComponent from './components/HellowComponent';
import HomeComponent from './components/HomeComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WUComponent from './components/WUComponent';
import GoLComponent from './components/GoLComponent';
import MLibComponent from './components/MLibComponent';
import OoEComponent from './components/OoEComponent';
import RiAComponent from './components/RiAComponent';
import RiNComponent from './components/RiNComponent';
import M8BComponent from './components/M8BComponent';
import ResPComponent from './components/ResPComponenT';

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
        <Route path = 'OoE' element = {<OoEComponent/>}/>
        <Route path = 'RiA' element = {<RiAComponent/>}/>
        <Route path = 'RiN' element = {<RiNComponent/>}/>
        <Route path = 'M8B' element = {<M8BComponent/>}/>
        <Route path = 'ResP' element = {<ResPComponent/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
