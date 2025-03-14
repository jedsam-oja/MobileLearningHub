import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth } from "./auth";

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up authentication routes
  setupAuth(app);
  
  // Additional API routes
  app.get("/api/health", (req, res) => {
    res.json({ ok: true });
  });

  const httpServer = createServer(app);

  return httpServer;
}
