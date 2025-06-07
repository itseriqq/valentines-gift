import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './pages/InfiniteGallery';
import { Navbar } from './components/Navbar';
import Playlist from './pages/Playlist';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Main />
        <div className='fixed bottom-5 left-0 right-0 flex justify-center w-full'>
          <Navbar />
        </div>
      </div>
    </Router>
  );
}

function Main() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;