import React, { useEffect, useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    // call only one time
    tryLocalSignin(); // Automatic signin when you have a token
  }, []);

  return null;
};

export default ResolveAuthScreen;
