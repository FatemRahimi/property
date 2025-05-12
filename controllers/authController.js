exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  console.log("Received password reset request for email:", email);
  console.log("Email configuration:", {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS ? "Password is set" : "Password is NOT set"
  });

  try {
    // ... (rest of the function remains unchanged)
  } catch (err) {
    console.error("❌ Forgot password error:", err);
    console.error("Error details:", JSON.stringify(err, Object.getOwnPropertyNames(err)));
    return res.status(500).json({ 
      message: "Error sending password reset email", 
      error: err.message 
    });
  } 
} 