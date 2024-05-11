import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.head}>
          <Text>Search</Text>
          {/* <Searchbar placeholder="Search" /> */}
        </View>
        <View style={styles.body}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  head: {
    padding: 16,
    backgroundColor: "green",
  },
  body: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
