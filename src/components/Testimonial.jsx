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

const TestimonialCard = ({ testimonial, isActive }) => (
    <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        aria-hidden={!isActive}
    >
        <div className="relative w-full h-full max-w-2xl mx-auto aspect-square rounded-2xl shadow-lg overflow-hidden group">
            <img
                src={testimonial.imageUrl}
                alt={testimonial.altText || `Testimonial from ${testimonial.name}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                onError={(e) => { e.target.src = 'https://placehold.co/576x576/E2E8F0/475569?text=Client+Photo'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-white text-2xl font-bold mb-1">{testimonial.name}</h4>
                <p className="text-slate-200 text-base leading-relaxed line-clamp-3">{testimonial.quote}</p>
            </div>
        </div>
    </div>
);

function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);
    const intervalTime = 5000;

    const startAutoSlide = () => {
        if (testimonialsData.length <= 1) return;
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        }, intervalTime);
    };

    const stopAutoSlide = () => {
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        startAutoSlide();
        return stopAutoSlide;
    }, []);

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
                    className="relative w-full max-w-2xl mx-auto h-[560px] sm:h-[620px]"
                    onMouseEnter={stopAutoSlide}
                    onMouseLeave={startAutoSlide}
                >
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            isActive={index === currentIndex}
                        />
                    ))}
                </div>

                {testimonialsData.length > 1 && (
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonialsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
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
        </section>
    );
}

export default Testimonial;
