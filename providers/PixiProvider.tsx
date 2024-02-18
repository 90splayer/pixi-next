'use client';

import React, { createContext, useContext } from 'react';
import { Application } from 'pixi.js';

// Create PIXI.Application instance
const app = new Application();

// Define the type of the context value
type AppContextValue = Application;

// Create context for PIXI.Application
const AppContext = createContext<AppContextValue>(app);

// Provider component to wrap the entire Pixi.js application
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <AppContext.Provider value={app}>{children}</AppContext.Provider>;
};

// Custom hook to access PIXI.Application instance
export const usePixiApp = (): AppContextValue => useContext(AppContext);
