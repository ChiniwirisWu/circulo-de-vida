import { TextInput, Text, View, StyleSheet, FlatList } from "react-native";
import { ButtonText, Field } from "./reusables";
import { Formik } from "formik";


export default function Valuation({domains}){
  return (
    <View>
      <Formik 
        initialValues={{
          family: domains[0].value,
          friends: domains[1].value,
          studies: domains[2].value,
          health: domains[3].value,
          love: domains[4].value,
          image: domains[5].value,
          leasure: domains[6].value,
          emotions: domains[7].value,
          initiative: domains[8].value,
          motivation: domains[9].value,
          spirituality: domains[10].value,
        }}
        onSubmit={(values, actions)=>{
          console.log('hi');
          console.log(values)
        }}
      >
        {(props)=>(
          <>
            <View style={{marginBottom: 10}}>
              <FlatList
                data={domains}
                renderItem={({item, index})=> <Field name={item.name} value={props.values[item.name]} onChange={props.handleChange(item.name)} />}
              />
            </View>
            <ButtonText style={{marginTop: 20}} onPress={props.handleSubmit} text={"Save"} />
          </>
        )}
      </Formik> 
    </View>
  )
}
