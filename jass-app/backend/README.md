# Jass Automotives Backend API

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Setup MongoDB Atlas (Cloud Database)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or login
3. Create a new cluster (free tier available - M0)
4. Click "Database Access" and create a database user with username and password
5. Click "Network Access" and add your IP address (or 0.0.0.0/0 for development)
6. Click "Connect" on your cluster
7. Choose "Connect your application"
8. Copy the connection string

### 3. Configure Environment Variables

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Update `.env` file:
   - Replace `<username>` with your MongoDB Atlas username
   - Replace `<password>` with your MongoDB Atlas password
   - Replace `xxxxx` with your cluster ID from the connection string
   - Change `JWT_SECRET` to a secure random string

Example:
```
MONGODB_URI=mongodb+srv://myuser:mypassword@cluster0.abc123.mongodb.net/jass-automotives?retryWrites=true&w=majority
```

### 4. Run the Server

Development mode (with auto-restart):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

Server will run on http://localhost:5000

### 5. Create Admin User

Run the seed script to create default admin user:
```bash
npm run seed:admin
```

**Default Admin Credentials:**
- Email: admin@jassautomotives.com
- Password: admin123

**Important:** Change the password after first login!

---

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/profile` - Get user profile (Protected)

### Services
- GET `/api/services` - Get all services
- GET `/api/services/:id` - Get service by ID
- POST `/api/services` - Create service (Vendor only)
- PUT `/api/services/:id` - Update service (Vendor only)
- DELETE `/api/services/:id` - Delete service (Vendor only)

### Products
- GET `/api/products` - Get all products
- GET `/api/products/:id` - Get product by ID
- POST `/api/products` - Create product (Vendor only)
- PUT `/api/products/:id` - Update product (Vendor only)
- DELETE `/api/products/:id` - Delete product (Vendor only)

### Vendors
- GET `/api/vendors` - Get all vendors (Admin only)
- POST `/api/vendors` - Create vendor (Admin only)
- PUT `/api/vendors/:id/status` - Update vendor status (Admin only)
- DELETE `/api/vendors/:id` - Delete vendor (Admin only)

### Bookings
- GET `/api/bookings` - Get bookings (User sees own, Vendor sees assigned, Admin sees all)
- POST `/api/bookings` - Create booking (User)
- PUT `/api/bookings/:id/status` - Update booking status (Vendor/Admin)

## Database Models

- **User**: name, email, phone, password, role (user/vendor/admin), status
- **Service**: title, category, image, description, keyPoints, duration, price, vendorId
- **Product**: name, brand, category, image, description, price, features, specifications, vendorId
- **Vendor**: userId, location, username
- **Booking**: userId, serviceId/productId, vendorId, customerDetails, carDetails, status

## Folder Structure
```
backend/
├── config/          # Database configuration
├── controllers/     # Request handlers
├── models/          # MongoDB schemas
├── routes/          # API routes
├── middleware/      # Auth middleware
├── .env            # Environment variables
├── server.js       # Entry point
└── package.json    # Dependencies
```
