import React, { createContext, ReactNode } from "react";

interface Leader {
  id: number;
  name: string;
  region: string;
  responsibilities: string[];
}

export const LeaderContext = createContext<Leader | undefined>(undefined);

interface LeaderProviderProps {
  children: ReactNode;
}

export const LeaderProvider: React.FC<LeaderProviderProps> = ({ children }) => {
  const leader: Leader = {
    id: 1,
    name: "Leader Name",
    region: "Kigali - Rwanda",
    responsibilities: [
      "Oversee complaints",
      "Assign tasks",
      "Track progress",
      "Resolve conflicts",
    ],
  };

  return (
    <LeaderContext.Provider value={leader}>{children}</LeaderContext.Provider>
  );
};
