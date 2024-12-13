import { View, Text, ImageSourcePropType } from 'react-native';
import React, { createContext, ReactNode } from 'react';

interface Leader {
  name: string;
  responsibilities: string;
}

interface Complaint {
  id: number;
  date: string;
  day: string;
  time: string;
  title: string;
  subtitle: string;
  location: string;
  backgroundImage: ImageSourcePropType;
  leader: Leader;
}

export const ComplaintsContext = createContext<Complaint[] | undefined>(undefined);

interface ComplaintsProviderProps {
  children: ReactNode;
}

const ComplaintsProvider: React.FC<ComplaintsProviderProps> = ({ children }) => {
  const complaints: Complaint[] = [
    {
      id: 1,
      date: "10 June 2024",
      day: "Tuesday",
      time: "10:00 AM",
      title: "Stealing the cow from the cowshed",
      subtitle:
        "Last week, when I left my herbs in the cowshed, it was stolen. I don't know what to do",
      location: "Kigali Gasabo, Rwanda",
      backgroundImage: require("../assets/images/userImage.png"),
      leader: { name: "Steve Bertin", responsibilities: "Mayor of Gasabo" },
    },
    {
      id: 2,
      date: "10 June 2024",
      day: "Tuesday",
      time: "10:00 AM",
      title: "Stealing the cow from the cowshed",
      subtitle:
        "Last week, when I left my herbs in the cowshed, it was stolen. I don't know what to do",
      location: "Kigali Gasabo, Rwanda",
      backgroundImage: require("../assets/images/complaintImage.png"),
      leader: { name: "Steve Bertin", responsibilities: "Mayor of Gasabo" },
    },
  ];

  return (
    <ComplaintsContext.Provider value={complaints}>
      {children}
    </ComplaintsContext.Provider>
  );
};

export default ComplaintsProvider;
