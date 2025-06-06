import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlowingMenuDemo from './pages/Home/index';
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
        <Route path="/" element={<FlowingMenuDemo />} />
        <Route path="/galeria" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;