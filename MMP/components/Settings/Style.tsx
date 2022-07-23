import { Dimensions, StyleSheet } from "react-native";
import React from 'react';
import { View, Text } from 'react-native';



const styles = StyleSheet.create(
    
  {
    container:{
    flexDirection:"column",
    height: '100%',
    width: Dimensions.get('window').width,
    backgroundColor:"white",},
    
    headerSettings:
    {
      width:"100%",
      alignItems:"center",
    },
    btnContainer:{
      width:"100%",
      alignItems:"center",
      justifyContent:"space-between",
      flexDirection:"column",
      flex:1,
      marginBottom:30,
      marginTop:30,
    }
  });

  export default styles;