import React, { useState, useEffect } from 'react';

// Sample testimonial data - replace with your actual testimonials
const testimonialsData = [
    {
        id: 't1',
        imageUrl: '/src/assets/testimonial/Review1.png', // Adjusted for a single display
        name: 'Mr. Hiren Panchal & Family',
        quote: 'Kerala Trip',
        altText: 'Happy customer Mr. Hiren Panchal & Family on their vacation in Kerala'
    },
    {
        id: 't2',
        imageUrl: '/src/assets/testimonial/Review2.png',
        name: 'Abhishek Singh',
        quote: 'Rajasthan Trip',
        altText: 'Satisfied client Abhishek Singh enjoying Rajasthan'
    },
    {
        id: 't3',
        imageUrl: '/src/assets/testimonial/Review3.png',
        name: 'Mr. Rajeev Sharma',
        quote: 'Ujjain Tour',
        altText: 'Mr. Rajeev Sharma exploring Ujjain'
    },
    {
        id: 't4',
        imageUrl: '/src/assets/testimonial/Review4.png',
        name: 'Mr. Mukesh Chaudhary',
        quote: 'Kerala Trip',
        altText: 'Mr. Mukesh Chaudhary on her Kerala tour'
    },
    {
        id: 't5',
        imageUrl: '/src/assets/testimonial/Review5.png',
        name: 'Mr. Bhagwan Singh',
        quote: 'Himachal Trip',
        altText: 'Mr. Bhagwan Singh exploring the vibrant streets of Himachal Pradesh'
    }
];

const SingleTestimonialDisplay = ({ testimonial, isActive }) => {
    // This component will display one testimonial with a fade-in/out effect
    return (
        <div
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
            <div className="relative w-full h-full max-w-md mx-auto aspect-square rounded-xl shadow-2xl overflow-hidden group"> {/* Centered and sized card */}
                <img
                    src={testimonial.imageUrl}
                    alt={testimonial.altText || `Testimonial from ${testimonial.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/400x400/E2E8F0/475569?text=Client+Photo`; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                    <h4 className="text-white text-xl font-semibold mb-1">{testimonial.name}</h4>
                    <p className="text-slate-200 text-sm leading-relaxed line-clamp-3">{testimonial.quote}</p> {/* line-clamp for longer quotes */}
                </div>
            </div>
        </div>
    );
};

function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalTime = 5000; // Change testimonial every 5 seconds

    useEffect(() => {
        if (testimonialsData.length <= 1) return; // No need for interval if 0 or 1 testimonial

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        }, intervalTime);

        return () => clearInterval(timer); // Cleanup timer on component unmount
    }, [testimonialsData.length, intervalTime]);

    if (!testimonialsData || testimonialsData.length === 0) {
        return (
            <section className="bg-slate-100 py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-slate-500">No testimonials yet. Be the first to share your story!</p>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-slate-100 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-sky-600 mb-3">Hear From Our Happy Travelers</h2>
                    <p className="text-md md:text-lg text-slate-600 max-w-2xl mx-auto">
                        Real stories from real adventurers who chose Tourist Getaways for their memorable journeys.
                    </p>
                </div>

                {/* Container for the single testimonial display, relative for absolute positioning of items */}
                <div className="relative w-full max-w-md mx-auto h-[400px] sm:h-[450px]"> {/* Fixed height for the container */}
                    {testimonialsData.map((testimonial, index) => (
                        <SingleTestimonialDisplay
                            key={testimonial.id}
                            testimonial={testimonial}
                            isActive={index === currentIndex}
                        />
                    ))}
                </div>

                {/* Optional: Dots for navigation */}
                {testimonialsData.length > 1 && (
                    <div className="flex justify-center space-x-2 mt-8">
                        {testimonialsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                    index === currentIndex ? 'bg-sky-600' : 'bg-slate-300 hover:bg-slate-400'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Testimonial;
