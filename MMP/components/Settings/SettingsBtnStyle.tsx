import { Dimensions, StyleSheet } from "react-native";
import React from 'react';
import { View, Text } from 'react-native';



const styles = StyleSheet.create(
    
  {
    settingsBtn:{
        borderRadius:15,
        backgroundColor:"white",
        width:"85%",
        alignItems:"center",
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
        height:50,

    },
    imageIcon:{
        maxHeight:30,
        maxWidth:30,
        borderRadius:50,
        position:"absolute",
        left:20,
    },
    settingsBtnText:{
        left:70,
    }
    
  });

  export default styles;