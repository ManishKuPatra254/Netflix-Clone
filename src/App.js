
import './App.css';
import { Home } from './Home/Home';
import { SignIn } from './SignIn/SignIn';
import { MainHomeContents } from './MainHomeContents/MainHomeContents';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/mainhomenetflix' element={<MainHomeContents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
