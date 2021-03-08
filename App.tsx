import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import Settings from './src/screens/Settings';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar  barStyle='light-content' backgroundColor='black'/>
      <Settings />
    </View>
  );
}
