import { Dimensions, StyleSheet } from "react-native";
import React from 'react';
import { View, Text } from 'react-native';



const styles = StyleSheet.create(
    
   {
   
    container: {
     
        flexDirection:"column",
        height: '100%',
        width: Dimensions.get('window').width,
        backgroundColor:"white",
    },
 
    weekDayContainer:{
      marginTop:10,
      backgroundColor:"#128B3B",
      width:Dimensions.get("window").width/8,
      height: Dimensions.get("window").width/8,
      alignItems:"center",
      justifyContent:"center",
      borderRadius:50,
      margin:3,
  
     
      
      
    },
    mid:{
      alignItems:"center",
      justifyContent:"center",
      height:"10%",
 
    },
    main:{
      flex:1,
      height:"100%",
      width:"100%",
       backgroundColor:"white",
    },
    mainHeaders:{
      flexDirection:"row",
      justifyContent:"space-between",
      margin:15,
      
    },
    exercises:{
   
    flexDirection:"column",
   
    },
    exercisesEach:{
     margin:25,
     width:"100%",
      flex:1,
      flexDirection:"row",
    },
    hr:{
      color: '##128B3B',
      backgroundColor: '##128B3B',
      height: 3,
      borderColor : '##128B3B',
      marginBottom:-30,

 
    }
    

  });

  export default styles;