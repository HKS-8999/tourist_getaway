import React from 'react'; // Removed useState and useEffect as theme toggle is removed
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage.jsx';
import DomesticPackagesPage from './pages/DomesticPackagesPage';
import InternationalPackagesPage from './pages/InternationalPackagesPage';
import ContactUsPage from './pages/ContactUsPage';

// Layout component that includes the Navbar and Footer
// Styles are now set for a consistent light theme
const LayoutWithNavbar = ({ children }) => {
    return (
        // Main layout container with a light slate background
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Navbar /> {/* Navbar should also be styled for light theme internally */}
            <main className="flex-grow">
                {children}
            </main>
            {/* Footer with light background and text colors */}
            <footer className="bg-white text-slate-600 text-center p-6 mt-auto shadow-inner border-t border-slate-200">
                <div className="container mx-auto">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Tourist Getaways. All rights reserved.</p>
                    <p className="text-xs mt-1">Crafting memories, one journey at a time.</p>
                </div>
            </footer>
        </div>
    );
};

// Main App component
function App() {
    // Theme state and toggle logic have been previously removed

    return (
        <Router>
            <Routes>
                {/* All routes use LayoutWithNavbar, which enforces light theme */}
                <Route path="/" element={<LayoutWithNavbar><HomePage /></LayoutWithNavbar>} />
                <Route path="/domestic-packages" element={<LayoutWithNavbar><DomesticPackagesPage /></LayoutWithNavbar>} />
                <Route path="/international-packages" element={<LayoutWithNavbar><InternationalPackagesPage /></LayoutWithNavbar>} />
                <Route path="/contact-us" element={<LayoutWithNavbar><ContactUsPage /></LayoutWithNavbar>} />
            </Routes>
        </Router>
    );
}

export default App;
