import React, { useState, useEffect  } from 'react'
import { StyleSheet, View, Text, TextInput, Alert  } from 'react-native';
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Icon, Button }  from 'react-native-elements'
import { Value } from 'react-native-reanimated';


const  StepThree = ({ navigation, data }) => {
   const covidToolInfo = data.categories.covidTool
    const { t, i18n } = useTranslation()
    const lang = i18n.language
    const [email, setEmail ] = useState('')
    const [phone, setPhone ] = useState('')
    console.log('email', email)
 
    const report = () => {
        const emailRegex = /\S+@\S+\.\S+/;
        if(emailRegex.test(email)){
           navigation.navigate('CovidTStepFour')
        }else{
            Alert.alert('Inserta un e-mail válido')
        }
       
    }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text  style={styles.textHeader}>
            {t('personal_info')}
        </Text>
        <Text  style={[styles.text, {marginTop:10}]}>
           {t('personal_info_detail')}
        </Text>
      </View>
      <View>
          <TextInput
           style={styles.input}
           keyboardType={'email-address'}
           placeholder='Inserte su e-mail'
           onEndEditing={(event) => setEmail(event.nativeEvent.text)}
          />
          <TextInput
           style={styles.input} 
           keyboardType={'phone-pad'}
           placeholder='Inserte su N° de telefono'
           onEndEditing={(event) => setPhone(event.nativeEvent.text)}
          />
      </View>
      <View style={styles.buttonRow}>
            <Button
              title={t('report')}
              type="solid"
              onPress={ () => report() }
              buttonStyle={styles.buttonPrimary}
            />
            <Button
              title={t('back')}
              type="solid"
              onPress={ () => console.log(0)}
              buttonStyle={styles.buttonSecondary}
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

export default connect(mapStateToProps , mapDispatchToProps)(StepThree) 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
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