import { Dimensions, StyleSheet } from "react-native";
import React from 'react';
import { View, Text } from 'react-native';



const styles = StyleSheet.create(
    
   {
    mainContainer:{
        height:"100%",
        backgroundColor:"white"
    },
    btnTops:{
        
        height:"12%",
        alignItems:"flex-end",
        justifyContent:"space-evenly",
        flexDirection:"row",
        marginBottom:-40
        
    },
    btnTopsHidden:{
        display:"none",
        height:"12%",
        marginBottom:10,
    },
    top:{
        height:"20%",
        alignItems:"center",
        justifyContent:"flex-end",
        flexDirection:"column",
    },
    weekdaySelection:{
        width:"100%",
        height:"5%",
        justifyContent:"space-evenly",
        flexDirection:"row",
        alignItems:"center",
        
    },
    exercises:{
        
        
        width:"100%",
        alignItems:"center",
        marginTop:10,
        justifyContent:"space-evenly",
        flexDirection:"row",

    },
    exerciseBlocks:{
        marginTop:10,
        marginBottom:10,
        width:"80%",
        backgroundColor:"whitesmoke",
        borderRadius:10,
        alignItems:"center",
        shadowColor: "#000000",
        shadowOpacity: 0.9,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        elevation:10,
        justifyContent:"center",
    },
    cancelBtn:{
        backgroundColor:"white",
        width:"45%",
        color:"white",
        paddingTop:7,
        paddingBottom:7,
        
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        elevation:15,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
       
    },
    acceptBtn:{
        backgroundColor:"white",
        width:"45%",
        color:"white",
        paddingTop:7,
        paddingBottom:7,
        
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        elevation:15,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        
    },
  
  });

  export default styles;