# Backend API

## Live Link
[View Backend API](https://backend-21ab.onrender.com)

## Overview
This backend API powers both the frontend user-facing application and the admin panel. It is built to handle all the necessary operations for managing the dynamic food menu, user authentication, order processing, and payment functionalities. The backend also enables admins to add menu items and manage orders, while users can place orders and complete payments.

## API Endpoints

### 1. **User Authentication**
- **POST /signup**: Allows users to sign up for an account. Requires `email`, `password`, and `username`.
- **POST /login**: Authenticates a user with `email` and `password`. Returns a JWT token for authorization in subsequent requests.
- **POST /logout**: Logs the user out and invalidates the session.

### 2. **Menu Management (Admin Only)**
- **POST /menu/add-item**: Admins can add new items to the menu by providing item details such as `name`, `price`, `category`, and `description`.
- **GET /menu/list**: Returns a list of all available food items on the menu.

### 3. **Order Management (Admin Only)**
- **GET /orders**: Admins can view all the food orders placed by users, including order details and statuses.
- **PATCH /orders/:id**: Admins can update the status of an order (e.g., Processing, Leave for Delivery, Delivered).

### 4. **User Orders (User Side)**
- **POST /order**: Users can place an order by providing food item IDs and quantities. The backend processes the order and returns an order confirmation.
- **GET /order/history**: Users can view their past orders and track the status of current orders.

### 5. **Cart Management**
- **POST /cart/add**: Adds a food item to the user’s cart by providing the `itemID` and `quantity`.
- **GET /cart**: Retrieves the current contents of the user’s cart.
- **DELETE /cart/remove/:itemID**: Removes a specific item from the cart.

### 6. **Payment Processing**
- **POST /payment/checkout**: Processes the payment for the items in the cart. Requires valid payment details and order information.

## Technologies Used
- **Backend Framework**: Node.js, Express
- **Database**: MongoDB for storing user data, menu items, orders, and cart details
- **Authentication**: JWT (JSON Web Token) for secure user sessions
- **Payment Gateway**: Integrated third-party payment processing (e.g., Stripe or PayPal)

## How to Use
1. Visit the live backend API at [Backend API](https://backend-21ab.onrender.com).
2. Access the different API endpoints based on whether you are a user or an admin.
3. For authentication-required routes, include the JWT token in the authorization header.
4. Use the appropriate endpoints for menu management, order processing, and cart operations.

## Future Enhancements
- Adding more robust error handling and validation for all API routes
- Implementing real-time order tracking for users and admins
- Adding notifications for users when their order status changes

## Contact
For any inquiries or further information, you can reach out to the project maintainer at [chaurasiyasachin434@gmail.com].
