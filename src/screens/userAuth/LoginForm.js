import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useAuth } from "../../../utils/use-auth";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();

  const handleLogin = () => {
    auth.signin(username, password);
    console.log(username + password);
  };
  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <View style={styles.container}>
      <Text>Username</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setUsername(val)}
        value={username}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setPassword(val)}
        value={password}
      />

      <Button onPress={handleLogin} title="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(240,240,240)",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginForm;
