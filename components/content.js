import { View, Text, StyleSheet } from "react-native";
import Ideas from "./ideas";

const styles = {
  container: {
    flex: 1,
    //borderWidth: 1
    backgroundColor: '#eee',
    backgroundColor: "#aebfb4",
    paddingHorizontal: 10,
    paddingVertical: 10
  }
}

export default function Content({ page=1, domains, ideas }){
    let content = (page == 1) ? <Ideas content={ideas} /> : <Text>Valuation</Text>
    return (
      <View style={styles.container}>
        {content}
      </View>
    ) 
}
