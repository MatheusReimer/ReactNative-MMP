import { Dimensions, StyleSheet } from "react-native";
import React from 'react';
import { View, Text } from 'react-native';



const styles = StyleSheet.create(
    
  {
    container:{
    flexDirection:"column",
    height: '100%',
    width: Dimensions.get('window').width,
    backgroundColor:"#128B3B",},
    
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
    
    },
    graphSelectorHeader:{
      backgroundColor:"#128B3B",
      borderBottomStartRadius:10,
      borderBottomEndRadius:10,
      alignItems:"center",
      justifyContent:"center",
    },
    columns:{
      height:"100%",
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-end',
      justifyContent:"space-evenly",
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
      width:"40%",
      marginTop:8,
     },
     items:{
      justifyContent:"flex-start",
      width:"20%",
      marginTop:8,
     },
    detailedItem:{
      width:"100%",
      marginLeft:15,
      justifyContent:"flex-start",
      flexDirection:"row",
    }
  });

  export default styles;