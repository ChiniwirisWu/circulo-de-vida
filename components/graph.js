import { View, StyleSheet, Text, FlatList } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 'auto',
    marginBottom: 20
  },
  graphContainer: {
    marginHorizontal: 'auto',
    marginTop: 20,
    width: 200,
    //borderWidth: 1,
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
  }
})

export default function Graph({domains}){
  return (
    <View style={styles.container}>
      <GraphDraw domains={domains} />
    </View>
  )
}

function createColorMap(domains){
  const resultArray = [];
  for(let i = 0; i < domains.length; i++){
    const row = [];
    for(let j = 0; j < 10; j++){
      if(j < domains[i].value){
        row.push(domains[i].color);
      } else{
        row.push(0);
      }
    }
    resultArray.push({'name': domains[i].name, row});
  }
  return resultArray;
}

function GraphDraw({domains}) {
  const data = createColorMap(domains);
  return (
    <View style={styles.graphContainer}>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <>
            <Text style={{fontSize: 10, fontWeight: 800}}>{item.name}</Text>
            <FlatList
              data={item.row}
              horizontal={true}
              renderItem={({item, index})=>(
                <View style={[styles.pixel, {backgroundColor: (item != 0) ? item : "#eee"}]}></View>
              )}
              />
          </>
        )}
      />
    </View>
  )
}

