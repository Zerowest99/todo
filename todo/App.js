import {StyleSheet,View, Button, TextInput, ScrollView, Text} from 'react-native'
import{useState} from 'react'

export default function App() {
  const [myTextInput,setMyTextInput] = useState("")
  const [number,setNumber] = useState (['To Do List'])
  const onChangeInput = (event) =>{
    console.log("event", event)
    setMyTextInput(event)
  }
  const onAddTextInput = () => {
    setNumber([...number,myTextInput])
  }
  return (
    <View>
      <Text style={styles.titleText}>To Do List</Text>
      <TextInput
        style={styles.input}
        value={myTextInput}
        onChangeText={onChangeInput}
        multiline={true}
        editable={true}
      ></TextInput>
      <Button title="Add new To do"
      onPress={onAddTextInput}></Button>
      <ScrollView style = {{width:"100%"}}>
        {number.map((item,idx)=>(
          <Text style={styles.mainText}>{item}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor : "#cecece",
    marginTop: 40,
    marginBottom: 20,
    fontSize: 20,
    padding: 10,
  },
  mainText:{
    fontSize:20,
    color:"#000000",
    padding:20,
    margin:20,
    backgroundColor:'#8cfffb'
  },
  mainView:{
    width:'100%'
  },
  titleText:{
    fontSize: 30,
    marginTop: 40,
    padding: 12,
    borderRadius: 8,
    color: "#000000",
    backgroundColor: "#c4ff0e",
    fontWeight: "bold",
  }
});