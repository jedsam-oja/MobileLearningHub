import { users, type User, type InsertUser } from "@shared/schema";
import session from "express-session";
import memorystore from "memorystore";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUserProfile(userId: number, profileData: Partial<User>): Promise<User>;
  sessionStore: session.Store;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  currentId: number;
  sessionStore: session.Store;

  constructor() {
    this.users = new Map();
    this.currentId = 1;
    
    const MemoryStore = memorystore(session);
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000, // Clear expired sessions every 24h
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }
  
  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.email === email,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const now = new Date();
    
    const user: User = { 
      id,
      username: insertUser.username,
      password: insertUser.password,
      email: insertUser.email || null,
      fullName: null,
      profileImage: null,
      role: "student",
      specialization: null,
      institute: null,
      graduationYear: null,
      bio: null,
      isProfileComplete: false,
      createdAt: now,
      updatedAt: now
    };
    
    this.users.set(id, user);
    return user;
  }
  
  async updateUserProfile(userId: number, profileData: Partial<User>): Promise<User> {
    const user = await this.getUser(userId);
    
    if (!user) {
      throw new Error("User not found");
    }
    
    // Update user data
    const updatedUser: User = {
      ...user,
      ...profileData,
      updatedAt: new Date()
    };
    
    // Set profile as complete if required fields are filled
    if (
      updatedUser.fullName && 
      updatedUser.email && 
      updatedUser.specialization && 
      updatedUser.institute
    ) {
      updatedUser.isProfileComplete = true;
    }
    
    this.users.set(userId, updatedUser);
    return updatedUser;
  }
}

export const storage = new MemStorage();
