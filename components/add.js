import { View, Modal, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import { Field, Title } from "./reusables";

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 800,
    margin: 'auto',
    backgroundColor: "#eee",
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 10
  }
})

export default function Add(){
  return (
    <Modal
      animationType="slide"
      visible={true}
      transparent={true}
    >
      <View style={styles.container}>
        <Title text="New Idea" />
        <Formik
          initialValues={{name: "", value: 0, domain: ""}}
          onSubmit={(values, actions)=>{

          }}
        >
          {(props)=>(
            <Field name="name" value={props.values.name} onChange={props.onChangeText} /> 
          )}
        </Formik>
      </View>
    </Modal>
  )
}
