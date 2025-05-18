import React, { useState } from 'react';
import { X } from 'lucide-react'; // Using Lucide for the close icon
import Testimonial from '../components/Testimonial'; // Make sure this path is correct

// Sample data for domestic packages/cities
const domesticCities = [
    {
        id: 'goa',
        name: 'Goa',
        imageUrl: 'domestic/goa.jpg',
        description: 'Sun-kissed beaches and vibrant nightlife.'
    },
    {
        id: 'kerala',
        name: 'Kerala',
        imageUrl: 'domestic/Kerala.png',
        description: 'Lush backwaters and serene landscapes.'
    },
    {
        id: 'rajasthan',
        name: 'Rajasthan',
        imageUrl: 'domestic/Rajasthan.jpg',
        description: 'Majestic forts and rich cultural heritage.'
    },
    {
        id: 'himachal',
        name: 'Himachal Pradesh',
        imageUrl: 'domestic/himachal.jpg',
        description: 'Breathtaking mountains and adventure sports.'
    },
    {
        id: 'ujjain',
        name: 'Ujjain',
        imageUrl: 'domestic/ujjain.jpg',
        description: 'Historical landmarks.'
    },
    {
        id: "andaman",
        name: "Andaman and Nicobar Islands",
        imageUrl: "domestic/andaman.jpg",
        description: "Pristine beaches, turquoise waters, and lush coral reefs."
    },
    {
        id: "ladakh",
        name: "Ladakh",
        imageUrl: "domestic/ladakh.jpg",
        description: "High-altitude desert, Buddhist monasteries, and stunning mountain vistas."
    },
    {
        id: "ayodhya",
        name: "Ayodhya",
        imageUrl: "domestic/ayodhya.jpg",
        description: "Ancient city, revered pilgrimage site, and rich historical significance."
    },
    {
        id: "manali",
        name: "Manali",
        imageUrl: "domestic/manali.jpg",
        description: "Himalayan resort town, adventure sports, and scenic valleys."
    },
    {
        id: "kashmir",
        name: "Kashmir",
        imageUrl: "domestic/kashmir.jpg",
        description: "Paradise on Earth, serene lakes, and snow-capped mountains."
    },
    {
        id: "gir",
        name: "Gir National Park",
        imageUrl: "domestic/gir.jpg",
        description: "Last refuge of the Asiatic lion and diverse wildlife."
    },
    {
        id: "tamilnadu",
        name: "Tamil Nadu",
        imageUrl: "domestic/tamilnadu.jpg",
        description: "Ancient temples, vibrant culture, and classical traditions."
    }
];

// Reusable Input component for the form - styled for light theme
const Input = ({ id, name, type = 'text', placeholder, value, onChange, required = false, label }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">
            {label}
        </label>
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            // Consistent light theme input styling
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-150 ease-in-out bg-white text-slate-900 placeholder-slate-400"
        />
    </div>
);

// BookingFormModal component - explicitly styled for light theme
const BookingFormModal = ({ isOpen, onClose, selectedCity }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        destination: selectedCity?.name || '',
        access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
        subject: 'New Domestic Booking Inquiry!',
        botcheck: false,
    });
    const [submissionMessage, setSubmissionMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Update destination if selectedCity changes while modal is open
    React.useEffect(() => {
        if (selectedCity) {
            setFormData(prev => ({ ...prev, destination: selectedCity.name, botcheck: false,
                // Ensure access_key and subject are maintained
                access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY, // IMPORTANT: Replace again
                subject: `New Booking Inquiry for ${selectedCity.name}`, }));
        }
    }, [selectedCity]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        // Handle the honeypot checkbox separately
        if (name === "botcheck" && type === "checkbox") {
            setFormData(prevState => ({
                ...prevState,
                [name]: checked,
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.contactNumber) {
            setSubmissionMessage({ type: 'error', text: 'Please fill out all required fields.' });
            return;
        }
        setIsSubmitting(true);
        setSubmissionMessage({ type: 'info', text: 'Submitting your request...' });

        // Prepare data for Web3Forms.
        // Ensure all fields you want to receive in the email are included.
        // The 'access_key' is critical.
        // The 'botcheck' field is for the honeypot.
        const payload = {
            ...formData,
            // You can add more static details if needed
            form_source: 'BookingModal - ' + (selectedCity?.name || 'Unknown Destination')
        };

        // Make sure to remove the honeypot field from the visible form data if it's not meant to be displayed
        // but it should be part of the payload sent to Web3Forms if you use it.
        // In this setup, it's part of the formData state, so it's sent.

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (result.success) {
                setSubmissionMessage({ type: 'success', text: `Thank you, ${formData.name}! Your booking inquiry for ${formData.destination} has been received. We will contact you shortly.` });
                setFormData({
                    name: '',
                    email: '',
                    contactNumber: '',
                    destination: selectedCity?.name || '',
                    access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY, // IMPORTANT: Replace again
                    subject: `New Booking Inquiry for ${selectedCity?.name || 'Destination'}`,
                    botcheck: false, // Reset honeypot
                });
                setTimeout(() => {
                    onClose();
                    setSubmissionMessage('');
                }, 4000);
            } else {
                console.error("Web3Forms Submission error:", result.message);
                setSubmissionMessage({ type: 'error', text: result.message || 'There was an error submitting your request. Please try again.' });
            }
        } catch (error) {
            console.error("Network or submission error:", error);
            setSubmissionMessage({ type: 'error', text: 'There was an issue connecting. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity duration-300 ease-in-out">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-lg relative transform transition-all duration-300 ease-in-out scale-100">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-500 hover:text-slate-700 transition-colors"
                    aria-label="Close booking form"
                >
                    <X size={24} />
                </button>
                <h2 className="text-2xl font-semibold text-slate-800 mb-2">Book Your Trip</h2>
                <p className="text-sm text-slate-600 mb-6">
                    Inquire about our package for <span className="font-semibold text-sky-600">{selectedCity?.name || 'this destination'}</span>.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Your Input components for name, email, contactNumber */}
                    <Input
                        id="name"
                        name="name"
                        label="Full Name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        label="Email Address"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        id="contactNumber"
                        name="contactNumber"
                        type="tel"
                        label="Contact Number"
                        placeholder="72234 43456" // Or your desired placeholder
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                    />
                    {/* Honeypot field for spam protection - visually hidden */}
                    <input
                        type="checkbox"
                        name="botcheck"
                        id="botcheck"
                        checked={formData.botcheck}
                        onChange={handleChange}
                        style={{ display: 'none' }}
                        aria-hidden="true"
                    />
                    <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                        </button>
                    </div>
                </form>
                {submissionMessage.text && (
                    <p className={`mt-4 text-sm p-3 rounded-md text-center ${
                        submissionMessage.type === 'success' ? 'bg-green-100 text-green-700' :
                            submissionMessage.type === 'error' ? 'bg-red-100 text-red-700' :
                                'bg-sky-100 text-sky-700'
                    }`}>
                        {submissionMessage.text}
                    </p>
                )}
            </div>
        </div>
    );
};


// DomesticPackagesPage component - main background set to bg-slate-50
function DomesticPackagesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState(null);

    const openModal = (city) => {
        setSelectedCity(city);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCity(null);
    };

    // Placeholder image for the header background - specific to domestic travel
    const headerBackgroundImageUrl = "domestic/domestic_header.jpg"; // Example: Indian landscape or monument

    return (
        // Page container with light slate background, consistent with App.jsx
        <div className="bg-slate-50 min-h-[calc(100vh-5rem)]">
            {/* Enhanced Header Section with styling similar to InternationalPackagesPage */}
            <div
                className="relative bg-cover bg-center py-12 sm:py-16 md:py-20 flex items-center justify-center" // Using padding from international page
                style={{ backgroundImage: `url(${headerBackgroundImageUrl})` }}
                onError={(e) => { e.target.style.backgroundImage = `url(https://placehold.co/1600x300/64748B/E0E7FF?text=Explore+Domestic+Destinations)`; e.target.style.backgroundColor = '#64748B';}}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 text-center container mx-auto px-4">
                    {/* Inner text block with styling similar to InternationalPackagesPage */}
                    <div className="inline-block bg-black/40 backdrop-blur-md p-3 sm:p-4 md:p-6 rounded-lg shadow-xl">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 tracking-tight">Domestic Adventures Await</h1> {/* Matching font size and margin */}
                        <p className="text-sm md:text-base lg:text-lg text-slate-200 max-w-xl sm:max-w-2xl mx-auto"> {/* Matching font size and max-width */}
                            Explore the hidden gems and breathtaking landscapes within your country. Our curated domestic packages offer unforgettable experiences.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main content area for city grid */}
            <div className="container mx-auto px-4 py-12 md:py-16">
                {domesticCities.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {domesticCities.map((city) => (
                            <div
                                key={city.id}
                                // Card styling for light theme
                                className="relative rounded-xl shadow-lg overflow-hidden group transform hover:scale-105 transition-transform duration-300 ease-out bg-white"
                            >
                                <img
                                    src={city.imageUrl}
                                    alt={`Beautiful view of ${city.name}`}
                                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                                    onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/600x400/E2E8F0/475569?text=${encodeURIComponent(city.name)}`; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6 w-full">
                                    <h3 className="text-2xl font-semibold text-white mb-1">{city.name}</h3>
                                    <p className="text-sm text-slate-200 mb-4 line-clamp-2">{city.description}</p>
                                    <button
                                        onClick={() => openModal(city)}
                                        // Button styling for light theme
                                        className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2.5 px-5 rounded-lg text-sm shadow-md hover:shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
                                    >
                                        Book with Us
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-10">
                        {/* Text colors for light theme */}
                        <h2 className="text-2xl font-semibold text-slate-700 mb-4">No Domestic Packages Available Yet</h2>
                        <p className="text-slate-500">
                            We're curating amazing experiences for you. Please check back later!
                        </p>
                    </div>
                )}
            </div>
            <BookingFormModal isOpen={isModalOpen} onClose={closeModal} selectedCity={selectedCity} />
            <Testimonial />

        </div>
    );
}

export default DomesticPackagesPage;
