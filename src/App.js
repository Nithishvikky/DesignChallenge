import Checker from './components/Checker';
import Home from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Checker' element={<Checker/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
