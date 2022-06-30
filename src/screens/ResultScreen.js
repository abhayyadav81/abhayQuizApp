import { View, Text } from 'react-native'
import React from 'react'

const ResultScreen = ({route}) => {
    console.log(route,"route")
  return (
    <View style={{backgroundColor:'#FFC0CB',flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:50,color:'#800000'}}> SCORE :{route.params.score.score}/50</Text>
      {/* <Text style={{fontSize:30,color:'#800000'}}> Your Score :{route.params.score.score} out of / */}
    </View>
  )
}

export default ResultScreen