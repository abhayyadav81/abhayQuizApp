import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={{fontSize:30,color:'black'}}>Quiz Context</Text>
    </View>
  )
}
const styles=StyleSheet.create({
  header:{
    height:50,
    alignItems:'center',
    backgroundColor:'#fffaf0',
    marginTop:20
  }
})
export default Header