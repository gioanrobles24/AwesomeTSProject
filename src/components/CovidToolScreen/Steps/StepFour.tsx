import React, { useState, useEffect  } from 'react'
import { StyleSheet, View, Text, TextInput, Alert  } from 'react-native';
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Icon, Button }  from 'react-native-elements'
import { Value } from 'react-native-reanimated';


const  StepFour = ({ navigation, data }) => {
   const answeResult = data.answeResult
    const { t, i18n } = useTranslation()
    const lang = i18n.language
    const [msg, setMsg] = useState('')

    useEffect (() =>{
        console.log('answeResult',answeResult) 
        if(answeResult >= 100){
            setMsg(t('not_so_good_final_msg'))
        }else{
            setMsg(t('good_final_msg'))
        }
    }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text  style={styles.textHeader}>
            {msg}
        </Text>
      </View>   
      <View style={styles.buttonRow}>
        <Button
         title={'Terminar'}
         type="solid"
         onPress={ () => navigation.navigate('Home') }
         buttonStyle={styles.buttonPrimary}
        />
      </View>
    </View>
  );
}

const mapStateToProps = state  => { 
  return { data : state.todos}
 }

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps , mapDispatchToProps)(StepFour) 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    justifyContent: 'space-around'
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
  buttonRow : {
    margin:20,
  }, 
  buttonPrimary : {
    backgroundColor : '#4aae4f'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#4aae4f'
  },
  buttonSecondary : {
    backgroundColor:'#a4d4a5',
    marginTop:10
  }
});