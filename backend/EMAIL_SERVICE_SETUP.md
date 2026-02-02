# Email Service Setup

## Features Implemented
1. **Registration Email** - Sent after successful user registration
2. **Password Reset Email** - Sent with reset link when user requests password reset
3. **Booking Confirmation Email** - Sent after service/product booking

## Setup Instructions

### 1. Install Dependencies
Already installed: `nodemailer`

### 2. Configure Environment Variables
Add to your `.env` file:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
FRONTEND_URL=http://localhost:3000
```

### 3. Gmail App Password Setup
1. Go to your Google Account settings
2. Navigate to Security > 2-Step Verification (enable if not already)
3. Go to Security > App passwords
4. Select "Mail" and "Other (Custom name)"
5. Copy the 16-character password
6. Use this as `EMAIL_PASSWORD` in .env

### 4. API Endpoints

#### Registration (Already existing - now sends email)
```
POST /api/auth/register
Body: { name, email, phone, password, role }
```

#### Forgot Password (New)
```
POST /api/auth/forgot-password
Body: { email }
```

#### Reset Password (New)
```
POST /api/auth/reset-password/:token
Body: { password }
```

#### Create Booking (Already existing - now sends email)
```
POST /api/bookings
Body: { customerName, email, phone, serviceId/productId, preferredDate, preferredTime, amount, ... }
```

## Email Templates

All emails include:
- Professional HTML formatting
- Company branding (Jass Automotives)
- Relevant booking/account details
- Clear call-to-action

## Testing
1. Update `.env` with valid Gmail credentials
2. Register a new user - check email
3. Request password reset - check email for reset link
4. Create a booking - check email for confirmation

## Notes
- Reset password tokens expire in 1 hour
- Emails are sent asynchronously
- Error handling included for failed email sends
