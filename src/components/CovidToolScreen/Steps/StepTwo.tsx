import React, { useState, useEffect  } from 'react'
import { StyleSheet, View, Text,  } from 'react-native';
import { connect } from 'react-redux'
import Swiper from 'react-native-swiper'
import { useTranslation } from 'react-i18next'
import StepIndicator from 'react-native-step-indicator'
import { Icon, Button }  from 'react-native-elements'

const questions = [
  {id : 0 , question: '¿Tiene fiebre por encima de 99.6F grados? (37.5C grandos)'},
  {id : 1, question: '¿Usted tiene tos?'} ,
  {id : 2 , question: '¿Ha tenido dificultad al respirar?'},
  {id : 3 , question: '¿Está experimentando dolores corporales' },
  {id : 4 , question: '¿padece de presión alta?' },
  {id : 5 , question: '¿ ha viajado en las ultimas 2 semanas ?' },
  {id : 6 , question:  'Padece de una enfermedad crónica como diabetes, o problemas cardíacos o respitarorios?'},
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

const  StepTwo = ({ navigation, data }) => {
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  
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
   }, [])  

  const onStepPress = (position: number) => {
    console.log(position)
  }
  const nextQuestion = ( value : number ) => {
    setAnswerCount(answerCount + value)
    setCurrentPage(currentPage + 1)
  }

  function Questions() {
    const question = questions.find(element => element.id == currentPage)
    console.log('found',question)
    return (
      <View style={styles.questionContainer}>
        <Text style={styles.text}>{question?.question} </Text>
        <Button
          title={'Si'}
          onPress={ () => nextQuestion(20) }
        />
         <Button
          title={'no'}
          onPress={ () => nextQuestion(0)}
        />
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
          onPress={onStepPress}
          stepCount={10}
        />
        <Questions/>
      </View>
    </View>
  );
}

const mapStateToProps = state  => { 
  return { data : state.todos}
 }

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps , mapDispatchToProps)(StepTwo) 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginVertical: 50,
    marginLeft:10,
    marginRight:10
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#999999',
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#4aae4f',
  },
  header: {
    margin: 20
  },
  textHeader: {
    fontSize: 17,
    fontWeight:'bold'
  },
  text: {
     fontSize:16,
     fontStyle:'normal'
  },
  questionContainer: {
    margin:20
  }
});