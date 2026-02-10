# Fifi's Collection E-Commerce Website

## Overview
Fifi's Collection is a full-featured e-commerce website specializing in sneakers, clothing, and fashion items. The platform offers a complete shopping experience with user authentication, product browsing, cart management, and order tracking.

## Project Structure

### Core Pages
- **index.html** - Homepage with featured products and promotions
- **Home.html** - Alternative home page version
- **Clothings.html** - Clothing category landing page
- **clothes-2.html** - Secondary clothing page variant
- **Nike.html** - Nike products showcase
- **Nike Display.html** - Nike products display page
- **Vans Display.html** - Vans products display page
- **Sale.html** - Sale items and promotions
- **Product1.html, Product2.html, Product3.html, Product4.html** - Individual product detail pages
- **Page2.html, Page3.html** - Additional category/product pages

### User Account Pages
- **Account.html** - User account management
- **Cart.html, CartPage.html** - Shopping cart interface
- **Order status.html** - Order tracking and history
- **forgotPassword.html** - Password recovery
- **Aboutus.html** - Company information
- **Terms$Policies.html** - Terms of service and privacy policies

### Styling Files
- **index.css** - Main stylesheet
- **styles.css** - Additional global styles
- **Nike.css** - Nike section-specific styles

### JavaScript Files
- **index.js** - Main interactive functionality (DOM manipulation, event handling)
- **main.js** - Additional utility functions
- **script.js** - Firebase authentication and user management
- **firebase.js** - Firebase database integration (Auth v10.11.1, Realtime Database)

### Assets
- **Images/** - Product images (sneakers, clothing, logos, payment methods)
  - Nike product images (Air Jordan, Air Force, Nike Dunk variations)
  - New Balance product images
  - Brand logos (Nike, Adidas, Puma, Vans, etc.)
  - Payment method icons (Google Pay, PayPal, Mastercard, Visa, Revolut, etc.)
  - Clothing category images
  - Product photos and lifestyle images
- **Logos/** - Brand and company logos
- **Image/** - Additional image assets including SmartBand.avif

## Features

### Shopping Experience
- Product browsing by category (Nike, Vans, New Balance, Clothing)
- Detailed product pages with multiple images
- Shopping cart functionality
- Sale section with discounted items
- Responsive design for mobile and desktop
- Search functionality

### User Management
- Firebase-based authentication
- User account creation and login
- Password recovery functionality
- Order history and tracking
- User profile management

### Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Firebase Realtime Database
- **Authentication**: Firebase Authentication (v10.9.0 & v10.11.1)
- **Icons**: Font Awesome
- **Image Formats**: PNG, WebP, AVIF (optimized for performance)
- **Version Control**: Git

## Getting Started

### Prerequisites
- Modern web browser with JavaScript enabled
- Internet connection for Firebase and external resources

### Installation
1. Clone the repository to your local machine
2. Navigate to the project directory
3. Open `index.html` in your web browser

### Development
- Edit HTML files to modify page structure
- Update CSS files (`index.css`, `styles.css`, `Nike.css`) for styling
- Modify JavaScript files for functionality changes
- Firebase credentials are configured in `firebase.js` and `script.js`

## File Organization

```
fifi-scollection.com/
├── HTML Pages
│   ├── index.html (homepage)
│   ├── Clothings.html
│   ├── Nike.html
│   ├── Product[1-4].html
│   ├── Account.html
│   ├── Cart.html
│   ├── forgotPassword.html
│   └── ... (other pages)
├── Styles
│   ├── index.css
│   ├── styles.css
│   └── Nike.css
├── Scripts
│   ├── index.js
│   ├── script.js
│   ├── firebase.js
│   └── main.js
├── Images/
│   ├── Nike product images
│   ├── New Balance images
│   ├── Clothing items
│   ├── Brand logos
│   ├── Payment method icons
│   └── Logos/
└── Configuration Files
    ├── CNAME (domain configuration)
    └── README.md
```

## Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Notes
- Images include modern formats (WebP, AVIF) for better performance and reduced file sizes
- Multiple product image variants for different categories
- Firebase integration for scalable, real-time backend
- Responsive design optimized for mobile-first approach

## Key Integrations
- **Firebase Authentication**: Secure user login and registration
- **Firebase Realtime Database**: Real-time data synchronization for orders and user data
- **Font Awesome Icons**: Professional icon library for UI elements
- **GitHub Pages**: Deployed at https://griffin250.github.io/fifi-scollection.com/

## Future Enhancements
- Payment gateway integration (currently showing icons for Google Pay, PayPal, Mastercard, Visa, etc.)
- Email notifications for order updates
- Advanced product filtering and sorting
- User reviews and ratings system
- Wishlist/Favorites functionality
- Mobile app version
- Real-time inventory management

## Credits
- **Developer**: Griffin Techs
- **Website**: [Fifi's Collection](https://griffin250.github.io/fifi-scollection.com/index.html)
- **Icons**: Font Awesome
- **Backend**: Firebase
- **Hosting**: GitHub Pages

## License
This project is licensed under the MIT License.
