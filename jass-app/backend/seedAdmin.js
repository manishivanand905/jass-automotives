const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('./models/Admin');

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const adminExists = await Admin.findOne({ email: 'admin@jassautomotives.com' });

    if (adminExists) {
      console.log('Admin already exists');
      process.exit();
    }

    const admin = await Admin.create({
      name: 'Admin',
      email: 'admin@jassautomotives.com',
      phone: '+919030764455',
      password: 'admin123'
    });

    console.log('Admin created successfully:', admin.email);
    process.exit();
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

seedAdmin();
