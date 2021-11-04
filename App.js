import { StatusBar } from "expo-status-bar";
import React from "react";
import { useEffect } from "react";
import Application from "./src/Application";
import { ProvideAuth } from "./utils/use-auth";

export default function App() {
  return (
    <ProvideAuth>
      <Application />
    </ProvideAuth>
  );
}
