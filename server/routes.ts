import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth } from "./auth";
import { updateProfileSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up authentication routes
  setupAuth(app);
  
  // Additional API routes
  app.get("/api/health", (req, res) => {
    res.json({ ok: true });
  });

  // Profile update route
  app.post("/api/user/profile", async (req: Request, res: Response) => {
    if (!req.isAuthenticated()) {
      return res.status(401).send("Unauthorized");
    }

    try {
      // Validate request body against schema
      const profileData = updateProfileSchema.parse(req.body);
      
      // Mark profile as complete if this is the final step
      const finalUpdate = { 
        ...profileData,
        // Set profile as complete if this is the final step (updating bio)
        ...(profileData.bio !== undefined && { isProfileComplete: true })
      };

      // Update user profile
      const updatedUser = await storage.updateUserProfile(req.user!.id, finalUpdate);
      
      // Return updated user
      res.json(updatedUser);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
