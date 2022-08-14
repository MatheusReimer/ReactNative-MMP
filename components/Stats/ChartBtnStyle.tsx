import { Dimensions, StyleSheet } from "react-native";
import React from 'react';
import { View, Text } from 'react-native';



const styles = StyleSheet.create(
    
  {
    container:{
        width:170,
        height:85,
        borderRadius:10,
        backgroundColor:"white",
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
        alignItems:"center",
        justifyContent:"space-evenly",
        flexDirection:"row",
        marginTop:15,
        marginBottom:15,
    },
    image:{
        maxWidth:50,
        maxHeight:50,
        borderRadius:50,
    },
  });

  export default styles;