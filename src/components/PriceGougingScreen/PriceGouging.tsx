import React, { useState, useEffect  } from 'react'
import { Button, View, Text, FlatList, StyleSheet,SafeAreaView, ScrollView  } from 'react-native';
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import ListItem from './ListItem'

const PriceGouging = ({ navigation, data }) => {
    
    const priceGougingInfo = data.categories.priceGouging
    const { t, i18n } = useTranslation()
    const lang = i18n.language
    const [ nameCat, setNameCat] = useState('')
    const subcategories = priceGougingInfo.subcategories

    useEffect(() => {
        if(lang === 'en-US'){
           setNameCat(priceGougingInfo.name.en)
       } else{
           setNameCat(priceGougingInfo.name.es)
       }
   }, [])
    const goToResume = () => {
      navigation.navigate('Resume')  
    }

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text  style={styles.textHeader}>
               {nameCat}
            </Text>
           <ScrollView>
            {Object.values(subcategories).map((subC, i) => (
                    <ListItem
                     subC={subC}
                     onPress={goToResume}
                     key={i}
                    />  
                  ) 
                 )
            } 
           </ScrollView>
          </View>
        </SafeAreaView>
      );
} 

const mapStateToProps = state  => { 
  return { data : state.todos}
 }

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps , mapDispatchToProps)(PriceGouging) 

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