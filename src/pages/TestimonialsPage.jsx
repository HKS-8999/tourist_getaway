// src/pages/TestimonialsPage.jsx
import React from 'react'; // Removed useState as it's not used in this file
import Testimonial from '../components/Testimonial';

const videoTestimonialsData = [
    {
        id: 'v1',
        title: 'Amazing Trip to the Andaman!',
        travelerName: 'Mrs. Smriti Singh',
        videoUrl: '/testimonial/Review1_vid.mp4', // Ensure this path is correct relative to your public folder
        thumbnailUrl: '/testimonial/Review1_vid_thumbnail.png', // Ensure this path is correct
        description: "Hear about Mrs Smriti Singh's fantastic overall experience at Andaman Islands."
    },
    {
        id: 'v2',
        title: 'Dubai - A City of Dreams and Luxury',
        travelerName: 'Mr. Vishvesh Dave ',
        videoUrl: '/testimonial/Review2_vid.mp4', // Ensure this path is correct relative to your public folder
        thumbnailUrl: '/testimonial/Review2_vid_thumbnail.png', // Ensure this path is correct
        description: "Hear Mr. Vishvesh Dave as he shares his experience of Dubai."
    }
    // Add more videos as needed
];

function TestimonialsPage() {
    const headerBackgroundImageUrl = "/testimonial/testimonial_background1.jpg"; // Ensure this path is correct

    return (
        <div className="bg-slate-50 min-h-[calc(100vh-5rem)]">
            {/* Page Header */}
            <div
                className="relative bg-cover bg-center py-12 sm:py-16 md:py-20 flex items-center justify-center"
                style={{ backgroundImage: `url(${headerBackgroundImageUrl})` }}
                // It's good practice to ensure fallback images are also in the public folder
                // onError={(e) => { e.target.style.backgroundImage = `url('/fallback-header.jpg')`; e.target.style.backgroundColor = '#64748B';}}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 text-center container mx-auto px-4">
                    <div className="inline-block bg-black/40 backdrop-blur-md p-4 md:p-6 rounded-lg shadow-xl">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Traveler Testimonials</h1>
                        <p className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto">
                            See what our adventurers have to say about their journeys with Tourist Getaways.
                        </p>
                    </div>
                </div>
            </div>

            {/* Photo Testimonials Section */}
            <Testimonial /> {/* Assuming this component's UI is as desired from previous updates */}

            {/* Video Testimonials Section - Enhanced UI */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 md:mb-16">
                        {/* Heading for video stories, teal color provides a nice contrast */}
                        <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-3">Video Stories</h2>
                        <p className="text-md md:text-lg text-slate-600 max-w-2xl mx-auto">
                            Watch our travelers share their experiences firsthand.
                        </p>
                    </div>

                    {videoTestimonialsData.length > 0 ? (
                        <div className="flex flex-col items-center space-y-12 md:space-y-16">
                            {videoTestimonialsData.map((video) => (
                                // Enhanced Video Card
                                <div
                                    key={video.id}
                                    className="w-full max-w-4xl bg-slate-50 p-5 sm:p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                                >
                                    <div className="aspect-video overflow-hidden rounded-xl shadow-lg mb-6"> {/* Aspect ratio container for video */}
                                        <video
                                            src={video.videoUrl}
                                            poster={video.thumbnailUrl || `https://placehold.co/1280x720/E2E8F0/475569?text=Video+Preview`}
                                            controls
                                            preload="metadata"
                                            className="w-full h-full object-contain bg-black"
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-2">{video.title}</h3>
                                        <p className="text-md text-sky-600 font-medium mb-3">{video.travelerName}</p>
                                        <p className="text-slate-600 text-base leading-relaxed max-w-3xl mx-auto">{video.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-10">
                            <h2 className="text-2xl font-semibold text-slate-700 mb-4">No Video Testimonials Yet</h2>
                            <p className="text-slate-500">
                                We're collecting amazing video stories. Please check back later!
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default TestimonialsPage;