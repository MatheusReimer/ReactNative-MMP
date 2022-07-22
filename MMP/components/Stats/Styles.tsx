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
    
    header:{
      marginTop:30,
      alignItems:"flex-start",
      justifyContent:"flex-end",
      fontSize:30,
      height:"10%",
      marginLeft:"10%"
    },
    header2:{
      alignItems:"center",
      justifyContent:"space-evenly",
      fontSize:30,
      height:"10%",
      flexDirection:"row"
    },
    chartBtn:{
      borderRadius:5,
      backgroundColor:"white",
      width:80,
      alignItems:"center",
      justifyContent:"center",
      paddingTop:10,
      paddingBottom:10,
      borderBottomWidth:0.5,
      shadowColor: "#000000",
      shadowOpacity: 0.8,
      shadowRadius: 2,
      shadowOffset: {
        height: 1,
        width: 0
      },
      elevation:15,
      flexDirection:"row",
    },
    graphs:{
      alignItems:"center",
      justifyContent:"center",
      width:"100%",
      borderRadius:0,
    
    }
  });

  export default styles;