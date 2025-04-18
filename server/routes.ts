import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

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
      
      // In a real app, you might store this in a database
      // Here we're just responding with success
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
