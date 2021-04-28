import * as React from 'react';
import { Button, View, Text, FlatList, StyleSheet,ScrollView, Alert } from 'react-native';
import CategoryContainer from './catergoryContainer'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

const Home = ({ navigation, data }) => {

    const categories = data.categories
    const { t } = useTranslation();
    const goToCat = (id) =>{
      console.log(id)
      if(id == 1){
          navigation.navigate('CovidTool')
       } else{
         Alert.alert('Opcion Inhabilitada por los momentos')
       }
    }
    return (
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <Text  style={styles.textHeader}>
               {t('select_category')}
            </Text>
          </View>
          <View style={styles.row}>
            {Object.values(categories).map( (cat, i) => (
                  <CategoryContainer
                    key={i}
                    name={cat.name}
                    ico={cat.icon}
                    id={cat.order}
                    onPress={goToCat}
                  />
                  ) 
                )
              } 
          </View>
        </ScrollView>
      );
} 

const mapStateToProps = state  => { 
  return { data : state.todos}
 }

const mapDispatchToProps = dispatch => ({
  complete : (id) => dispatch(complete(id))
})

export default connect(mapStateToProps , mapDispatchToProps)(Home) 

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-evenly'
  },
  header: {
    margin: 10
  },
  textHeader: {
    fontSize: 17
  }
})