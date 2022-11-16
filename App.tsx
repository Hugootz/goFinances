import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { StatusBar, LogBox } from "react-native";
import { Register } from "./src/screens/Register";

import "intl";
import "intl/locale-data/jsonp/pt-BR";
import AppLoading from "expo-app-loading";

import { SignIn } from "./src/screens/SignIn";

import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Routes } from "./src/routes";

import { AppRoutes } from "./src/routes/app.routes";
import { AuthProvider, useAuth } from "./src/Hooks/Auth";
export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  LogBox.ignoreLogs(["EventEmitter.removeListener"]);
  const { useStorageLoading }: any = useAuth();
  if (!fontsLoaded || useStorageLoading) {
    return <AppLoading />;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor="#5636D3" />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
