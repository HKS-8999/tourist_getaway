import React from 'react';
import { Link } from 'react-router-dom';

// DomesticPackagesPage component
function DomesticPackagesPage() {
    // Placeholder image for the page hero section
    const placeholderImageUrl = "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";

    return (
        <div className="container mx-auto px-4 py-12 text-center">
            <div className="max-w-3xl mx-auto">
                {/* Hero image */}
                <img
                    src={placeholderImageUrl}
                    alt="Scenic domestic destination"
                    className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
                    onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/900x256/E2E8F0/475569?text=Domestic+Adventures`; }}
                />

                {/* Page title and subtitle */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-white">Domestic Adventures Await</h1>
                <p className="text-lg mb-8 text-slate-600 dark:text-slate-300">
                    Explore the hidden gems and breathtaking landscapes within your country. Our curated domestic packages are coming soon!
                </p>

                {/* "Notify Me" section */}
                <div className="my-12 p-8 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700">
                    {/* Section title with new sky color */}
                    <h2 className="text-2xl font-semibold mb-4 text-sky-600 dark:text-sky-400">Stay Tuned for Local Escapes!</h2>
                    <p className="text-slate-700 dark:text-slate-300 mb-6">
                        We're busy crafting unique travel experiences. Sign up to be the first to know when our domestic packages launch.
                    </p>
                    {/* Email input form */}
                    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <label htmlFor="email-domestic" className="sr-only">Email address</label>
                        <input
                            type="email"
                            id="email-domestic"
                            placeholder="your.email@example.com"
                            // Input field styling with new sky focus ring
                            className="flex-grow p-3 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 dark:bg-slate-700 dark:text-white"
                        />
                        {/* Submit button with new sky color */}
                        <button
                            type="submit"
                            className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-1 dark:focus-visible:ring-offset-slate-800"
                        >
                            Notify Me
                        </button>
                    </form>
                </div>

                {/* Link to view all packages */}
                <Link
                    to="/all-packages"
                    // Link styling with new sky color
                    className="inline-flex items-center text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 dark:focus-visible:ring-offset-slate-900 transition-colors duration-150 group"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    View All Available Packages
                </Link>
            </div>
        </div>
    );
}

export default DomesticPackagesPage;
