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
    height:"75%",
   
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
      width:"60%"
     },
     exerciseInput:{

     },
     modalExercises:{
      width:"100%",
      marginTop:35,
      justifyContent:"center",
     },
     footerStyle:{ 
      alignItems:"center",
      flexDirection:"row",
      justifyContent:"space-between",
      width:"90%",
     
  },
  cancelBtn:{
      backgroundColor:"white",
      width:"45%",
      
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
  dayBtn:{
    backgroundColor:"white",

    padding:8,
    width:"100%",
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
    justifyContent:"space-evenly",
    flexDirection:"row",
  },
  editBtn:{
    backgroundColor:"white",
    padding:8,
    
    borderRadius: 50,
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