import { StyleSheet } from "react-native";


const styles =  StyleSheet.create({

    container: {
     width:'100%',
     padding:25,
     paddingBottom:5,

    },
    button:{
        backgroundColor: 'yellow',
        borderRadius:20,
        height:40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: 'blue',
        fontSize:12,
        fontWeight: '500',
        textTransform: 'uppercase',
    }
});

export default styles;