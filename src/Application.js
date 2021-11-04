import { StatusBar } from "expo-status-bar";
import React from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import UserMenu from "./screens/UserMenu";
import Login from "./screens/userAuth/Login";
import { useAuth, ProvideAuth } from "../utils/use-auth";

const Stack = createNativeStackNavigator();

export default function Application() {
  const auth = useAuth();

  // useEffect(() => {
  //   auth.autoSignIn();
  // }, []);

  if (!auth.user) {
    return <Login />;
  }
  console.log(auth.user);
  return (
    <Stack.Navigator>
      <Stack.Screen name="Gazette" component={Home} />
      <Stack.Screen name="User" component={UserMenu} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
