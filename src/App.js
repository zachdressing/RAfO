import './App.css';
import HellowComponent from './components/HellowComponent';
import HomeComponent from './components/HomeComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<HomeComponent/>}/>
        <Route path = 'Hellow' element = {<HellowComponent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
