import React, { useState, useEffect  } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Alert } from 'react-native';
import { useTranslation } from 'react-i18next'
import { NavigationRouteContext } from '@react-navigation/core';
import  { Button } from 'react-native-elements'
const Resume = ({ navigation }) => {
    const { t, i18n  } = useTranslation();
    const lang = i18n.language
    const [ desc, setDesc ] = useState('')
   /*  console.log('props 23', props.subC.name) */
   const goToMap = () => {
       if(desc.length > 5){
          navigation.navigate('MapPrice')
       } else {
           Alert.alert('Por favor se mas especifico')
       }
   }
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text  style={styles.textHeader}>
                    {t('report_price')}
                </Text>
                <Text  style={styles.text}>
                    {t('report_price_desc')}
                </Text>
                <TextInput
                   style={styles.input}
                   multiline={true}
                   numberOfLines={6}
                   placeholder={'250 caracteres soportados'}
                   onChange={(event) => setDesc(event.nativeEvent.text)} 
                />
            </View>
            <View style={styles.buttonRow}>
                <Button
                    title={t('next')}
                    type="solid"
                    onPress={ () => goToMap()}
                    buttonStyle={styles.buttonPrimary}
                />
                <Button
                    title={t('back')}
                    type="solid"
                    onPress={ () => navigation.back()}
                    buttonStyle={styles.buttonSecondary}
                />
            </View>
        </SafeAreaView>
    )
}
export default Resume

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: '#fff',
      },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 20
      },
    header: {
        margin: 20
      },
    textHeader: {
        fontSize: 19,
        fontWeight:'bold'
      },
    text: {
         marginTop:20,
         fontSize:17,
         fontStyle:'normal'
      },
    input: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        borderColor: '#4aae4f'
      },
    buttonRow : {
        margin:20,
      }, 
    buttonPrimary : {
        backgroundColor : '#4aae4f'
      },
    buttonSecondary : {
        backgroundColor:'#a4d4a5',
        marginTop:10
      }       
  })