import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import Header from './components/Header';

import Body from './components/Body'






const App = () => {

  return(
    <View>
      <Header title=" My Homelab Monitor "/>
      <Body/>
    </View>
  )
}
export default App;