import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsSceen } from "./src/features/restaurants/screen/restaurants.screen";

export default function App() {
  return (
    <>
      <RestaurantsSceen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
