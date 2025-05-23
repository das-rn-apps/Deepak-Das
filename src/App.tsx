// File: src/App.tsx
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Footer from './components/common/Footer';

const App = () => {
  const location = useLocation();

  // Show Navbar/Footer only on Home
  const showLayout = location.pathname === '/';

  return (
    <div className="bg-gray-900 text-white transition-colors duration-500 min-h-screen flex flex-col">
      {showLayout && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {showLayout && <Footer />}
    </div>
  );
};

export default App;
