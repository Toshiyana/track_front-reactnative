import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = () => {
  const { state, signup, clearErrorMessage, tryLocalSignin } =
    useContext(AuthContext);

  useEffect(() => {
    // call only one time
    tryLocalSignin(); // Automatic signin when you have a token
  }, []);

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillFocus={clearErrorMessage} // viewWillDisappear() in swift
      />
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead!"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SignupScreen;
