import React from "react";

// CreateContext returns an object(Provider) that contains the component
const AuthContext = React.createContext({
  isLoggedIn : false
});

export default AuthContext;