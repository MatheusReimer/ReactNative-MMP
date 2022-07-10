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
        backgroundColor:"#E7F5FF",
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
    
    

  });

  export default styles;