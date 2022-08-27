import { Dimensions, StyleSheet } from "react-native";
import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from "../GlobalStyle/globalStyle";



const styles = StyleSheet.create(
    
  {
    container:{
    flexDirection:"column",
    height: '100%',
    width: Dimensions.get('window').width,
    backgroundColor:COLORS.mainColor},
    
    header:{
      marginTop:30,
      alignItems:"flex-start",
      justifyContent:"flex-end",
      fontSize:30,
      height:"10%",
      marginLeft:"10%",
    },

    graphs:{
      marginTop:-30,
      alignItems:"center",
      justifyContent:"center",
      width:"100%",
      borderRadius:0,
    
    },
    graphsSelectorContainer:{
      marginTop:-30,
      height:"100%",
      alignItems:"center",
      borderTopStartRadius:50,
      borderTopEndRadius:50,
      backgroundColor:"white",
      flex:1,
    
    },
    graphSelectorHeader:{
      backgroundColor:COLORS.mainColor,
      borderBottomStartRadius:10,
      borderBottomEndRadius:10,
      alignItems:"center",
      justifyContent:"center",
    },
    columns:{
      height:"100%",
      marginTop:15,
    },
    exercisesEach:{
      flexDirection:"row",
      width:"100%",
      justifyContent:"flex-start",
      marginLeft:15,
      
     },
     itemsName:{
      justifyContent:"flex-start",
      width:"50%",
      marginTop:20,
     },
     items:{
      justifyContent:"flex-start",
      width:"16.66666667%",
      marginTop:20,
     },
    detailedItem:{
      width:"100%",
      marginLeft:15,
      justifyContent:"flex-start",
      flexDirection:"row",
    }
  });

  export default styles;