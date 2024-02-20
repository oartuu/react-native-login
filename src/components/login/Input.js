import React from "react";
import { Text, View, TextInput, StyleSheet, } from "react-native";

export default function Input({title,text, password}){
  return(
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{title}</Text>
      <TextInput 
      style={styles.input}
      placeholder={text}
      secureTextEntry={password}/>
    </View>
  )
}
const styles = StyleSheet.create({
  inputContainer:{
    flex: 0,
    alignItems:'flex-start',
    width:350,
    height:70,
    marginVertical:15
  },
  
  label:{
    fontWeight: "600",
    padding:5,
    fontSize:18,
  },
  
  input:{
    backgroundColor:'#b3b3b3',
    width: 275,
    height: 40,
    padding:10,
    borderRadius:8,
    marginVertical:8,
  },
});