const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

const emailTemplate = (content) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #ECECEC; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
    .header { background-color: #292929; padding: 30px; text-align: center; }
    .logo { max-width: 200px; height: auto; }
    .content { padding: 40px 30px; color: #292929; }
    .content h2 { color: #C90000; margin-top: 0; }
    .button { display: inline-block; padding: 15px 40px; background-color: #C90000; color: #ffffff; text-decoration: none; border-radius: 5px; font-weight: 600; margin: 20px 0; }
    .button:hover { background-color: #860000; }
    .details { background-color: #ECECEC; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .details ul { list-style: none; padding: 0; margin: 0; }
    .details li { padding: 8px 0; border-bottom: 1px solid #DBDBDB; }
    .details li:last-child { border-bottom: none; }
    .footer { background-color: #292929; color: #B0B0B0; padding: 20px; text-align: center; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://res.cloudinary.com/dvl9vfhhy/image/upload/v1770014615/logo192_oxibrh.png" alt="Jass Automotives" class="logo" />
    </div>
    ${content}
    <div class="footer">
      <p>© 2024 Jass Automotives. All rights reserved.</p>
      <p>Premium Automotive Care & Protection Services</p>
    </div>
  </div>
</body>
</html>
`;

const sendRegistrationEmail = async (email, name) => {
  const content = `
    <div class="content">
      <h2>Welcome ${name}!</h2>
      <p>Thank you for registering with Jass Automotives.</p>
      <p>Your account has been successfully created and you can now access our premium automotive services including:</p>
      <div class="details">
        <ul>
          <li>✓ Paint Protection Film (PPF)</li>
          <li>✓ Ceramic Coating</li>
          <li>✓ Professional Detailing</li>
          <li>✓ Expert Installation</li>
        </ul>
      </div>
      <p>Start protecting your vehicle today!</p>
    </div>
  `;
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Welcome to Jass Automotives',
    html: emailTemplate(content)
  };
  await transporter.sendMail(mailOptions);
};

const sendPasswordResetEmail = async (email, resetToken) => {
  const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
  const content = `
    <div class="content">
      <h2>Password Reset Request</h2>
      <p>You requested to reset your password for your Jass Automotives account.</p>
      <p>Click the button below to reset your password:</p>
      <a href="${resetUrl}" class="button">Reset Password</a>
      <p style="color: #585858; font-size: 14px;">Or copy this link: ${resetUrl}</p>
      <div class="details">
        <p><strong>Important:</strong></p>
        <ul>
          <li>This link expires in 1 hour</li>
          <li>If you didn't request this, please ignore this email</li>
          <li>Your password won't change until you create a new one</li>
        </ul>
      </div>
    </div>
  `;
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Password Reset Request - Jass Automotives',
    html: emailTemplate(content)
  };
  await transporter.sendMail(mailOptions);
};

const sendBookingConfirmation = async (email, bookingDetails) => {
  const { customerName, orderId, product, service, preferredDate, preferredTime, amount, applicationType, selectedAddons, carMake, carModel } = bookingDetails;
  const shortOrderId = orderId.toString().slice(-8);
  
  if (product) {
    const addonsHtml = selectedAddons && selectedAddons.length > 0 
      ? `<li><strong>Add-Ons:</strong> ${selectedAddons.join(', ')}</li>`
      : '';
    
    const content = `
      <div class="content">
        <h2>Booking Confirmed!</h2>
        <p>Dear ${customerName},</p>
        <p>Your product booking has been successfully confirmed at Jass Automotives.</p>
        <div class="details">
          <h3 style="color: #C90000; margin-top: 0;">Order Information:</h3>
          <ul>
            <li><strong>Order ID:</strong> #${shortOrderId}</li>
          </ul>
        </div>
        <div class="details">
          <h3 style="color: #C90000; margin-top: 0;">Product Details:</h3>
          <ul>
            <li><strong>Product:</strong> ${product.name}</li>
            <li><strong>Brand:</strong> ${product.brand}</li>
            <li><strong>Category:</strong> ${product.category}</li>
          </ul>
        </div>
        <div class="details">
          <h3 style="color: #C90000; margin-top: 0;">Booking Details:</h3>
          <ul>
            <li><strong>Vehicle:</strong> ${carMake} ${carModel}</li>
            <li><strong>Date:</strong> ${preferredDate}</li>
            <li><strong>Time:</strong> ${preferredTime}</li>
            <li><strong>Application Location:</strong> ${applicationType || 'At Store'}</li>
            ${addonsHtml}
            <li><strong>Total Amount:</strong> ${amount}</li>
          </ul>
        </div>
        <p>Our team will contact you shortly to confirm the final details and answer any questions you may have.</p>
        <p style="color: #585858;">Please arrive 10 minutes before your scheduled time.</p>
        <p><strong>Thank you for choosing Jass Automotives!</strong></p>
      </div>
    `;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Product Booking Confirmation - Jass Automotives',
      html: emailTemplate(content)
    };
    await transporter.sendMail(mailOptions);
  } else if (service) {
    const content = `
      <div class="content">
        <h2>Booking Confirmed!</h2>
        <p>Dear ${customerName},</p>
        <p>Your service booking has been successfully confirmed at Jass Automotives.</p>
        <div class="details">
          <h3 style="color: #C90000; margin-top: 0;">Order Information:</h3>
          <ul>
            <li><strong>Order ID:</strong> #${shortOrderId}</li>
          </ul>
        </div>
        <div class="details">
          <h3 style="color: #C90000; margin-top: 0;">Booking Details:</h3>
          <ul>
            <li><strong>Service:</strong> ${service.title || service.name || 'Service'}</li>
            <li><strong>Date:</strong> ${preferredDate}</li>
            <li><strong>Time:</strong> ${preferredTime}</li>
            <li><strong>Amount:</strong> ${amount}</li>
          </ul>
        </div>
        <p>Our team will contact you shortly to confirm the final details and answer any questions you may have.</p>
        <p style="color: #585858;">Please arrive 10 minutes before your scheduled time.</p>
        <p><strong>Thank you for choosing Jass Automotives!</strong></p>
      </div>
    `;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Service Booking Confirmation - Jass Automotives',
      html: emailTemplate(content)
    };
    await transporter.sendMail(mailOptions);
  }
};

module.exports = { sendRegistrationEmail, sendPasswordResetEmail, sendBookingConfirmation };
