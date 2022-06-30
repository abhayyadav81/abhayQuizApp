import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from './screens/Header'
import QuizScreen from './QuizScreen'



const MainScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#A52A2A' }}>
      {/* <Image source={require('./screens/assets/gg.png')} style={{height:60,width:60}}/> */}
      <Image source={require('./screens/assets/aa.png')} style={{ width: 350, height: 140,marginTop:100  }} />

      <View style={{ padding: 10 }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 30, marginTop: 40, color: 'white', }}>Welcome to Quiz !</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 15, marginTop: 10, color: 'white' }}>"from the 5 Quiz you have to score atleast 3."</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ marginTop: 50, fontSize: 20,color:'white' }}> Every question contain 10 Marks</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center' ,backgroundColor:'#77DD77',marginTop:120,borderRadius:10}}>
          <TouchableOpacity onPress={() => navigation.navigate('QuizScreen') }>
            <Text style={{color:'white',fontSize:30,}}>START QUIZ</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  )

}
const styles = StyleSheet.create({

})

export default MainScreen
