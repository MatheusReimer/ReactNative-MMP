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
    header:{

       backgroundColor:"#68CB93",
       height: '50%',
       borderBottomStartRadius:(Dimensions.get("window").height/8),
       borderBottomEndRadius:(Dimensions.get("window").height/8),
       display:"flex",
      
    },
    topHeader:{
       height:"35%", 
       flexDirection:"row",
     
      
    },
    leftTop:{
       flex:0.7,
       alignItems:"center",
       justifyContent:"center",
       marginLeft:-20,
      

    },
    rightTop:{
        flex:0.3,
        alignItems:"center",
        justifyContent:"center",
    },
    topHeaderImage:{
         
         height:"100%",
         width:"100%",
         maxHeight:140,
         maxWidth:140,
         resizeMode:"cover",
         
    },
    imgContainer:{
      height:"65%",
     
      
      alignItems:"center",
      justifyContent:"center",
    },
    logo:{
      maxWidth:300,
      maxHeight:300,
      resizeMode:"contain",
      marginBottom:40,
      
    },
    weekDayContainer:{
      marginTop:10,
      backgroundColor:"#008037",
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
      margin:30,
      
      justifyContent:"space-between",
      flexDirection:"row",
      alignItems:"center",
      
    }
    

  });

  export default styles;