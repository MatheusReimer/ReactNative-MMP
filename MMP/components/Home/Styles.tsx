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
    },
    day:{
      width:"90%",
      display:"flex",
      flexDirection:'row',
      justifyContent:"center"
    },
    calendarStyle:{
      height:(Dimensions.get("window").height),
      zIndex:9999,
      width:(Dimensions.get("window").width),
      position:"absolute",
      top:0,
      justifyContent:"center"
      
    },
    addRegisterBtn:{
      minHeight:200,
      justifyContent:"center",
      alignItems:"center",
      width:Dimensions.get("window").width,
      backgroundColor:"white"
     },
     exercisesRegisterBtn:{
      marginBottom:15,
      backgroundColor:"#68CB93",
      borderRadius:50,
      paddingLeft:35,
      paddingRight:35,
      paddingTop:10,
      paddingBottom:10,
      width:"70%"
     },
     exerciseInput:{

     },
     modalExercises:{
      width:"100%",
      flexDirection:"row",
      justifyContent:"space-evenly",
      marginTop:15,
     },
     textInput:{
      borderColor:"green",
      padding:2,
      borderWidth:0.5,
      backgroundColor:"#e6ffe6"
     }
  });

  export default styles;