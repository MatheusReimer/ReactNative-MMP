import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../GlobalStyle/globalStyle";




const styles = StyleSheet.create(
    
   {
    fullContainer:{
        height:"100%",
        backgroundColor:COLORS.mainColor,
    },
    touchable:{
        height:"100%",
        
    },

    headerContainer:{

        alignItems:"flex-start",
        height:"10%",
        marginLeft:"10%",
        marginTop:"15%"
    },
    header:{
        marginBottom:-25,
    },
    subHeader:{},
    loginFormContainer:{
        height:"45%",
        alignItems:"flex-start",
        justifyContent:"center",
        marginLeft:"15%",
    },
    loginEmail:{
        height:"15%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
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
        backgroundColor:COLORS.secColor,
        borderRadius:50,
        paddingLeft:35,
        paddingRight:35,
        paddingTop:10,
        paddingBottom:10,
      },
      logoName:{
        position:"absolute",
        bottom:20,
        width:"100%",
        alignItems:'center',
        justifyContent:"center",
      },
      gobackBtn:{
        position:"relative",
        height:"10%",
        backgroundColor:"white",
        alignItems:"flex-start",
        justifyContent:"flex-end",
      },
      gobackBtnContainer:{
        position:"absolute",
        left:5,
        top:40,
        marginLeft:0,

      }
      

  });

  export default styles;