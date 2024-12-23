import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal } from 'react-native';
import Header from './components/header';
import Graph from './components/graph';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Graph />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    paddingVertical: 20
  },
});
