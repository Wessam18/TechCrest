import React, { createContext, useContext, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext({
  username: null,
  token: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

const USERNAME_KEY = "username";
const TOKEN_KEY = "token";

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem(USERNAME_KEY));
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY));

  const isAuthenticated = !!token;

  const login = (username, token) => {
    setUsername(username);
    setToken(token);
    localStorage.setItem(USERNAME_KEY, username);
    localStorage.setItem(TOKEN_KEY, token);
  };

  const logout = () => {
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(TOKEN_KEY);
    setUsername(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ username, token, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
