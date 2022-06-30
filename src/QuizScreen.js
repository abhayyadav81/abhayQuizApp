import { View, Text, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
// import question from './utils/question.json'
import ResultScreen from './screens/ResultScreen'
import { useNavigation } from '@react-navigation/native'

const QuizScreen = () => {
    const navigation=useNavigation()

    const [questions, setQuestions] = useState(
        [{
            question: "What is React Native?",
            answers: [
                
                "JavaScript library",
                "JavaScript framework",
                "Programming language",
                "Neither of the above"
            ],
            correctAns: "JavaScript framework",
            selectedAnswer: null
        },
        {
            question: "React Native has a set components for:",
            answers: [
                "IOS platform",
                "Android platform",
                "Both IOS and Android platform",
                "None Of The Above"
            ],
            correctAns: "Both IOS and Android platform",
            selectedAnswer: null
        },
        {
            question: "What is state?",
            answers: [
                "Align children within the main axis of our container",
                "which used for rendering dynamic changes within component",
                "which stands for properties and is being used for passing data from one component to another",
                "neither of the above"
            ],
            correctAns:  "which used for rendering dynamic changes within component",
            selectedAnswer: null
        },
        {
            question: "What is props?",
            answers: [
                "which used for rendering dynamic changes whithin component ",
                "import component from one another component like react-native in app.js, custom component ",
                "which stands for properties and is being used for passing data from one component to another ",
                "None of the Above"
            ],
            correctAns: "which stands for properties and is being used for passing data from one component to another ",
            selectedAnswer: null
        },
        {
            question: "what is Class components?",
            answers: [
                "used as container components to handle state management and wrap child components",
                "which are just used for display purposes - these components call functions from parent components to handle user interactions or state updates",
                "are the building blocks of any React app and a typical React app will have many of these",
                "neither of above"
            ],
            correctAns: "used as container components to handle state management and wrap child components",
            selectedAnswer:null
        },
       
        ])

    const [queIndex, setQueIndex] = useState(0)

    const selectItemFunction = (answers) => {
        setQuestions([...questions, questions[queIndex].selectedAnswer = answers])
        questions[queIndex].correctAns===answers? setScore(score+10):setScore(score)
       
        // console.log(answers, 'ANS')
        // console.log(questions[queIndex],answers)
    }
    const changeQueFunction = () => {


        queIndex<4 ? setQueIndex(queIndex + 1) : navigation.replace('ResultScreen',{score:{score:score,totalScore:questions.length*10}},)
        console.log(questions.length-1,"hii")
        console.log('queIndex',queIndex)
    }
  const [ score,setScore]=useState(0)
   


    return (
        <View style={{ backgroundColor: '#ffffe0', flex: 1, padding: 10 }}>
            {/* <Text style={{fontSize:30,color:'black'}}>current score:{score}</Text> */}

            <Text style={{ fontSize: 45, marginTop: 40, color: 'black' }}>{questions?.[queIndex]?.question}</Text>
            {questions?.[queIndex]?.answers?.map((item) => {

                return (
                    <View style={{ marginTop: 20,padding:4, borderRadius: 10, borderWidth: 1, backgroundColor: questions[queIndex].selectedAnswer === item ? 'green' : "#f08080" }}>
                        <TouchableOpacity onPress={() => {
                            selectItemFunction(item);

                            
                            // console.log(item, 'item')
                            // console.log(questions[queIndex].selectedAnswer, 'questions[queIndex].selectedAnswer')
                        }} >
                            <Text style={{ fontSize: 20, color: 'white',paddingVertical:3 }}>{item}</Text>
                        </TouchableOpacity>
                    </View>
                )
            })}
           
            <View style={{alignItems:'center',justifyContent:'center' ,backgroundColor:'#77DD77',marginTop:40,borderRadius:10}}>
          <TouchableOpacity onPress={() => changeQueFunction() }>
            <Text style={{color:'white',fontSize:30,}}>SUBMIT</Text>
          </TouchableOpacity>
          
        </View>



        </View>
    )
}

export default QuizScreen;