import { View, Text,ImageBackground, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import Input from './Input'
export default function Login() {
  return (
    
    <ImageBackground source={require('../../../assets/bg.jpeg')} style={styles.container}>
      <StatusBar barStyle={'light-content'}/>
      <View style={styles.textContain}>
        <Text style={styles.containHeader}>Bem vindo</Text>
      </View>
      <View style={styles.loginForm}>
        <Input
        title={'Usuário'}
        text={'Digite o usuário'}
        password={false}
        />
        <Input
        title={'Senha'}
        text={'Digite a Senha'}
        password={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.register}>
          <Text style={styles.registerText}>Registrar</Text>
        </TouchableOpacity>
      </View>
      
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container:{
    width: '100%',
    height:'100%'
  },
  textContain:{
    flex:1,
    marginTop: '15%',
    fontSize: 28,
    width:'100%',
    paddingStart: '15%'
  },
  containHeader:{
    color:'#fff',
    fontSize: 28,
    fontWeight: 'bold'
  },
  loginForm:{
    flex: 2,
    height: 200,
    backgroundColor:'#909090d9',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '15%',
    paddingEnd:'15%',
    paddingVertical:15
  },
  button:{
    backgroundColor:'#121423',
    marginVertical: '10%',
    paddingVertical: 10,
    borderRadius:10,
    alignItems:'center',
  },
  buttonText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: '500'
  },
  register:{
    backgroundColor: '#121423', 
    paddingVertical: 10,
    borderRadius:10,
    alignItems:'center',
  },
  registerText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: '500'
  }
  
})