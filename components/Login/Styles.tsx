import { Dimensions, StyleSheet } from "react-native";




const styles = StyleSheet.create(
    
   {
    fullContainer:{
        height:"100%",
        backgroundColor:"#128B3B"
    },
    touchable:{
        height:"100%",
        
    },
    imageContainer:{
        height:"40%",
        alignItems:"center",
     
        justifyContent:"center",
    },
    logo:{

        maxWidth:300,
        maxHeight:300,
        resizeMode:"contain",
    },
    headerContainer:{

        alignItems:"flex-start",
        height:"10%",
        marginLeft:"10%",
    },
    header:{
        marginBottom:-25,
    },
    subHeader:{},
    loginFormContainer:{
        height:"25%",
        alignItems:"flex-start",
        justifyContent:"center",
        marginLeft:"15%",
        marginTop:20,
    },
    loginEmail:{
        height:"15%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        width:"100%"
    },
    loginPassword:{
        height:"15%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
    },
    hr:{
        width:"80%",
        color:"white",
        backgroundColor: 'white',
        height: 1,
        borderColor : 'white',
        marginBottom:5,
      },
      emailIcon:{
        color:"white",
        marginRight:5,
      },
      passwordIcon:{
        color:"white",
        marginRight:5,
      },
      signIn:{
        height:"15%",
        alignItems:"center",
        justifyContent:"center",
      },
      signInBtn:{
        marginBottom:15,
        backgroundColor:"#68CB93",
        borderRadius:50,
        paddingLeft:35,
        paddingRight:35,
        paddingTop:10,
        paddingBottom:10,
      },
      logoName:{
        alignItems:'center',
        justifyContent:"center",
        marginTop:20,
      }
      

  });

  export default styles;