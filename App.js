import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";

import { RestaurantsSceen } from "./src/features/restaurants/screen/restaurants.screen";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsSceen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
