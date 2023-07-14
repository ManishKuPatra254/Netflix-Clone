
import './App.css';
import { Home } from './Home/Home';
import { SignIn } from './SignIn/SignIn';
import { InnerHome } from './InnerHome/InnerHome';
import { Movies } from './MoviesN/MainMoviesN';
import { TvShows } from './TvShows/TvShowsN';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/mainhomenetflix' element={<InnerHome />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/tvshows' element={<TvShows />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
