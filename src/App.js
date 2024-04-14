import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Searchmedicine from './components/Searchmedicine';
import Deletemedicine from './components/Deletemedicine';
import Addmedicine from './components/Addmedicine';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Addmedicine/>}/>
        <Route path='/search' element={<Searchmedicine/>}/>
        <Route path='delete' element={<Deletemedicine/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
