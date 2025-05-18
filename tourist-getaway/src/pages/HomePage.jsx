import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import companyLogo from '../assets/logo.png'; // Ensure this path is correct

// Icon components
const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 ease-out">
        <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
    </svg>
);
const GlobeAltIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
        <path d="M8.505 2.501A8.013 8.013 0 003.268 4.403c-.409.38-.788.795-1.143 1.238A7.96 7.96 0 001 10c0 1.32.32 2.567.89 3.657.376.518.803.995 1.278 1.428A8.012 8.012 0 008.505 17.5c.657 0 1.294-.078 1.908-.227a.75.75 0 00.215-1.404 6.512 6.512 0 01-1.112-2.916.75.75 0 00-.707-.707 6.512 6.512 0 01-2.916-1.112.75.75 0 00-1.403.215A6.478 6.478 0 004.5 14.01a6.502 6.502 0 015.019-5.02 6.478 6.478 0 001.51-1.03.75.75 0 00.216-1.403c-.686-.19-1.406-.298-2.14-.326A.75.75 0 008.505 5.5c0 .414.336.75.75.75h.196a.75.75 0 00.74-.648 6.513 6.513 0 01.164-2.413.75.75 0 00-1.4-.288A8.013 8.013 0 008.505 2.501zM17.5 10a7.458 7.458 0 00-1.626-4.606A7.483 7.483 0 0011.5 3.515.75.75 0 0010 4.25v.002a6.013 6.013 0 011.417 3.695.75.75 0 00.707.707 6.013 6.013 0 013.695 1.417.75.75 0 00.748-.012 7.459 7.459 0 001.933-3.32V10h-.001z" />
    </svg>
);
const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
        <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.01a5.741 5.741 0 00.281-.145l.005-.002.001-.001L10 18.933zM10 20a1 1 0 01-.692-.29l-5.001-5A1 1 0 015 13.707V10a5 5 0 014.268-4.932A4.977 4.977 0 0110 5c.828 0 1.599.208 2.276.568A5 5 0 0115 10v3.707a1 1 0 01.308 1.002l-5.001 5A1 1 0 0110 20zm0-12.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" clipRule="evenodd" />
    </svg>
);

// HomePage component
function HomePage() {
    // Background image for the hero section
    const backgroundImageUrl = '/src/assets/home_page.jpg';

    // State for triggering animations
    const [animate, setAnimate] = useState(false);

    // Effect to trigger animation shortly after component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true);
        }, 100); // Short delay before animation starts
        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    // Animation classes for hero content
    const animationBase = "transition-all duration-1000 ease-out";
    const animationInitial = "opacity-0 transform -translate-y-5";
    const animationFinal = "opacity-100 transform translate-y-0";

    // Button styling with new color palette
    // Primary button (e.g., Domestic Travel) uses sky color
    const primaryButtonClasses = "bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 focus-visible:ring-sky-500";
    // Secondary button (e.g., International Travel) uses teal color
    const secondaryButtonClasses = "bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 focus-visible:ring-teal-500";
    // Base classes for hero section buttons
    const heroButtonBaseClasses = "w-full sm:w-auto group inline-flex items-center justify-center text-white font-semibold py-3.5 px-8 rounded-lg text-lg shadow-xl transform hover:scale-105 active:scale-100 transition-all duration-250 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-opacity-75";

    return (
        <>
            {/* Hero Section - Full Width */}
            <div
                className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white p-4 selection:bg-sky-500 selection:text-white -mt-20" // -mt-20 pulls section under sticky Navbar
                style={{ backgroundImage: `url(${backgroundImageUrl})` }}
                onError={(e) => { e.target.style.backgroundImage = `url(https://placehold.co/1920x1080/334155/E2E8F0?text=Hero+Image+Unavailable)`}} // Fallback background
            >
                {/* Overlay for better text readability on hero image */}
                <div className="absolute inset-0 bg-black/60 dark:bg-black/70 transition-colors duration-300"></div>

                {/* Hero content container */}
                <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
                    {/* Company Logo */}
                    {companyLogo && (
                        <img
                            src={companyLogo}
                            alt="Tourist Getaways Company Logo"
                            className={`w-28 h-28 md:w-36 md:h-36 mb-6 object-contain drop-shadow-lg ${animationBase} ${animate ? `${animationFinal} delay-100` : animationInitial}`}
                        />
                    )}
                    {/* Main heading */}
                    <h1
                        className={`text-5xl md:text-6xl lg:text-7xl font-bold font-poppins mb-4 tracking-tight text-white drop-shadow-xl ${animationBase} ${animate ? `${animationFinal} delay-300` : animationInitial}`}
                    >
                        Tourist Getaways
                    </h1>
                    {/* Subheading */}
                    <p
                        className={`text-xl md:text-2xl mb-12 font-light text-slate-100 drop-shadow-md max-w-xl ${animationBase} ${animate ? `${animationFinal} delay-500` : animationInitial}`}
                    >
                        Tours and memories that last a lifetime with our exclusive tour packages.
                    </p>
                    {/* Call to action buttons */}
                    <div
                        className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto ${animationBase} ${animate ? `${animationFinal} delay-700` : animationInitial}`}
                    >
                        <Link
                            to="/domestic-packages"
                            className={`${heroButtonBaseClasses} ${primaryButtonClasses}`}
                        >
                            <MapPinIcon />
                            Domestic Travel
                            <ArrowRightIcon />
                        </Link>
                        <Link
                            to="/international-packages"
                            className={`${heroButtonBaseClasses} ${secondaryButtonClasses}`}
                        >
                            <GlobeAltIcon />
                            International Travel
                            <ArrowRightIcon />
                        </Link>
                    </div>
                </div>
            </div>

            {/* "Why Choose Us" Section */}
            <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-12">Why Choose Tourist Getaways?</h2>
                    <div className="grid md:grid-cols-3 gap-x-8 gap-y-12 text-left">
                        {[
                            // Feature items with updated icon background colors
                            { title: "Expertly Crafted Tours", text: "Unique itineraries designed by travel experts for an unforgettable experience.", icon: <svg className="w-6 h-6 text-sky-700 dark:text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>, bgColor: 'bg-sky-100 dark:bg-sky-700/30' },
                            { title: "Best Value Guaranteed", text: "Competitive prices without compromising on quality or service.", icon: <svg className="w-6 h-6 text-teal-700 dark:text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>, bgColor: 'bg-teal-100 dark:bg-teal-700/30' },
                            { title: "24/7 Support", text: "Dedicated customer support available around the clock for peace of mind.", icon: <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>, bgColor: 'bg-pink-100 dark:bg-pink-700/30' }
                        ].map(item => (
                            <div key={item.title} className="p-6 rounded-lg transition-all duration-300 hover:shadow-xl bg-white dark:bg-slate-800/70 hover:bg-opacity-80 border border-slate-200 dark:border-slate-700">
                                <div className={`flex items-center justify-center w-12 h-12 ${item.bgColor} rounded-full mb-5 mx-auto md:mx-0 shadow-md`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;
