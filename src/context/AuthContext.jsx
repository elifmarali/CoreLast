import React, { createContext, useEffect, useState } from "react";
import AuthService from "../services/authServices";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [currentUserPointsData, setCurrentUserPointsData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const username = AuthService.getUsernameFromToken();
      const userId = AuthService.getCurrentUserIdFromToken();
      setCurrentUser(username);
      setCurrentUserId(userId);

      const response = await AuthService.getCurrentUserEnteredExams();
      setCurrentUserPointsData(response);
    };

    fetchData();
  }, [currentUser]);



  const sharedValuesAndMethods = {
    currentUser,
    setCurrentUser,
    currentUserId,
    setCurrentUserId,
    currentUserPointsData,
    setCurrentUserPointsData,
  };


  return (
    <AuthContext.Provider value={sharedValuesAndMethods}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
