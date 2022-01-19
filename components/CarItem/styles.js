import { StyleSheet } from "react-native";


const styles =  StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%',
      },
      title:{
        fontSize: 40,
        fontWeight: '500',
        color: 'black'
      },
      titles: {
        marginTop: "20%",
        alignItems: 'center',
       
      },
      subTitle: {
        fontSize:16,
        color: '#5c5e62',
      },
      image:{
      
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute',
      }
});

export default styles;