import { StatusBar } from "expo-status-bar";
import { useAuth } from "../../utils/use-auth";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App({ navigation }) {
  const auth = useAuth();
  console.log(auth.user);
  return (
    <View style={styles.container}>
      <Text> Home Screens</Text>
      <Button title="User Info" onPress={() => navigation.navigate("User")} />
      {/* <StatusBar style="auto" /> */}
    </View>
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
