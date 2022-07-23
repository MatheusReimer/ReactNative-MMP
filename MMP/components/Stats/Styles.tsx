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
      width:100,
      alignItems:"center",
      justifyContent:"center",
      paddingTop:10,
      paddingBottom:10,
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
    
    },
    graphsSelectorContainer:{
      height:"100%",
      marginTop:40,
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
  });

  export default styles;