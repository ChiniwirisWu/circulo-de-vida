import { Pressable, Text, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"

export function ButtonIcon({ hasBackground=false, iconName=null }){
  return (
    <Pressable>
      <MaterialIcons name={ iconName } size={ 30 }  color={ "#000" }/>
    </Pressable>
  )
}

export function ButtonText({text, onPress}){
  return <Pressable onPress={onPress} style={{paddingHorizontal: 5, paddingVertical: 5, borderWidth: 1, borderRadius: 5, backgroundColor: "#fff"}}><Text>{text}</Text></Pressable>
}

export function Title({ text="Titulo" }){
  return <Text style={{fontSize:20, fontWeight: 600, marginBottom: 5 }}>{text}</Text>;
}

export function Field({name, value, onChange}){
  return (
    <>
      <Text style={{ fontWeight: 700,marginBottom: 3}}>{name}</Text>
      <TextInput style={{backgroundColor: "#eee", borderWidth: .5, paddingHorizontal: 5, paddingVertical: 3,}} onChangeText={onChange} value={value} />
    </>
  )
}
