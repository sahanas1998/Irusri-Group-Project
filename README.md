React E-Commerce Application
Assignment for Irusri Group Company

Description:
This is a simple e-commerce application built with React and Tailwind CSS, implementing user authentication, product listing, and a shopping cart. The application leverages:
- Redux for state management
- Formik for form validation
- React Router for navigation
- Swiper for creating responsive sliders

The app is responsive across laptops, tablets, and mobile devices. It provides a user-friendly experience with features like routing and local storage integration for seamless usability.

Setup and Installation:

Clone the repository:
git clone <repository-url>
cd <repository-folder>

Install dependencies:
npm install
npm install react-router-dom
npm install react-icons
npm install swiper
npm install formik

Run the project:
npm start
Open your browser and navigate to: http://localhost:3000/

Features:

User Authentication
- Sign Up: Users can register with their full name, email, password, and confirm password.
- Log In: Users can log in using their email and password.
- Authentication state is managed using local storage.

Product List
- Displays a list of products with the following attributes:
- Name
- Price
- Description
- Image
- Size

Shopping Cart
- Add to Cart: Add products to the cart from the product list.
- View Cart:
- View the cart with details like:

Image
Name
Size
Quantity
Individual Prices
Total Price
Remove items from the cart.
Adjust the quantity of items in the cart.
Total Cost: Displays the total cost of all items.
Category Filtering: Filter products by category.
Home Page
Includes the following components:
- Hero Banner
- About Us
- Contact Us Form

Header and Footer
- Navigates to other components and URLs.

Global State Management
- Global access to data is implemented using Redux, such as counting selected products.
- Data is passed from the Blog page to the Header component.

Deployment:
The application is deployed on Netlify.
Access it here: https://vavavsport.netlify.app/

Technologies Used:

Frontend:
- React
- Tailwind CSS

State Management:
- Redux

Form Management:
- Formik

Additional Tools:
- React Icons
- Swiper

Feel free to contribute or report any issues in the repository.
