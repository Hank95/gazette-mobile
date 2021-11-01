import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Login = () => {
  const [loginState, setLoginState] = useState(true);
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      {loginState ? <LoginForm /> : <SignupForm />}

      <Button
        title={loginState ? "Sign Up" : "Login"}
        onPress={() => setLoginState(!loginState)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
  },
});

export default Login;
