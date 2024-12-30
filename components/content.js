import { View, Text, StyleSheet } from "react-native";
import Ideas from "./ideas";
import Valuation from "./valuation";

const styles = {
  container: {
    backgroundColor: '#eee',
    backgroundColor: "#aebfb4",
    paddingHorizontal: 10,
    paddingVertical: 10
  }
}

export default function Content({ page=1, domains, ideas }){
  let content = (page == 1) ? <Ideas content={ideas} /> : <Valuation domains={domains} /> 
    return (
      <View style={styles.container}>
        {content}
      </View>
    ) 
}
