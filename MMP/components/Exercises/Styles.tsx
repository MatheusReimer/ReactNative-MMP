import { Dimensions, StyleSheet } from "react-native";
import React from 'react';
import { View, Text } from 'react-native';



const styles = StyleSheet.create(
    
   {
    mainContainer:{
        height:"100%",
        backgroundColor:"#128B3B"
    },
    header:{
        height:"15%",
        backgroundColor:"#128B3B",

    },
    topHeader:{
        flex:0.5,
        alignItems:"flex-end",
    },
    topImageProfile:{
        height:"100%",
        width:"100%",
        maxHeight:75,
        maxWidth:75,
        resizeMode:"cover",
        marginTop:"10%",
        
    },
    topHeaderText:{
        flex:0.5,
        alignItems:"center",
        justifyContent:"center",

    },
    contentContainer:{
        height:"85%",
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        backgroundColor:"white",
        alignContent:"center",
    
    },
    firstLayoutContainer:{
        alignItems:"center",
        justifyContent:"center",
    },
    firstLayout:{
        backgroundColor:"white",
        position:"absolute",
        paddingLeft:100,
        paddingRight:100,
        paddingTop:30,
        paddingBottom:30,
        top:-10,
        borderBottomWidth:0.5,
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        elevation:3,
        alignItems:"center",
        justifyContent:"center",
        
    },
    firstLayoutShadow:{
        width:"100%",
        justifyContent:"space-between",
        alignItems:"center",
        
    },
    openedModal:{
        height:"20%",
        justifyContent:"center",
    },
    scrollViewModalBody:{
        alignItems:"center",
        justifyContent:"center",
        
    },
    chosenExerciseContainer:{
        width:"100%",
        justifyContent:"space-between",
        flexDirection:"row",

    },
    chosenExercisesModal:{
        backgroundColor:"white",
        width:"80%",
        marginBottom:10,
        paddingTop:15,
        paddingBottom:15,
   
        borderBottomWidth:0.5,
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
    index:{
        position:"absolute",
        left:15,
    },
    deleteIcon:{
        backgroundColor:"white",
        width:"15%",
        marginBottom:10,
        paddingTop:15,
        paddingBottom:15,
   
        borderBottomWidth:0.5,
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
        
        borderBottomWidth:0.5,
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
        
        borderBottomWidth:0.5,
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
    listedWorkouts:{
        width:"75%",
        alignItems:"center",
        justifyContent:"center",
        alignSelf:'center',
        marginTop:100,
        height:"auto",
    },
    weekDayPlanContainer:{
        width:"100%",
        
    },

    weekDayPlan:{
        width:"100%",
        backgroundColor:"white",
        paddingTop:10,
        paddingBottom:10,
        borderBottomWidth:0.5,
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
        marginTop:15,
    },
    editBtn:{
        position:'absolute',
        right:5,
    },
    indexBtn:{
        position:"absolute",
        left:5,
    }

  });

  export default styles;