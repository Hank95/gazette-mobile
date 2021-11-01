import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text>Username</Text>
      <TextInput style={styles.input} onChange={setUsername} value={username} />
      <Text>Password</Text>
      <TextInput style={styles.input} onChange={setPassword} value={password} />

      <Button onPress={handleLogin} title="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#62363",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginForm;
