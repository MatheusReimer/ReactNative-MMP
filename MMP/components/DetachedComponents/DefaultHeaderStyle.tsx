import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create(
{
header:{

    backgroundColor:"#128B3B",
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
      maxHeight:75,
      maxWidth:75,
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
})

export default styles