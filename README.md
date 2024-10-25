# Modazen - Online Fashion Store

## Project Description

Modazen is an online shopping platform designed for clothes and accessories, similar to Myntra. The website allows users to explore a wide variety of fashion products, add them to their wishlist, and manage their shopping cart. Users can proceed to checkout with a secure payment gateway to complete their orders. Modazen aims to deliver a seamless shopping experience with features like product browsing, wishlist management, and secure payments.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Installation and Setup](#installation-and-setup)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [Contact Information](#contact-information)

## Features

- **Google OAuth Login:** Seamless and secure login using Google account credentials.
- **Mobile OTP Login (Twilio):** Secure mobile authentication with OTP verification through Twilio.
- **Razorpay Payment Integration:** Reliable and secure payment processing through Razorpay.
- **Dynamic Product Filtering:** Filter products dynamically based on various attributes like category, price, and brand.
- **Categories:** Browse products organized under multiple categories.
- **New Arrivals:** Stay updated with the latest additions to the store.
- **Featured Products:** View specially curated products based on popularity.
- **Product Listings:** Detailed product information, including descriptions, images, and pricing.
- **Search:** Quickly locate products using an optimized search feature.
- **Wishlist Management:** Add products to your wishlist for future reference.
- **Shopping Cart:** Add selected items to your cart and easily manage your checkout.
- **Order Management:** Keep track of your placed orders, with details on status and history.
- **Company Information Pages:** Comprehensive pages for About Us, Contact Us, Privacy Policy, and Terms of Service.

## Technologies Used

### Frontend

- **React.js:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Font Awesome:** Icon library for scalable vector icons.
- **Bootstrap:** Frontend framework for responsive design.
- **Axios:** Promise-based HTTP client for making API requests.
- **React Router:** Declarative routing for React.js applications.
- **React Toastify:** Notification library for easy notifications in React.
- **Swiper:** Mobile touch slider for implementing swiping functionality.

### Backend

- **Node.js:** JavaScript runtime for building scalable network applications.
- **Express.js:** Web application framework for Node.js.
- **MongoDB:** NoSQL database for storing product and user data.
- **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JSON Web Tokens (JWT):** Authentication mechanism for secure user sessions.
- **Twilio:** Service for mobile OTP authentication.
- **Razorpay:** Payment gateway for processing payments securely.

## Deployment

- **Vercel:** Platform for frontend deployment and hosting.

## Installation and Setup

To set up the Modazen project locally, follow these steps:

### Prerequisites

- Node.js (version 14 or later)
- MongoDB (running locally or via a cloud provider)
- A package manager (npm or yarn)

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Pruthviraj-03/Modazen.git
   ```

2. Navigate to the backend directory:

   ```bash
   cd backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the backend directory and add the necessary environment variables:

   ```env
   MONGO_URI=<your_mongo_connection_string>
   JWT_SECRET=<your_jwt_secret>
   TWILIO_ACCOUNT_SID=<your_twilio_account_sid>
   TWILIO_AUTH_TOKEN=<your_twilio_auth_token>
   RAZORPAY_KEY_ID=<your_razorpay_key_id>
   RAZORPAY_SECRET_KEY=<your_razorpay_secret_key>
   ```

5. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend server:
   ```bash
   npm start
   ```

### Access the Application

Open your browser and go to `http://localhost:3000` to view the Modazen application.

## API Documentation

The Modazen application features a custom API for managing product listings. Below are the details for the products API endpoint:

### Products API

#### Get All Products

- **Endpoint:** `GET /api/products`
- **Response:**
  ```json
  [
    {
      "id": "138",
      "name": "MBJ Womens Short Dark Purple Top",
      "desc": "MBJ Womens Short Sleeve Various Hem Tunic Top - Made in USA",
      "price": "$530",
      "originalPrice": "$600",
      "discount": "40% OFF",
      "category": "Tops",
      "pricerange": "$500 - $750",
      "rating": "3",
      "size": "S",
      "images": [
        "image686.jpg",
        "image687.jpg",
        "image688.jpg",
        "image689.jpg",
        "image690.jpg"
      ]
    },
    ...
  ]
  ```
- **Description:** Returns a list of all available products (total of 205 products).

#### Get Product by ID

- **Endpoint:** `GET /api/products/:id`
- **Response:**
  ```json
  {
    "id": "138",
    "name": "MBJ Womens Short Dark Purple Top",
    "desc": "MBJ Womens Short Sleeve Various Hem Tunic Top - Made in USA",
    "price": "$530",
    "originalPrice": "$600",
    "discount": "40% OFF",
    "category": "Tops",
    "pricerange": "$500 - $750",
    "rating": "3",
    "size": "S",
    "images": [
      "image686.jpg",
      "image687.jpg",
      "image688.jpg",
      "image689.jpg",
      "image690.jpg"
    ]
  }
  ```
- **Description:** Returns detailed information about a specific product based on the provided ID.

### Sample Product Structure

Each product object contains the following fields:

- **id:** Unique identifier for the product.
- **name:** Name of the product.
- **desc:** Description of the product.
- **price:** Current price of the product.
- **originalPrice:** Original price before discount.
- **discount:** Discount information (e.g., "40% OFF").
- **category:** Category the product belongs to (e.g., "Tops").
- **pricerange:** Price range for the product (e.g., "$500 - $750").
- **rating:** Customer rating (e.g., "3").
- **size:** Available size (e.g., "S").
- **images:** Array of image filenames associated with the product.

## Screenshots

Here are some screenshots of the Modazen website for reference:

- **Home Page**  
  ![Home Page](screenshots/Home%20page.jpeg)

- **Categories Page**  
  ![Categories Page](screenshots/categories%20page.jpeg)

- **New Arrivals Page**  
  ![Arrivals Page](screenshots/arrivals%20page.jpeg)

- **Featured Products Page**  
  ![Featured Page](screenshots/featured%20page.jpeg)

- **Products Page**  
  ![Products Page](screenshots/products%20page.jpeg)

- **Login Page**  
  ![Login Page](screenshots/Login%20page.jpeg)

- **Footer Section**  
  ![Footer Page](screenshots/footer%20page.jpeg)

- **Shopping Cart Page**  
  ![Shopping Cart Page](screenshots/shopping%20cart%20page.jpeg)

- **Checkout Page**  
  ![Checkout Page](screenshots/checkout%20page.jpeg)

- **Checkout Complete Page**  
  ![Checkout Complete Page](screenshots/checkout%20complete%20page.jpeg)

- **User Profile Page**  
  ![User Profile Page](screenshots/user%20profile%20page.jpeg)

- **Orders Page**  
  ![Orders Page](screenshots/orders%20page.jpeg)

- **Wishlist Page**  
  ![Wishlist Page](screenshots/wishlist%20page.jpeg)

- **User Profile Details Page**  
  ![User Profile Details Page](screenshots/user%20profile%20details%20page.jpeg)

- **Edit Profile Details Page**  
  ![Edit Profile Details Page](screenshots/edit%20profile%20details%20page.jpeg)

- **About Us Page**  
  ![About Us Page](screenshots/about%20us%20page.jpeg)

- **Contact Us Page**  
  ![Contact Us Page](screenshots/contact%20us%20page.jpeg)

- **Privacy Policy Page**  
  ![Privacy Policy Page](screenshots/privacy%20policy%20page.jpeg)

- **Terms of Service Page**  
  ![Terms of Service Page](screenshots/terms%20of%20services%20page.jpeg)

## Contributing

We welcome contributions to the Modazen project! If you're interested in helping us improve the application, please follow these steps:

1. **Fork the Repository:** Click the "Fork" button in the top right corner of the repository page to create your own copy.
2. **Clone the Forked Repository:**

   ```bash
   git clone https://github.com/your-username/modazen.git
   ```

   Replace `your-username` with your GitHub username.

3. **Create a New Branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

   Replace `your-feature-name` with a descriptive name for your feature or fix.

4. **Make Your Changes:** Implement your feature or bug fix in the codebase.

5. **Commit Your Changes:**

   ```bash
   git add .
   git commit -m "Add your commit message"
   ```

6. **Push to Your Forked Repository:**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request:** Go to the original repository and click on "New Pull Request." Provide a description of your changes and submit the pull request for review.

### Guidelines

- Ensure your code adheres to the project's coding standards and style.
- Write clear commit messages that describe the changes made.
- If your changes include new features, consider adding documentation or examples as needed.

Thank you for your interest in contributing to Modazen!

## Contact Information

For any inquiries or feedback, you can reach me through the following channels:

- **Portfolio:** [Pruthviraj Kurane's Portfolio](https://pruthviraj-kurane.netlify.app/)
- **Email:** pruthvirajkurane03@gmail.com

Feel free to connect with me for collaboration, suggestions, or questions regarding the Modazen project!
