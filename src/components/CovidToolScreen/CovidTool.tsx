import * as React from 'react';
import { Button, View, Text, FlatList, StyleSheet,SafeAreaView } from 'react-native';
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

const CovidTool = ({ navigation, data, }) => {

    const categories = data.categories
    const { t } = useTranslation();

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text  style={styles.textHeader}>
               {t('select_category')}
            </Text>
          </View>
          <View style={styles.row}>
          </View>
        </SafeAreaView>
      );
} 

const mapStateToProps = state  => { 
  return { data : state.todos}
 }

const mapDispatchToProps = dispatch => ({
  complete : (id) => dispatch(complete(id))
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
    justifyContent: 'space-evenly'
  },
  header: {
    margin: 10
  },
  textHeader: {
    fontSize: 17
  }
})