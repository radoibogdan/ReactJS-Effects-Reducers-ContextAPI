import React, { useState, useEffect } from "react";

// CreateContext returns an object(Provider) that contains the component
const AuthContext = React.createContext({
  // Default context
  isLoggedIn: false,
  // Default dummy function for the IDE autocompletion
  onLogout: () => {},
  onLogin: (email, password) => {},
});

// Authentication Management Component
// Export AuthContextProvider as a named export
// Used in index.js at root level to make login var and functions available everywhere (context)
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Effects - Run after all the components have rendered and if dependencies changed
  // 1st time dependencies are null so technically null <=> [] => effects run
  // setLoggedIn triggers component rerender. this time dependencies are [] ([] = []) => effects don't run
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
