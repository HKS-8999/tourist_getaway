import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage.jsx';
import DomesticPackagesPage from './pages/DomesticPackagesPage';
import InternationalPackagesPage from './pages/InternationalPackagesPage';
import ContactUsPage from './pages/ContactUsPage';
import TestimonialsPage from './pages/TestimonialsPage'; // Import the new page
import DeprecatedPage from './pages/DeprecatedPage.jsx';

// Replace with your actual raw GitHub file URL
const URL = 'https://raw.githubusercontent.com/HKS-8999/tourist_getaway/main/app-config.txt';

// Layout component for pages with Navbar and Footer
const LayoutWithNavbar = ({ children }) => (
    <div className="flex flex-col min-h-screen bg-slate-50">
        <Navbar />
        <main className="flex-grow">
            {children}
        </main>
        <footer className="bg-white text-slate-600 text-center p-6 mt-auto shadow-inner border-t border-slate-200">
            <div className="container mx-auto">
                <p className="text-sm">&copy; {new Date().getFullYear()} Tourist Getaways. All rights reserved.</p>
                <p className="text-xs mt-1">Crafting memories, one journey at a time.</p>
            </div>
        </footer>
    </div>
);

// Main App component
function App() {
    const [isLoadingConfig, setIsLoadingConfig] = useState(true);

    const [appEnabled, setAppEnabled] = useState(false);

    useEffect(() => {
        const urlWithCacheBust = `${URL}?t=${Date.now()}`;

        fetch(urlWithCacheBust)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error ${res.status}`);
                }
                return res.text();
            })
            .then(text => {
                const processedValue = text.trim().toLowerCase();

                const isEnabledByConfig = processedValue === 'true';

                setAppEnabled(isEnabledByConfig);
            })
            .catch(error => {
                setAppEnabled(true);
            })
            .finally(() => {
                setIsLoadingConfig(false);
            });
    }, []);

    if (isLoadingConfig) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-slate-100">
                <p className="text-xl text-slate-700">Loading configuration...</p>
                {/* You could add a spinner icon here */}
            </div>
        );
    }

    if (!appEnabled) {
        return <DeprecatedPage />;
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LayoutWithNavbar><HomePage /></LayoutWithNavbar>} />
                <Route path="/domestic-packages" element={<LayoutWithNavbar><DomesticPackagesPage /></LayoutWithNavbar>} />
                <Route path="/international-packages" element={<LayoutWithNavbar><InternationalPackagesPage /></LayoutWithNavbar>} />
                <Route path="/contact-us" element={<LayoutWithNavbar><ContactUsPage /></LayoutWithNavbar>} />
                <Route path="/testimonials" element={<LayoutWithNavbar><TestimonialsPage /></LayoutWithNavbar>} /> {/* Add this line */}
            </Routes>
        </Router>
    );
}

export default App;
