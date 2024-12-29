import { Pressable, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"

export function ButtonIcon({ hasBackground=false, iconName=null }){
  return (
    <Pressable>
      <MaterialIcons name={ iconName } size={ 30 }  color={ "#000" }/>
    </Pressable>
  )
}

export function ButtonText({text}){
  return <Pressable style={{paddingHorizontal: 5, paddingVertical: 5, borderWidth: 1, borderRadius: 5, backgroundColor: "#fff"}}><Text>{text}</Text></Pressable>
}

export function Title({ text="Titulo" }){
  return <Text style={{fontSize:20, fontWeight: 600}}>{text}</Text>;
}
