import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { BASE_URL } from "../../data";

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("adminToken"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Verify token on mount
  useEffect(() => {
    let cancelled = false;
    const verifyToken = async () => {
      if (!token) {
        setIsLoading(false);
        return;
      }
      try {
        const response = await fetch(`${BASE_URL}/api/auth/verify`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });
        if (!response.ok) throw new Error("Invalid token");
        const data = await response.json();
        if (!cancelled) setIsAuthenticated(data.valid);
      } catch {
        if (!cancelled) setIsAuthenticated(false);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };
    verifyToken();
    return () => {
      cancelled = true;
    };
  }, [token]);

  const login = (newToken) => {
    localStorage.setItem("adminToken", newToken);
    setToken(newToken);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    if (token) {
      try {
        await fetch(
          `${BASE_URL}/api/auth/logout`,

          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
          }
        );
      } catch (error) {
        console.error("Logout error:", error);
      }
    }

    localStorage.removeItem("adminToken");
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
