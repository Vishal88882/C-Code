import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { ThemeProvider } from "./ThemeProvider";

import FeedPage from "./Components/Pages/Home";
import MessagesPage from "./Components/Pages/Messages";
import ProfilePage from "./Components/Pages/Profile";
import SearchPage from "./Components/Pages/Search";
import LoginPage from "./Components/Pages/Login";
import SignupPage from "./Components/Pages/Signup";
import HomePage from "./Components/Pages/Home";
import PasswordPage from "./Components/Pages/Password";
import Password_AuthPage from "./Components/Pages/Password_Auth";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const handleAuthenticated = (authenticatedUser) => {
    setUser(authenticatedUser);
    setLoggedIn(true);
  };

  useEffect(() => {
    let isMounted = true;

    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:8080/profile", { credentials: "include" });
        const data = await response.json();

        if (!response.ok) throw new Error(data.message);

        if (isMounted) {
          setUser(data.message);
          setLoggedIn(true);
        }
      } catch (error) {
        if (isMounted) {
          setLoggedIn(false);
          if (error instanceof TypeError) {
            console.error("Unable to check authentication:", error);
          }
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    checkAuth();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!loggedIn) return undefined;

    const socketInstance = io("http://localhost:8080", { withCredentials: true });

    return () => {
      socketInstance.disconnect();
    };
  }, [loggedIn]);


  if (loading) return <div>Loading...</div>;

  return (
    <ThemeProvider>
      <Routes>
      <Route
        path="/"
        element={<LoginPage onLogin={handleAuthenticated} />}
      />
      <Route
        path="/signup"
        element={<SignupPage onSignupSuccess={handleAuthenticated} />}
      />
      <Route
        path="/Password_Auth"
        element={<Password_AuthPage />}
      />
      <Route
        path="/change_password"
        element={<PasswordPage onLogin={handleAuthenticated} />}
      />

      {/* Protected routes */}
      <Route
        path="/profile"
        element={loggedIn ? <ProfilePage user={user} /> : <Navigate to="/" replace />}
      />
      <Route
        path="/home"
        element={loggedIn ? <HomePage /> : <Navigate to="/" replace />}
      />
      <Route
        path="/feedback"
        element={loggedIn ? <FeedPage /> : <Navigate to="/" replace />}
      />
      <Route
        path="/inbox"
        element={loggedIn ? <MessagesPage /> : <Navigate to="/" replace />}
      />
      <Route
        path="/search"
        element={loggedIn ? <SearchPage /> : <Navigate to="/" replace />}
      />
      <Route path="*" element={<Navigate to={loggedIn ? "/home" : "/"} replace />} />
      </Routes>
    </ThemeProvider>
  );
}