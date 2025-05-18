import React, { useState } from 'react';
import { X } from 'lucide-react'; // Using Lucide for the close icon

// Sample data for international packages/cities
// Replace with your actual international destinations data
const internationalCities = [
    {
        id: "singapore",
        name: "Singapore",
        imageUrl: "/src/assets/international/singapore.jpg",
        description: "Futuristic cityscapes and lush garden oases."
    },
    {
        id: "malaysia",
        name: "Malaysia",
        imageUrl: "/src/assets/international/malaysia.jpg",
        description: "Diverse cultures, stunning rainforests, and vibrant cities."
    },
    {
        id: "thailand",
        name: "Thailand",
        imageUrl: "/src/assets/international/thailand.jpg",
        description: "Ornate temples, beautiful beaches, and bustling street life."
    },
    {
        id: "maldives",
        name: "Maldives",
        imageUrl: "/src/assets/international/maldives.jpg",
        description: "Luxurious overwater bungalows and pristine turquoise lagoons."
    }
]

// Reusable Input component for the form - styled for light theme
// For a larger application, this component should be in a shared file.
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
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-150 ease-in-out bg-white text-slate-900 placeholder-slate-400"
        />
    </div>
);

// BookingFormModal component - explicitly styled for light theme
// For a larger application, this component should be in a shared file.
const BookingFormModal = ({ isOpen, onClose, selectedCity }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        destination: selectedCity?.name || '',
    });
    const [submissionMessage, setSubmissionMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    React.useEffect(() => {
        if (selectedCity) {
            setFormData(prev => ({ ...prev, destination: selectedCity.name }));
        }
    }, [selectedCity]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.contactNumber) {
            setSubmissionMessage({ type: 'error', text: 'Please fill out all required fields.' });
            return;
        }
        setIsSubmitting(true);
        setSubmissionMessage({ type: 'info', text: 'Submitting your request...' });

        console.log('Form data to be submitted (International):', formData);
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmissionMessage({ type: 'success', text: `Thank you, ${formData.name}! Your booking inquiry for ${formData.destination} has been received. We will contact you shortly.` });
            setFormData({ name: '', email: '', contactNumber: '', destination: selectedCity?.name || '' });
            setTimeout(() => {
                onClose();
                setSubmissionMessage('');
            }, 4000);
        } catch (error) {
            console.error("Submission error:", error);
            setSubmissionMessage({ type: 'error', text: 'There was an error submitting your request. Please try again.' });
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
                <h2 className="text-2xl font-semibold text-slate-800 mb-2">Book Your International Trip</h2>
                <p className="text-sm text-slate-600 mb-6">
                    Inquire about our package for <span className="font-semibold text-sky-600">{selectedCity?.name || 'this destination'}</span>.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
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
                        placeholder="+1 (555) 123-4567" // Example placeholder
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
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

// InternationalPackagesPage component
function InternationalPackagesPage() {
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

    // Placeholder image for the header background
    const headerBackgroundImageUrl = "/src/assets/international/international_header.jpg"; // A generic international travel image

    return (
        <div className="bg-slate-50 min-h-[calc(100vh-5rem)]">
            {/* Enhanced Header Section with further reduced padding */}
            <div
                className="relative bg-cover bg-center py-12 sm:py-16 md:py-20 flex items-center justify-center" // Further reduced vertical padding
                style={{ backgroundImage: `url(${headerBackgroundImageUrl})` }}
                onError={(e) => { e.target.style.backgroundImage = `url(https://placehold.co/1600x300/64748B/E0E7FF?text=Explore+International+Destinations)`; e.target.style.backgroundColor = '#64748B';}}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 text-center container mx-auto px-4">
                    {/* Inner text block with further reduced padding and adjusted font sizes */}
                    <div className="inline-block bg-black/40 backdrop-blur-md p-3 sm:p-4 md:p-6 rounded-lg shadow-xl">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 tracking-tight">Discover Global Destinations</h1> {/* Further adjusted font size and margin */}
                        <p className="text-sm md:text-base lg:text-lg text-slate-200 max-w-xl sm:max-w-2xl mx-auto"> {/* Further adjusted font size and max-width */}
                            Embark on unforgettable journeys to iconic international locations. Adventure awaits beyond the horizon.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main content area for city grid */}
            <div className="container mx-auto px-4 py-12 md:py-16">
                {internationalCities.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {internationalCities.map((city) => (
                            <div
                                key={city.id}
                                className="relative rounded-xl shadow-lg overflow-hidden group transform hover:scale-105 transition-transform duration-300 ease-out bg-white"
                            >
                                <img
                                    src={city.imageUrl}
                                    alt={`Scenic view of ${city.name}`}
                                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                                    onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/600x400/E2E8F0/475569?text=${encodeURIComponent(city.name)}`; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6 w-full">
                                    <h3 className="text-2xl font-semibold text-white mb-1">{city.name}</h3>
                                    <p className="text-sm text-slate-200 mb-4 line-clamp-2">{city.description}</p>
                                    <button
                                        onClick={() => openModal(city)}
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
                        <h2 className="text-2xl font-semibold text-slate-700 mb-4">No International Packages Available Yet</h2>
                        <p className="text-slate-500">
                            We're busy crafting unique global travel experiences. Please check back soon!
                        </p>
                    </div>
                )}
            </div>
            <BookingFormModal isOpen={isModalOpen} onClose={closeModal} selectedCity={selectedCity} />
        </div>
    );
}

export default InternationalPackagesPage;
