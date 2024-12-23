import { View, StyleSheet, Text, FlatList } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
  },
  graphContainer: {
    marginHorizontal: 'auto',
    marginTop: 20,
    height: 250,
    width: 200,
    borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  pixel: {
    display: 'inline',
    width: 19,
    height: 19,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    //borderWidth: 1,
    backgroundColor: "#eee"
  }
})

export default function Graph(){
  return (
    <View style={styles.container}>
      <GraphDraw />
      <FlatList />
    </View>
  )
}

function GraphDraw(){
  return (
    <View style={styles.graphContainer}>
      <View style={styles.pixel}><Text>.</Text></View>
    </View>
  )
}

