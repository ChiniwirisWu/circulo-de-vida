import { View, Text, Pressable, FlatList, StyleSheet } from "react-native";
import { Title, ButtonText, ButtonIcon } from "./reusables";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleAndButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap'
  },
})

function TitleAndButton({title, iconName}){
  return (
    <View style={[styles.titleAndButtonContainer, {marginBottom: 30}]}>
      <Title text="Ideas" />
      <ButtonText text="Add an idea"  />
    </View>
  )
}

function IdeaItem({title, handler, vote}){
  if(title.length > 25) title = title.substring(0, 26) + '...';
  return (
    <View style={[styles.titleAndButtonContainer, {marginBottom: 10}]}>
      <Text style={{fontWeight: 600}}>{title}</Text>
      <View style={styles.titleAndButtonContainer}>
        <Text style={{fontSize:10, fontWeight: 700}}>{vote}/10</Text>
        <ButtonIcon iconName={"info"} />
      </View>
    </View>
  )
}

export default function Ideas({content=null}){
  return (
    <View style={styles.container}>
      <TitleAndButton />
      <FlatList
        data={content}
        renderItem={({item, index})=> <IdeaItem vote={item.vote} title={item.title}/>}
        keyExtractor={(key)=> key.id}
      />
    </View>
  )
}
