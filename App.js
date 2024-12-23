import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal } from 'react-native';
import Header from './components/header';
import Graph from './components/graph';
import Content from './components/content';
import { useState } from 'react';

export default function App() {
  const [ domains, setDomains ] = useState({
    family: {value: 0, color: "#ebb134"},
    friends: {value: 0, color: "#eb3d34"},
    studies: {value: 0, color: "#34ebd5"},
    health: {value: 0, color: "#52eb34"},
    love: {value: 0, color: "#f27ec8"},
    image: {value: 0, color: "#cd7ef2"},
    leasure: {value: 0, color: "#f2cd7e"},
    emotions: {value: 0, color: "#59554d"},
    initiative: {value: 0, color: "#ff6b84"},
    motivation: {value: 0, color: "#000ac9"},
    spirituality: {value: 0, color: "#80edb8"}
  });
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
      <Graph />
      <Content ideas={ideas} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 50,
    paddingVertical: 20
  },
});
