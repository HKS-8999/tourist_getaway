import React, { useState, useEffect, useRef } from 'react';

const testimonialsData = [
    {
        id: 't1',
        imageUrl: 'testimonial/Review1.png',
        name: 'Mr. Hiren Panchal & Family',
        quote: 'Kerala Trip',
        altText: 'Happy customer Mr. Hiren Panchal & Family on their vacation in Kerala'
    },
    {
        id: 't2',
        imageUrl: 'testimonial/Review2.png',
        name: 'Abhishek Singh',
        quote: 'Rajasthan Trip',
        altText: 'Satisfied client Abhishek Singh enjoying Rajasthan'
    },
    {
        id: 't3',
        imageUrl: 'testimonial/Review3.png',
        name: 'Mr. Rajeev Sharma',
        quote: 'Ujjain Tour',
        altText: 'Mr. Rajeev Sharma exploring Ujjain'
    },
    {
        id: 't4',
        imageUrl: 'testimonial/Review4.png',
        name: 'Mr. Mukesh Chaudhary',
        quote: 'Kerala Trip',
        altText: 'Mr. Mukesh Chaudhary on her Kerala tour'
    },
    {
        id: 't5',
        imageUrl: 'testimonial/Review5.png',
        name: 'Mr. Bhagwan Singh',
        quote: 'Himachal Trip',
        altText: 'Mr. Bhagwan Singh exploring Himachal Pradesh'
    },
    {
        id: 't6',
        imageUrl: 'testimonial/Review6.PNG',
        name: 'Mr. Santosh Jain',
        quote: 'Kashmir Trip',
        altText: 'Mr. Bhagwan Singh exploring Kashmir with Family'
    },
    {
        id: 't7',
        imageUrl: 'testimonial/Review7.png',
        name: 'Veeranna Benal',
        quote: 'Uttarakhand Trip',
        altText: 'Veeranna Benal exploring Uttarakhand'
    },
    {
        id: 't8',
        imageUrl: 'testimonial/Review8.png',
        name: 'Dr. Sushil Saini',
        quote: 'Andaman Trip',
        altText: 'Dr. Sushil Saini exploring Andaman'
    },
    {
        id: 't9',
        imageUrl: 'testimonial/Review9.png',
        name: 'Mr.Shailendra Jadon',
        quote: 'Thailand Trip',
        altText: 'Mr.Shailendra Jadon exploring Thailand'
    }
];
// Modal component
const ImageModal = ({ testimonial, isOpen, onClose }) => {
    if (!isOpen || !testimonial) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"> {/* Added padding for smaller screens */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-slate-500 hover:text-slate-700 text-3xl leading-none" // Adjusted size and leading
                    aria-label="Close"
                >
                    &times;
                </button>
                <img
                    src={testimonial.imageUrl}
                    alt={testimonial.altText || `Testimonial from ${testimonial.name}`}
                    className="w-full h-auto max-h-[70vh] rounded-xl object-contain bg-black mb-4" // Added max-h for modal image
                    onError={(e) => { e.target.src = 'https://placehold.co/576x576/E2E8F0/475569?text=Client+Photo'; }}
                />
                <h4 className="text-xl font-bold text-sky-700 mb-1">{testimonial.name}</h4>
                <p className="text-slate-600">{testimonial.quote}</p>
            </div>
        </div>
    );
};

const TestimonialCard = ({ testimonial, isActive, onImageClick }) => (
    <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        aria-hidden={!isActive}
    >
        <div className="relative w-full h-full max-w-2xl mx-auto aspect-square rounded-2xl shadow-lg overflow-hidden group">
            <img
                src={testimonial.imageUrl}
                alt={testimonial.altText || `Testimonial from ${testimonial.name}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 cursor-pointer"
                onClick={() => onImageClick(testimonial)}
                onError={(e) => { e.target.src = 'https://placehold.co/576x576/E2E8F0/475569?text=Client+Photo'; }}
            />
            {/* Added pointer-events-none to the overlay div */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 pointer-events-none">
                <h4 className="text-white text-2xl font-bold mb-1">{testimonial.name}</h4>
                <p className="text-slate-200 text-base leading-relaxed line-clamp-3">{testimonial.quote}</p>
            </div>
        </div>
    </div>
);

function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    const intervalRef = useRef(null);
    const intervalTime = 5000;

    const startAutoSlide = () => {
        if (testimonialsData.length <= 1) return;
        // Clear existing interval before starting a new one
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        }, intervalTime);
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        startAutoSlide();
        return stopAutoSlide; // Cleanup on component unmount
    }, [testimonialsData.length]); // Re-run if the number of testimonials changes

    const handleImageClick = (testimonial) => {
        stopAutoSlide(); // Stop sliding when modal is opened
        setSelectedTestimonial(testimonial);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedTestimonial(null);
        startAutoSlide(); // Resume sliding when modal is closed
    };

    const handleDotClick = (index) => {
        stopAutoSlide();
        setCurrentIndex(index);
        // Optionally, you might want to restart the auto-slide after a manual dot click
        // or let it stay paused until mouse leave from the main container.
        // For now, it will restart on mouse leave if that's the desired behavior.
        // If you want it to restart immediately after a short delay:
        // setTimeout(startAutoSlide, intervalTime);
    };

    if (testimonialsData.length === 0) {
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
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-sky-600 mb-3">Hear From Our Happy Travelers</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Real stories from real adventurers who chose Tourist Getaways for their memorable journeys.
                    </p>
                </div>

                <div
                    className="relative w-full max-w-2xl mx-auto h-[560px] sm:h-[620px]" // Adjusted height for consistency
                    onMouseEnter={stopAutoSlide}
                    onMouseLeave={startAutoSlide}
                >
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            isActive={index === currentIndex}
                            onImageClick={handleImageClick}
                        />
                    ))}
                </div>

                {testimonialsData.length > 1 && (
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonialsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)} // Updated to use handleDotClick
                                className={`w-4 h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 ${
                                    index === currentIndex
                                        ? 'bg-sky-600 scale-110'
                                        : 'bg-slate-300 hover:bg-slate-400'
                                }`}
                                aria-label={`View testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
            <ImageModal
                testimonial={selectedTestimonial}
                isOpen={modalOpen}
                onClose={handleCloseModal}
            />
        </section>
    );
}

export default Testimonial;
