// File: src/App.tsx
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SocialLinks from './components/SocialLinks';

const App = () => {
  const location = useLocation();

  // List all paths that should show Navbar/Footer
  const showLayout = location.pathname === '/';

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500 min-h-screen flex flex-col">
      {showLayout && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {showLayout && (
        <footer className="text-center py-6 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
          <SocialLinks />
          <p className="mt-2">&copy; {new Date().getFullYear()} Deepak Das. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
};

export default App;
