import React from 'react';
import PackageCard from './PackageCard';
import { travelPackages } from '../../data/travelPackages';

function PackageList() {
    if (!travelPackages || travelPackages.length === 0) {
        return (
            <div className="text-center py-10">
                <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-4">No Packages Available Yet</h2>
                <p className="text-slate-500 dark:text-slate-400">
                    We're curating amazing experiences for you. Please check back later for exciting travel deals!
                </p>
                {/* Optional: Add an image or illustration for empty state */}
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-center text-slate-800 dark:text-white mb-10 md:mb-12 text-4xl md:text-5xl font-bold">Explore Our Travel Packages</h1>
            {/* Placeholder for Filters/Sorting - future enhancement */}
            {/* <div className="mb-8 flex justify-between items-center">
                <p className="text-slate-600 dark:text-slate-300">Showing {travelPackages.length} packages</p>
                <div>
                    <label htmlFor="sort-packages" className="sr-only">Sort by</label>
                    <select id="sort-packages" className="p-2 border rounded-md dark:bg-slate-700 dark:border-slate-600">
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Duration</option>
                        <option>Rating</option>
                    </select>
                </div>
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                {travelPackages.map(pkg => (
                    <PackageCard key={pkg.id} pkg={pkg} />
                ))}
            </div>
        </div>
    );
}

export default PackageList;