import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useAuth } from "../../../utils/use-auth";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const auth = useAuth();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSignUp = (event) => {
    auth.login(formData);
  };

  return (
    <View style={styles.container}>
      <Text>Sign up</Text>
      <Text>Username</Text>
      <TextInput
        style={styles.input}
        onChange={handleChange}
        value={formData.username}
      />
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChange={handleChange}
        value={formData.email}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        onChange={handleChange}
        value={formData.password}
      />

      <Button onPress={handleSignUp} title="Sign Up!" />
    </View>
  );
};

export default SignupForm;

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
