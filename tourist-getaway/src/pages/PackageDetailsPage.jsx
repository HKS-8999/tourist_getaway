import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { travelPackages } from '../data/travelPackages';

// Reusable Icon components
const CheckCircleIcon = () => (
    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);
const XCircleIcon = () => (
    <svg className="w-5 h-5 text-red-500 dark:text-red-400 mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
);
const CalendarDaysIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-1.5 text-slate-500 dark:text-slate-400">
        <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c0-.414.336-.75.75-.75h10.5a.75.75 0 010 1.5H5.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
    </svg>
);
const MapPinIconDetail = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-1.5 text-slate-500 dark:text-slate-400">
        <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.01a5.741 5.741 0 00.281-.145l.005-.002.001-.001L10 18.933zM10 20a1 1 0 01-.692-.29l-5.001-5A1 1 0 015 13.707V10a5 5 0 014.268-4.932A4.977 4.977 0 0110 5c.828 0 1.599.208 2.276.568A5 5 0 0115 10v3.707a1 1 0 01.308 1.002l-5.001 5A1 1 0 0110 20zm0-12.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" clipRule="evenodd" />
    </svg>
);

// PackageDetailsPage component
function PackageDetailsPage() {
    const { id } = useParams(); // Get package ID from URL
    const navigate = useNavigate(); // Hook for navigation
    const pkg = travelPackages.find(p => p.id === id); // Find package by ID

    // Handle package not found
    if (!pkg) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h2 className="text-3xl font-semibold mb-4 text-red-600 dark:text-red-400">Package Not Found!</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                    The package you are looking for does not exist or may have been removed.
                </p>
                {/* Button to navigate back, using new sky color */}
                <button
                    onClick={() => navigate('/all-packages')}
                    className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
                >
                    &larr; Back to All Packages
                </button>
            </div>
        );
    }

    // Example images for gallery (can be expanded)
    const images = [
        pkg.imageUrl,
        pkg.imageUrl?.replace('w=1173', 'w=800').replace('q=80', 'q=70'), // Slightly different query for variety
        pkg.imageUrl?.replace('w=1173', 'w=600').replace('q=80', 'q=60')
    ].filter(Boolean).map(url => url || `https://placehold.co/600x400/E2E8F0/475569?text=${encodeURIComponent(pkg.name)}`); // Fallback for each image


    return (
        <div className="container mx-auto px-4 py-8 md:py-12 text-slate-800 dark:text-slate-100">
            {/* Back to packages link */}
            <div className="mb-8">
                <Link
                    to="/all-packages"
                    // Link styling with new sky color
                    className="inline-flex items-center text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 group rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 dark:focus-visible:ring-offset-slate-900 p-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to All Packages
                </Link>
            </div>

            {/* Main content layout: Image gallery and package info */}
            <div className="lg:flex lg:space-x-12 mb-10 md:mb-12">
                {/* Image Gallery Section */}
                <div className="lg:w-2/3 mb-8 lg:mb-0">
                    <img
                        src={images[0]}
                        alt={`Scenic view of ${pkg.name} in ${pkg.destination}`}
                        className="w-full h-auto max-h-[400px] md:max-h-[550px] object-cover rounded-xl shadow-2xl mb-4"
                        onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/800x550/E2E8F0/475569?text=Image+Error`; }}
                    />
                    {/* Thumbnails for additional images */}
                    {images.length > 1 && (
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                            {images.slice(1, 4).map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`${pkg.name} view ${index + 1}`}
                                    className="w-full h-20 md:h-28 object-cover rounded-lg shadow-md cursor-pointer opacity-75 hover:opacity-100 transition-opacity"
                                    onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/200x112/E2E8F0/475569?text=Thumb+Error`; }}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Package Information Section */}
                <div className="lg:w-1/3">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900 dark:text-white">{pkg.name}</h1>
                    <div className="flex items-center text-slate-500 dark:text-slate-400 mb-1">
                        <MapPinIconDetail />
                        <p className="text-lg">{pkg.destination}</p>
                    </div>
                    <div className="flex items-center text-slate-500 dark:text-slate-400 mb-6">
                        <CalendarDaysIcon />
                        <p className="text-md">{pkg.duration}</p>
                    </div>

                    {/* Pricing and Booking Box */}
                    <div className="mb-6 p-6 bg-slate-100 dark:bg-slate-800 rounded-lg shadow-xl border dark:border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Price per person</span>
                            <span className="text-lg text-slate-700 dark:text-slate-300">{pkg.rating} / 5 ⭐</span>
                        </div>
                        {/* Price with new sky color */}
                        <p className="text-4xl font-bold text-sky-600 dark:text-sky-400 mb-4">${pkg.price}</p>
                        {/* Book Now button with new sky color */}
                        <button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-800">
                            Book Now
                        </button>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 text-center">
                            Questions? <a href="#" className="text-sky-600 hover:underline dark:text-sky-400">Contact us</a>
                        </p>
                    </div>

                    {/* Key features */}
                    <div className="space-y-3 text-sm">
                        <p className="flex items-center text-slate-600 dark:text-slate-300"><CheckCircleIcon /> Instant Confirmation</p>
                        <p className="flex items-center text-slate-600 dark:text-slate-300"><CheckCircleIcon /> Flexible Cancellation (check terms)</p>
                        <p className="flex items-center text-slate-600 dark:text-slate-300"><CheckCircleIcon /> Expert Guided Tours</p>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div className="mb-10 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl border dark:border-slate-700">
                {/* Section title with new teal color */}
                <h2 className="text-2xl font-semibold mb-4 border-b border-slate-300 dark:border-slate-700 pb-3 text-teal-700 dark:text-teal-400">Description</h2>
                <div className="prose prose-slate dark:prose-invert max-w-none leading-relaxed whitespace-pre-line text-slate-700 dark:text-slate-300">
                    {pkg.description}
                </div>
            </div>

            {/* Itinerary Section */}
            {pkg.itinerary && pkg.itinerary.length > 0 && (
                <div className="mb-10 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl border dark:border-slate-700">
                    {/* Section title with new teal color */}
                    <h2 className="text-2xl font-semibold mb-6 border-b border-slate-300 dark:border-slate-700 pb-3 text-teal-700 dark:text-teal-400">Daily Itinerary</h2>
                    <ul className="list-none space-y-6">
                        {pkg.itinerary.map((item, index) => (
                            // Itinerary item with new sky accent color
                            <li key={index} className="relative pl-10 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-md border-l-4 border-sky-500 dark:border-sky-400">
                                <span className="absolute left-3 top-5 flex h-4 w-4 items-center justify-center">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 dark:bg-sky-300"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500 dark:bg-sky-400"></span>
                                </span>
                                <strong className="block text-sm font-medium text-sky-600 dark:text-sky-400 mb-1">Day {index + 1}</strong>
                                <p className="text-slate-700 dark:text-slate-300 text-sm">{item.split(': ')[1] || item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Inclusions and Exclusions Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
                {pkg.inclusions && pkg.inclusions.length > 0 && (
                    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl border dark:border-slate-700">
                        <h2 className="text-2xl font-semibold mb-4 border-b border-slate-300 dark:border-slate-700 pb-3 text-green-600 dark:text-green-400 flex items-center">
                            <CheckCircleIcon /> What's Included
                        </h2>
                        <ul className="space-y-2.5 text-slate-700 dark:text-slate-300">
                            {pkg.inclusions.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-2.5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {pkg.exclusions && pkg.exclusions.length > 0 && (
                    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl border dark:border-slate-700">
                        <h2 className="text-2xl font-semibold mb-4 border-b border-slate-300 dark:border-slate-700 pb-3 text-red-600 dark:text-red-400 flex items-center">
                            <XCircleIcon /> What's Not Included
                        </h2>
                        <ul className="space-y-2.5 text-slate-700 dark:text-slate-300">
                            {pkg.exclusions.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="w-5 h-5 text-red-500 dark:text-red-400 mr-2.5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PackageDetailsPage;
