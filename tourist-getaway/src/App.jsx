import React from 'react'; // Removed useState and useEffect as theme toggle is removed
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage.jsx';
import DomesticPackagesPage from './pages/DomesticPackagesPage';
import InternationalPackagesPage from './pages/InternationalPackagesPage';
import PackageList from './components/dashboard/PackageList';
import PackageDetailsPage from './pages/PackageDetailsPage';
import ContactUsPage from './pages/ContactUsPage'; // Import the new ContactUsPage

// Layout component that includes the Navbar and Footer
// Removed theme and toggleTheme props
const LayoutWithNavbar = ({ children }) => {
    return (
        // Simplified background for a single theme (light)
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Navbar /> {/* Navbar no longer needs theme props */}
            <main className="flex-grow">
                {children}
            </main>
            {/* Simplified footer for a single theme (light) */}
            <footer className="bg-white text-slate-500 text-center p-6 mt-auto shadow-inner border-t border-slate-200">
                <div className="container mx-auto">
                    <p className="text-sm">&copy; {new Date().getFullYear()} TouristGetaway. All rights reserved.</p>
                    <p className="text-xs mt-1">Crafting memories, one journey at a time.</p>
                </div>
            </footer>
        </div>
    );
};

// Main App component
function App() {
    // Theme state and toggle logic have been removed

    return (
        <Router>
            <Routes>
                {/* Routes no longer need to pass theme props */}
                <Route path="/" element={<LayoutWithNavbar><HomePage /></LayoutWithNavbar>} />
                <Route path="/all-packages" element={<LayoutWithNavbar><PackageList /></LayoutWithNavbar>} />
                <Route path="/package/:id" element={<LayoutWithNavbar><PackageDetailsPage /></LayoutWithNavbar>} />
                <Route path="/domestic-packages" element={<LayoutWithNavbar><DomesticPackagesPage /></LayoutWithNavbar>} />
                <Route path="/international-packages" element={<LayoutWithNavbar><InternationalPackagesPage /></LayoutWithNavbar>} />
                <Route path="/packages" element={<LayoutWithNavbar><PackageList /></LayoutWithNavbar>} />
                {/* Add the new route for the Contact Us page */}
                <Route path="/contact-us" element={<LayoutWithNavbar><ContactUsPage /></LayoutWithNavbar>} />
            </Routes>
        </Router>
    );
}

export default App;
