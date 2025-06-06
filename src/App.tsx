import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TimelineDemo from './pages/Home/index';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TimelineDemo />} />
        <Route path="/galeria" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;