import React, { useState, useEffect  } from 'react'
import { StyleSheet, View, Text,  } from 'react-native';
import { connect } from 'react-redux'
import Swiper from 'react-native-swiper'
import { useTranslation } from 'react-i18next'
import StepIndicator from 'react-native-step-indicator'
import { Icon, Button }  from 'react-native-elements'
import { complete } from './../../../services/reducers/todos'
const questions = [
  {id : 0 , question: '¿Tiene fiebre por encima de 99.6F grados? (37.5C grandos)'},
  {id : 1, question: '¿Usted tiene tos?'} ,
  {id : 2 , question: '¿Ha tenido dificultad al respirar?'},
  {id : 3 , question: '¿Está experimentando dolores corporales' },
  {id : 4 , question: '¿padece de presión alta?' },
  {id : 5 , question: '¿ ha viajado en las ultimas 2 semanas ?' },
  {id : 6 , question:  '¿Padece de una enfermedad crónica como diabetes, o problemas cardíacos o respitarorios?'},
  {id : 7 , question: '¿ Tiene 65 años o mas?' },
  {id : 8 , question:  '¿ se ha hecho alguna prueba positiva para la gripe u otros virus respiratorios en las últimas 2 semanas?'},
  {id : 9 , question: '¿ Tuvo contacto con alguien con diagnostico positivo al COVID-19 o entró en contacto con fluidos de nariz y boca de una persona que fue diagnosticada con COVID-19?' }
]

const firstIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 6,
  separatorFinishedColor: '#4aae4f',
  separatorUnFinishedColor: '#a4d4a5',
  stepIndicatorFinishedColor: '#4aae4f',
  stepIndicatorUnFinishedColor: '#a4d4a5',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 12,
  currentStepLabelColor: '#4aae4f',
};

const  StepTwo = ({ navigation, data, complete }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const covidToolInfo = data.categories.covidTool
    const { t, i18n } = useTranslation()
    const lang = i18n.language
    
    const [ nameCat, setNameCat ] = useState('')
    const [ questionText, setQuestionText ] = useState('')
    const [ answerCount, setAnswerCount ] = useState(0)

  useEffect(() => {
        if(lang === 'en-US'){
           setNameCat(covidToolInfo.name.en)
       } else{
           setNameCat(covidToolInfo.name.es)
       }
       setAnswerCount(0)
       setCurrentPage(0)  
   }, [])  


  const nextQuestion = ( value : number ) => {
    setAnswerCount(answerCount + value)
    
    if(currentPage == 9){
      complete(answerCount)
      navigation.navigate('CovidTStepThree')
    } else{
      setCurrentPage(currentPage + 1)
    }
  }

  function Questions() {
    const question = questions.find(element => element.id == currentPage)
    console.log('found',question)
    return (
      <View>
         <View style={styles.questionContainer}>
           <Text style={styles.text}>{question?.question} </Text>
         </View>
        <View style={styles.buttonRow}>
            <Button
              title={'Si'}
              type="solid"
              onPress={ () => nextQuestion(20) }
              buttonStyle={styles.buttonPrimary}
            />
            <Button
              title={'No'}
              type="solid"
              onPress={ () => nextQuestion(0)}
              buttonStyle={styles.buttonSecondary}
            />
        </View>
      </View>
    );
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text  style={styles.textHeader}>
            {nameCat}
        </Text>
        <Text  style={[styles.text, {marginTop:10}]}>
           {t('please_answer_question')}
        </Text>
      </View>
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={firstIndicatorStyles}
          currentPosition={currentPage} 
          stepCount={10}
        />
      </View>
      <Questions/>
    </View>
  );
}

const mapStateToProps = state  => { 
  return { data : state.todos}
 }

const mapDispatchToProps = dispatch => ({
  complete : (anwsers) => dispatch(complete(anwsers))
})

export default connect(mapStateToProps , mapDispatchToProps)(StepTwo) 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginVertical: 10,
    marginLeft:10,
    marginRight:10,
  },
  header: {
    margin: 20
  },
  textHeader: {
    fontSize: 18,
    fontWeight:'bold'
  },
  text: {
     fontSize:17,
     fontStyle:'normal'
  },
  questionContainer: {
    margin:20,
  },
  buttonRow : {
    margin:20,
  }, 
  buttonPrimary : { 
    backgroundColor:'#4aae4f', 
    marginTop: 10, 
    marginBottom:10 
  },
  buttonSecondary : {
    backgroundColor:'#a4d4a5',
  }
  
});