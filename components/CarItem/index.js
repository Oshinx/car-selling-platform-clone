import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import StyledButton from '../styledbutton/index';
import styles from './styles';


const CarItemCard = () => {

//  console.log("hello");
  return (
 
    <View style={styles.carContainer}>
      <Text>djhdjkhd mhdjhdb djh</Text>
    <ImageBackground source={require("../../assets/images/ModelX.jpeg")}
     style={styles.image}
    />
     <View style={styles.titles}>
      <Text style={styles.title}>Hello World</Text>
      <Text style={styles.subTitle}>Starting at $69,000</Text>
    </View>

    <StyledButton 
    type="primary"
    content={"Custom Order"}
    onPress={() => { 
      console.log('Custom Order was Pressed');
     
    }}
    />

<StyledButton 
    type="secondary"
    content={"Existing Inventory"}
    onPress={() => { 
      console.log('Existing Inventory was Pressed');
     
    }}
    />
  
  </View>
  
  )

}

export default CarItemCard;
