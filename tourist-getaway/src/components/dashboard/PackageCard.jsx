import React from 'react';
import { Link } from 'react-router-dom';

// StarIcon for displaying ratings
const StarIcon = ({ filled }) => (
    <svg className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-slate-300 dark:text-slate-500'}`} viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
);

// PackageCard component displaying individual travel packages
function PackageCard({ pkg }) {
    return (
        // Card container with new hover border color (sky)
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 flex flex-col group border border-slate-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-400">
            {/* Image section */}
            <div className="relative">
                <img
                    src={pkg.imageUrl || `https://placehold.co/400x225/E2E8F0/475569?text=${encodeURIComponent(pkg.name)}`} // Updated placeholder
                    alt={`Scenic view of ${pkg.name}`}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/400x225/E2E8F0/475569?text=Image+Not+Found`; }} // Fallback for broken image
                />
                {/* Duration tag with new sky background */}
                <div className="absolute top-0 right-0 bg-sky-500 dark:bg-sky-600 text-white text-xs font-semibold px-3 py-1 m-3 rounded-full shadow-md">
                    {pkg.duration}
                </div>
                {/* Price overlay */}
                <div className="absolute bottom-0 left-0 bg-black/60 text-white p-2 m-3 rounded-md">
                    <p className="text-lg font-bold">${pkg.price}</p>
                </div>
            </div>
            {/* Content section */}
            <div className="p-5 md:p-6 flex flex-col flex-grow">
                {/* Package name with new hover text color (sky) */}
                <h3 className="text-xl font-semibold mb-1 font-poppins text-slate-800 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {pkg.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{pkg.destination}</p>

                {/* Rating section */}
                <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} filled={i < Math.floor(pkg.rating)} />
                    ))}
                    <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">({pkg.rating} stars{pkg.reviews ? ` / ${pkg.reviews} reviews` : ''})</span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-3 flex-grow">
                    {pkg.description.split('\n\n')[0]} {/* Show first paragraph */}
                </p>

                {/* View Details button section */}
                <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-700">
                    <Link
                        to={`/package/${pkg.id}`}
                        // Button with new sky background and focus ring
                        className="inline-flex items-center justify-center w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2.5 px-5 rounded-md transition-all duration-200 text-sm shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-800"
                    >
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PackageCard;
