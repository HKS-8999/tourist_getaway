# Tourist Getaways - Travel & Tour Booking Website

Welcome to Tourist Getaways, a React-based application designed to showcase exciting domestic and international travel packages and allow users to make booking inquiries.

## Description

This project is a front-end application for a travel agency, "Tourist Getaways." It features a responsive design, displaying various travel destinations with descriptions and images. Users can explore different packages and submit booking inquiries through a modal form. The contact form submissions are handled using Web3Forms.

## Features

* **Homepage:** An engaging landing page introducing "Tourist Getaways," highlighting key selling points, and providing navigation to package pages.
* **Domestic Packages Page:** Displays a grid of domestic travel destinations with descriptions and images. Users can initiate a booking inquiry for a selected package.
* **International Packages Page:** Similar to the domestic page, but showcases international travel destinations.
* **Booking Inquiry Modal:** A user-friendly modal form that allows users to submit their name, email, contact number, and selected destination for booking inquiries.
* **Contact Us Page:** Provides contact information including email address, phone number, Instagram handle, and physical location.
* **Responsive Design:** Built with Tailwind CSS for adaptability across various screen sizes. (Inferred from class names like `sm:py-16`, `md:py-20`, `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` seen in multiple files)
* **Dynamic Image Fallbacks:** Placeholder images are used if actual package or header images fail to load.
* **Web3Forms Integration:** Contact form submissions from the booking modals are sent to a designated email address via Web3Forms.
* **Iconography:** Uses Lucide React for clean and modern icons.

## Tech Stack

* **React:** Core JavaScript library for building the user interface.
* **Tailwind CSS:** (Inferred) A utility-first CSS framework for styling.
* **React Router:** (Inferred from `<Link to="...">` components in `HomePage.jsx`) For client-side routing and navigation.
* **Lucide React:** For SVG icons.
* **Web3Forms:** For handling backend form submissions to email.

## Project Structure Overview

The project includes the following main page components located in the `pages/` directory:

* `HomePage.jsx`: The main landing page of the application.
* `DomesticPackagesPage.jsx`: Displays domestic travel packages and includes a booking modal.
* `InternationalPackagesPage.jsx`: Displays international travel packages and includes a booking modal.
* `ContactUsPage.jsx`: Shows contact details for the agency.

Key reusable components observed:
* `BookingFormModal`: Used in both package pages for booking inquiries.
* `Input`: A styled input component used within the booking form.
* `Testimonial`: Mentioned as an import in `DomesticPackagesPage.jsx`, suggesting a testimonials section.

Assets (like images and logos) are expected to be in an `src/assets/` directory as per image paths in the code (e.g., `/src/assets/domestic/goa.jpg`, `../assets/logo.png`).

## Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Set up Environment Variables:**
    Create a `.env` file in the root of your project. Add your Web3Forms access key to this file.
    If using Vite:
    ```env
    VITE_WEB3FORMS_ACCESS_KEY=YOUR_ACTUAL_WEB3FORMS_ACCESS_KEY_HERE
    ```
    If using Create React App:
    ```env
    REACT_APP_WEB3FORMS_ACCESS_KEY=YOUR_ACTUAL_WEB3FORMS_ACCESS_KEY_HERE
    ```
    **Important:** Add the `.env` file to your `.gitignore` to prevent committing your access key.

4.  **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    # (or npm run dev / yarn dev if using Vite)
    ```
    The application should now be running on `http://localhost:3000` (or another port if specified).

## Available Scripts

In the project directory, you can run:

* `npm start` or `yarn start` (or `dev`): Runs the app in development mode.
* `npm run build` or `yarn build`: Builds the app for production to the `build` folder (or `dist` for Vite).
* `npm test` or `yarn test`: Launches the test runner in interactive watch mode (if tests are set up).

## How to Use

Navigate through the application using the UI:
* Start at the **Homepage** to get an overview.
* Explore packages on the **Domestic Packages** and **International Packages** pages.
* Click "Book with Us" on any package to open the booking inquiry form.
* Fill out the form and submit it. The details will be sent to the configured email address via Web3Forms.
* Visit the **Contact Us** page for direct contact information.

---