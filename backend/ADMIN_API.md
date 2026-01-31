# Admin API Documentation

## Authentication
All admin endpoints require authentication with admin role.

**Headers Required:**
```
Authorization: Bearer <jwt_token>
```

## Admin Endpoints

### 1. Get Dashboard Stats
Get overview statistics for admin dashboard.

**Endpoint:** `GET /api/admin/stats`

**Response:**
```json
{
  "totalOrders": 47,
  "pendingOrders": 12,
  "completedOrders": 30,
  "totalVendors": 5,
  "totalServices": 15,
  "totalProducts": 8,
  "totalUsers": 120
}
```

---

### 2. Get All Users
Get list of all registered users.

**Endpoint:** `GET /api/admin/users`

**Response:**
```json
[
  {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+919876543210",
    "role": "user",
    "status": "Active",
    "createdAt": "2024-01-20T10:00:00.000Z"
  }
]
```

---

### 3. Update User Status
Activate or deactivate a user.

**Endpoint:** `PUT /api/admin/users/:id/status`

**Request Body:**
```json
{
  "status": "Active" // or "Inactive"
}
```

**Response:**
```json
{
  "message": "User status updated"
}
```

---

### 4. Delete User
Remove a user from the system.

**Endpoint:** `DELETE /api/admin/users/:id`

**Response:**
```json
{
  "message": "User removed"
}
```

---

### 5. Get All Bookings
Get list of all bookings with details.

**Endpoint:** `GET /api/admin/bookings`

**Response:**
```json
[
  {
    "_id": "booking_id",
    "userId": {
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+919876543210"
    },
    "serviceId": {
      "title": "Ceramic Coating",
      "price": "₹25,000"
    },
    "customerName": "John Doe",
    "carMake": "Toyota",
    "carModel": "Camry",
    "location": "Film Nagar",
    "preferredDate": "2024-01-25",
    "preferredTime": "10:00 AM",
    "status": "Pending",
    "createdAt": "2024-01-20T10:00:00.000Z"
  }
]
```

---

### 6. Update Booking Status
Change booking status.

**Endpoint:** `PUT /api/admin/bookings/:id/status`

**Request Body:**
```json
{
  "status": "Confirmed" // Pending, Confirmed, Completed, Cancelled
}
```

**Response:**
```json
{
  "message": "Booking status updated",
  "booking": { /* updated booking object */ }
}
```

---

### 7. Get Orders by Store
Get booking count grouped by store location.

**Endpoint:** `GET /api/admin/orders-by-store`

**Response:**
```json
[
  {
    "store": "Film Nagar",
    "orders": 18
  },
  {
    "store": "Hi-Tech City",
    "orders": 16
  }
]
```

---

### 8. Get Services Breakdown
Get booking count grouped by service type.

**Endpoint:** `GET /api/admin/services-breakdown`

**Response:**
```json
[
  {
    "service": "Ceramic Coating",
    "count": 23
  },
  {
    "service": "PPF Installation",
    "count": 18
  }
]
```

---

### 9. Delete Service
Remove a service from the system.

**Endpoint:** `DELETE /api/admin/services/:id`

**Response:**
```json
{
  "message": "Service removed"
}
```

---

### 10. Delete Product
Remove a product from the system.

**Endpoint:** `DELETE /api/admin/products/:id`

**Response:**
```json
{
  "message": "Product removed"
}
```

---

## Vendor Management Endpoints

### 11. Get All Vendors
**Endpoint:** `GET /api/vendors`

**Response:**
```json
[
  {
    "_id": "vendor_id",
    "userId": {
      "name": "Vendor Name",
      "email": "vendor@example.com",
      "phone": "+919876543210",
      "status": "Active"
    },
    "location": "Film Nagar",
    "username": "vendor1"
  }
]
```

---

### 12. Create Vendor
**Endpoint:** `POST /api/vendors`

**Request Body:**
```json
{
  "name": "Vendor Name",
  "email": "vendor@example.com",
  "phone": "+919876543210",
  "location": "Film Nagar",
  "username": "vendor1",
  "password": "password123"
}
```

**Response:**
```json
{
  "user": { /* user object */ },
  "vendor": { /* vendor object */ }
}
```

---

### 13. Update Vendor Status
**Endpoint:** `PUT /api/vendors/:id/status`

**Request Body:**
```json
{
  "status": "Active" // or "Inactive"
}
```

---

### 14. Delete Vendor
**Endpoint:** `DELETE /api/vendors/:id`

**Response:**
```json
{
  "message": "Vendor removed"
}
```

---

## Error Responses

All endpoints may return the following error responses:

**401 Unauthorized:**
```json
{
  "message": "Not authorized, no token"
}
```

**403 Forbidden:**
```json
{
  "message": "Not authorized as admin"
}
```

**404 Not Found:**
```json
{
  "message": "Resource not found"
}
```

**500 Server Error:**
```json
{
  "message": "Error message details"
}
```

---

## Setup Admin User

Run the seed script to create default admin user:

```bash
npm run seed:admin
```

**Default Admin Credentials:**
- Email: admin@jassautomotives.com
- Password: admin123

**Important:** Change the password after first login!
