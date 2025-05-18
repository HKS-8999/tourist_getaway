import React from 'react';
// Import icons from lucide-react
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

// Helper component for individual contact items
const ContactDetailItem = ({ icon, title, children, isLink = false }) => (
    // Further reduced padding for a more compact look
    <div className="flex items-start p-2.5 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-500/10 group">
        {/* Icon color changed to a dark gray, hover to black */}
        {/* The icon prop will now receive a Lucide icon component */}
        <div className="flex-shrink-0 text-slate-600 mr-3 sm:mr-4 mt-1 group-hover:text-black transition-colors duration-300">
            {React.cloneElement(icon, { size: 24, className: "w-6 h-6" })} {/* Ensure size and class for Lucide icons */}
        </div>
        <div>
            {/* Font size for title, hover to black */}
            <strong className="block text-slate-800 text-base font-semibold group-hover:text-black transition-colors duration-300">{title}</strong>
            {/* Font size for detail text, link hover to black */}
            {isLink ? (
                <div className="text-slate-700 text-sm sm:text-base hover:text-black transition-colors duration-300">{children}</div>
            ) : (
                <div className="text-slate-700 text-sm sm:text-base">{children}</div>
            )}
        </div>
    </div>
);

// SVG Icon components are no longer needed as we are using lucide-react

// Main ContactUsPage component
function ContactUsPage() {
    // Background image URL
    const destinationImageUrl = "contact-us.jpg";
    // Assuming navbar height is roughly 5rem (h-20 in Tailwind)
    const minPageHeight = "calc(100vh - 5rem)";


    return (
        // This main div will have the background image and center the card
        <div
            className="relative flex items-center justify-center bg-cover bg-center px-4 py-10 sm:py-12" // Reduced vertical padding
            style={{
                backgroundImage: `url(${destinationImageUrl})`,
                minHeight: minPageHeight // Ensure it takes at least the screen height minus navbar
            }}
            onError={(e) => {
                e.target.style.backgroundImage = `url(https://placehold.co/1600x800/4A5568/A0AEC0?text=Connect+With+Us)`;
                e.target.style.backgroundColor = '#4A5568'; // Fallback background color (gray-700)
            }}
        >
            {/* Overlay for better text readability on the card */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Contact Information Card - Centered, smaller, more transparent, with larger fonts */}
            {/* Card background is now more transparent and blurred. Padding reduced. */}
            <div className="relative z-10 w-full max-w-md sm:max-w-lg bg-white/70 backdrop-blur-sm p-3 sm:p-5 rounded-xl shadow-2xl border border-slate-100/50"> {/* Increased transparency, stronger blur, reduced padding */}
                <div className="text-center mb-3 sm:mb-4"> {/* Further reduced bottom margin */}
                    {/* Font size for title, color changed to a darker gray for better contrast on blurred bg */}
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight">
                        Let's Connect
                    </h1>
                    {/* Font size for subtitle */}
                    <p className="text-base sm:text-lg text-slate-800 leading-relaxed">
                        Have questions or ready to plan your next adventure? We're here to help!
                    </p>
                </div>

                <div className="space-y-2 sm:space-y-3"> {/* Further reduced space between items */}
                    {/* Using Lucide icons now */}
                    <ContactDetailItem icon={<Mail />} title="Email Us" isLink>
                        <a href="mailto:touristgetaways@gmail.com">touristgetaways@gmail.com</a>
                    </ContactDetailItem>
                    <ContactDetailItem icon={<Phone />} title="Call Us" isLink>
                        <a href="tel:+918347299151">+91-8347299151</a>
                    </ContactDetailItem>
                    <ContactDetailItem icon={<Instagram />} title="Follow Us on Instagram" isLink>
                        <a href="https://www.instagram.com/tourist_getaways/" target="_blank" rel="noopener noreferrer">@tourist_getaways</a>
                        {/* Replace with your actual Instagram handle and link */}
                    </ContactDetailItem>
                    <ContactDetailItem icon={<MapPin />} title="Our Location">
                        Silvassa, Dadra, Nagar Haveli, Daman and Diu, India
                    </ContactDetailItem>
                </div>
                <p className="mt-4 sm:mt-5 text-base text-slate-700 text-center"> {/* Adjusted margin */}
                    We typically respond to emails within 24 business hours. For urgent inquiries, please call us.
                </p>
            </div>
        </div>
    );
}

export default ContactUsPage;
