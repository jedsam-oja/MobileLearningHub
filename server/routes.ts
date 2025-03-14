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

  // Profile update endpoint is defined in auth.ts

  const httpServer = createServer(app);

  return httpServer;
}
