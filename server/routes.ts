import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendEmail } from "./mailjet-service"; // Changed import

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for handling contact form submissions
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, project } = req.body;
      
      // Validate inputs
      if (!name || !email || !project) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      
      // Validate email format
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
      }
      
      // Send email notification using Mailjet
      const emailResult = await sendEmail({
        to: "yashpandya0411@gmail.com",
        from: "yashpandya0411@gmail.com", // Must be verified in Mailjet
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${project}</p>
        `,
        text: `
          New Contact Form Submission
          
          Name: ${name}
          Email: ${email}
          Message: ${project}
        `
      });

      if (!emailResult) {
        console.error('Failed to send email notification');
        // Continue processing even if email fails
      }
      
      return res.status(200).json({ 
        message: 'Message received successfully',
        data: { name, email, project }
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ message: 'Failed to process your request' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}