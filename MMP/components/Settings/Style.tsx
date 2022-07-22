import { Dimensions, StyleSheet } from "react-native";
import React from 'react';
import { View, Text } from 'react-native';



const styles = StyleSheet.create(
    
  {
    container:{
    flexDirection:"column",
    height: '100%',
    width: Dimensions.get('window').width,
    backgroundColor:"white",}
  });

  export default styles;