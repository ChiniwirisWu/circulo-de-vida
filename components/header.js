import { View, StyleSheet } from "react-native"
import { ButtonIcon, Title } from "./reusables"

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})

export default function Header({domain, page=2}){
  return (
    <View style={styles.container}>
      <ButtonIcon iconName={(page == 1)? "switch-right" : "switch-left"} />
      <Title text={domain} />
      <ButtonIcon iconName={"more-vert"} />
    </View>
  )
}
