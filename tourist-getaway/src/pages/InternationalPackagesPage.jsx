import React from 'react';
import { Link } from 'react-router-dom';

function InternationalPackagesPage() {
    const placeholderImageUrl = "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"; // Example image

    return (
        <div className="container mx-auto px-4 py-12 text-center">
            <div className="max-w-3xl mx-auto">
                <img src={placeholderImageUrl} alt="Exotic international destination" className="w-full h-64 object-cover rounded-lg shadow-lg mb-8" />

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-white">Discover the World</h1>
                <p className="text-lg mb-8 text-slate-600 dark:text-slate-300">
                    Embark on unforgettable journeys to iconic international destinations. Our expertly planned packages are on their way!
                </p>

                <div className="my-12 p-8 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700">
                    <h2 className="text-2xl font-semibold mb-4 text-teal-600 dark:text-teal-400">Global Adventures Coming Soon!</h2>
                    <p className="text-slate-700 dark:text-slate-300 mb-6">
                        Get ready to explore new cultures and create lasting memories. Sign up for updates on our international package launches.
                    </p>
                    {/* Placeholder for a "Notify Me" form */}
                    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <label htmlFor="email-international" className="sr-only">Email address</label>
                        <input
                            type="email"
                            id="email-international"
                            placeholder="your.email@example.com"
                            className="flex-grow p-3 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:text-white"
                        />
                        <button
                            type="submit"
                            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:shadow-lg transition-all duration-200"
                        >
                            Notify Me
                        </button>
                    </form>
                </div>

                <Link
                    to="/all-packages"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 dark:focus-visible:ring-offset-slate-900 transition-colors duration-150 group"
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

export default InternationalPackagesPage;