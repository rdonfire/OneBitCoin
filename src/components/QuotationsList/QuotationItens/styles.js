import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    mainContent:{
        width:"95%",
        height:'auto',
        backgroundColor:"#000000",
        marginLeft:"3%",
        marginBottom:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        padding:10,
    },

    contextLeft:{
        width:"36%",
        alignItems:'flex-start',
    },

    contextRight:{
        width:"60%",
        alignItems:'flex-end',   
    },

    logBitcoin:{
        width:30,
        height:30,
        marginLeft:2,
    },
    
    boxLogo:{
        flexDirection:'row',
        alignItems:'center',
        
    },

    dayCotation:{
        paddingLeft:10,
        fontSize:16,
        color:"#ffffff",
        fontWeight:'bold',
    },

    price:{
        color:"#ffffff",
        fontSize:18,
        fontWeight:'bold',
    }
        

});

export default styles