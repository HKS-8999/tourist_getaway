import React from 'react';

function DeprecatedPage() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh', // Full viewport height
            textAlign: 'center',
            padding: '20px',
            fontFamily: 'Arial, sans-serif', // Basic font for broad compatibility
            backgroundColor: '#f8f9fa', // Light gray background
            color: '#343a40' // Dark gray text
        }}>
            {/* Main title of the message */}
            <h1 style={{
                fontSize: '2.5rem', // Larger font size for the title
                color: '#dc3545', // Red color for emphasis (danger/warning)
                marginBottom: '20px'
            }}>
                Important Application Update Required
            </h1>
            {/* Informational paragraph */}
            <p style={{
                fontSize: '1.2rem', // Readable font size for the message
                lineHeight: '1.6',
                maxWidth: '600px', // Limit width for better readability
                marginBottom: '10px'
            }}>
                The application cannot start because some of its core dependencies are outdated or deprecated.
            </p>
            <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.6',
                maxWidth: '600px',
                marginBottom: '30px'
            }}>
                To ensure continued functionality and security, these dependencies need to be updated.
            </p>
            {/* Call to action / contact information */}
            <p style={{
                fontSize: '1.1rem',
                fontWeight: 'bold'
            }}>
                Please contact the developer for assistance.
            </p>
            {/* Optional: Add a contact email or link if appropriate */}
            {/*
            <p style={{ marginTop: '20px' }}>
                Contact: <a href="mailto:support@example.com" style={{ color: '#007bff' }}>support@example.com</a>
            </p>
            */}
        </div>
    );
}

export default DeprecatedPage;
