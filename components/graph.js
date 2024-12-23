import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 300,
    borderWidth: 1
  }
})

export default function Graph(){
  return (
    <View style={styles.container}>
      <Text>Graph</Text>
    </View>
  )
}

