import React from 'react';
import { View, StatusBar } from 'react-native';
import Login from './src/components/login/Login';
export default function App() {

  return (
    <View>
      <StatusBar barStyle={"light-content"} />
      <Login/>
    </View>
  );
}