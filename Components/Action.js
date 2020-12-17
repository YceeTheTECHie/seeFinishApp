import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ActivityIndicator, Text, View, Image } from 'react-native';
// import logo from '../assets/robo.png';

export default function Welcome() {
  return (
    <View>
          <ActivityIndicator size="large" color="blue" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: 'Montserrat',
  },
  images: {
  
    
  }
});

// export  Home;