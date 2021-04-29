import React, { useState, useEffect  } from 'react'
import { Button, View, Text, FlatList, StyleSheet,SafeAreaView } from 'react-native';
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

const CovidTool = ({ navigation, data }) => {
    
    const covidToolInfo = data.categories.covidTool
    const { t, i18n } = useTranslation()
    const lang = i18n.language
    const [ nameCat, setNameCat] = useState('')
    
    useEffect(() => {
        if(lang === 'en-US'){
           setNameCat(covidToolInfo.name.en)
       } else{
           setNameCat(covidToolInfo.name.es)
       }
   }, [])
    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text  style={styles.textHeader}>
               {nameCat}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>
                {t('covid_tool_desc')}
            </Text>  
          </View>
          <Button
            title="Siguiente"
            onPress={ () => navigation.navigate('CovidTStepOne') }
          />
        </SafeAreaView>
      );
} 

const mapStateToProps = state  => { 
  return { data : state.todos}
 }

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps , mapDispatchToProps)(CovidTool) 

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
    fontSize: 17,
    fontWeight:'bold'
  },
  text: {
     fontSize:16,
     fontStyle:'normal'
  }
})