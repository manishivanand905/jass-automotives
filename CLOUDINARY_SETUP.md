# Cloudinary Setup Instructions

## Steps to Configure Cloudinary:

1. **Create a Cloudinary Account** (if you don't have one):
   - Go to https://cloudinary.com/
   - Sign up for a free account

2. **Get Your Credentials**:
   - After logging in, go to your Dashboard
   - You'll see three important values:
     - Cloud Name
     - API Key
     - API Secret

3. **Update Backend .env File**:
   - Open `backend/.env`
   - Replace the placeholder values with your actual credentials:
     ```
     CLOUDINARY_CLOUD_NAME=your_actual_cloud_name
     CLOUDINARY_API_KEY=your_actual_api_key
     CLOUDINARY_API_SECRET=your_actual_api_secret
     ```

4. **Restart Backend Server**:
   - Stop the backend server (Ctrl+C)
   - Start it again: `npm run dev` or `npm start`

## What Changed:

### Backend:
- ✅ Installed `cloudinary` package
- ✅ Created `config/cloudinary.js` for Cloudinary configuration
- ✅ Updated `uploadMiddleware.js` to use memory storage (required for Cloudinary)
- ✅ Updated `productController.js` to upload images to Cloudinary instead of local storage
- ✅ Added Cloudinary credentials to `.env` file

### How It Works:
- When admin/vendor uploads an image, it's sent to the backend
- Backend uploads the image to Cloudinary
- Cloudinary returns a secure URL (e.g., https://res.cloudinary.com/your-cloud/image/upload/...)
- This URL is saved in the database
- Frontend displays images using the Cloudinary URL

### Benefits:
- ✅ Images are stored in the cloud (not on your server)
- ✅ Automatic image optimization
- ✅ CDN delivery for faster loading
- ✅ No need to manage local uploads folder
- ✅ Works perfectly on live servers
- ✅ Images are accessible from anywhere

## Testing:
1. Update the .env credentials
2. Restart backend
3. Go to Admin/Vendor page
4. Add or edit a product with an image
5. The image will be uploaded to Cloudinary
6. Check your Cloudinary dashboard to see the uploaded image in the "automotives" folder
