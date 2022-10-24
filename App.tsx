import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
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
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";
import { AuthProvider } from "./src/Hooks/Auth";
export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" backgroundColor="#5636D3" />
          <AuthProvider>
            <SignIn />
          </AuthProvider>
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
