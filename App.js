import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal } from 'react-native';
import Header from './components/header';
import Graph from './components/graph';
import Content from './components/content';
import { useState } from 'react';


export default function App() {
  const [ domains, setDomains ] = useState([
    {value: 3, color: "#ebb134", name: 'family'},
    {value: 2, color: "#eb3d34", name: 'friends'},
    {value: 4, color: "#34ebd5", name: 'studies'},
    {value: 6, color: "#52eb34", name: 'health'},
    {value: 1, color: "#f27ec8", name: 'love'},
    {value: 2, color: "#cd7ef2", name: 'image'},
    {value: 4, color: "#f2cd7e", name: 'leasure'},
    {value: 2, color: "#59554d", name: 'emotions'},
    {value: 4, color: "#ff6b84", name: 'initiative'},
    {value: 3, color: "#000ac9", name: 'motivation'},
    {value: 5, color: "#80edb8", name: 'spirituality'}
  ]);
  const [ ideas, setIdeas ] = useState([
    {title: 'talk more with my frieds', domain: 'friends', vote: 4},
    {title: 'hang out once in a week', domain: 'friends', vote: 4},
    {title: 'play videogames at night', domain: 'friends', vote: 4},
    {title: 'dress myself up since I wake up', domain: 'image', vote: 4},
    {title: 'sleep if I need it', domain: 'emotions', vote: 4},
    {title: 'study chinese at morning', domain: 'family', vote: 4},
    {title: 'walk at 05:00pm everyday', domain: 'health', vote: 4},
    {title: 'eat less oil', domain: 'health', vote: 4},
    {title: 'program with no preasure or aim for perfection', domain: 'initiative', vote: 4},
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <Graph domains={domains} />
      <Content ideas={ideas} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#bacfc1",
    flex: 1,
    paddingHorizontal: 50,
    paddingVertical: 20
  },
});
