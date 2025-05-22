import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import companyLogo from '../../assets/logo.png'; // Ensure this path is correct

// Navbar component, theme and toggleTheme props are removed
function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Effect to close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Base classes for navigation links
    // Focus visible ring is kept for accessibility, offset is simplified
    const navLinkClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2";
    // Simplified active navigation link classes for a single theme (light)
    const activeNavLinkClasses = "bg-sky-600 text-white";

    // Base classes for navbar text and hover states for a single theme (light)
    const navbarTextClass = "text-slate-700"; // Default text color for light theme
    const navbarHoverClass = "hover:bg-sky-100 hover:text-sky-700"; // Hover state for light theme

    return (
        // Navbar container with a single theme background (white)
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20"> {/* Navbar height */}
                    {/* Logo and company name */}
                    <div className="flex items-center">
                        <Link
                            to="/"
                            // Simplified classes for the logo link
                            className={`flex items-center space-x-3 text-2xl font-bold font-poppins transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 rounded-md p-1 ${navbarTextClass} hover:text-sky-600`}
                        >
                            <img
                                src={companyLogo}
                                alt="Tourist Getaways Logo"
                                className="h-10 w-auto" // Logo size
                            />
                            <span>Tourist Getaways</span>
                        </Link>
                    </div>

                    {/* Desktop navigation links */}
                    <div className="hidden md:flex items-center">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {[
                                { to: "/", label: "Home" },
                                { to: "/domestic-packages", label: "Domestic" },
                                { to: "/international-packages", label: "International" },
                                { to: "/testimonials", label: "Testimonials" }, // Add this line
                                { to: "/contact-us", label: "Contact" },
                            ].map((item) => (
                                <NavLink
                                    key={item.label}
                                    to={item.to}
                                    // Simplified classes for NavLink
                                    className={({ isActive }) => `${navLinkClasses} ${navbarTextClass} ${navbarHoverClass} ${isActive ? activeNavLinkClasses : ''}`}
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>
                        {/* Theme toggle button for desktop has been removed */}
                    </div>

                    {/* Mobile menu controls */}
                    <div className="-mr-2 flex md:hidden items-center">
                        {/* Theme toggle button for mobile has been removed */}
                        {/* Mobile menu button (hamburger/close) */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            type="button"
                            // Simplified classes for mobile menu button
                            className={`inline-flex items-center justify-center p-2 rounded-md ${navbarTextClass} ${navbarHoverClass} focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500`}
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">{isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
                            {!isMobileMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, shown/hidden based on state */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                id="mobile-menu"
            >
                {/* Simplified background for mobile menu */}
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm shadow-lg">
                    {[
                        { to: "/", label: "Home" },
                        { to: "/domestic-packages", label: "Domestic" },
                        { to: "/international-packages", label: "International" },
                        { to: "/testimonials", label: "Testimonials" },
                        { to: "/contact-us", label: "Contact" },
                    ].map((item) => (
                        <NavLink
                            key={item.label}
                            to={item.to}
                            // Simplified classes for mobile NavLink
                            className={({ isActive }) => `block ${navLinkClasses} ${navbarTextClass} ${navbarHoverClass} text-base py-3 ${isActive ? activeNavLinkClasses : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
