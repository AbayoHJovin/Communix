import React, { createContext, ReactNode } from "react";
import { ImageSourcePropType } from "react-native";

interface User {
  id: number;
  userNames: string;
  email: string;
  profileImage: ImageSourcePropType;
  location: string;
  language: string;
}

export const CurrentUserContext = createContext<User | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UsersProvider: React.FC<UserProviderProps> = ({ children }) => {
  const currentUser: User = {
    id: 1,
    userNames: "Hirwa Jovin",
    email: "hirwajov@gmail.com",
    profileImage: require("../assets/images/userImage.png"),
    location: "Gicumbi - Rwanda",
    language: "English",
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {children}
    </CurrentUserContext.Provider>
  );
};
