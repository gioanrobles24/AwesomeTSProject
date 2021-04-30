import React, { useState, useEffect  } from 'react';
import { Button, View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next'
import { NavigationRouteContext } from '@react-navigation/core';

const ListItem = (props) => {
    const { t, i18n  } = useTranslation();
    const lang = i18n.language
    console.log('props 23', props)
    const subCatName = props.subC.name
    const onPressHandler = props.onPress

    return (
       <TouchableOpacity style={styles.box} onPress={() => onPressHandler()}>
           <View>
             {lang == 'en-US' ?
                <Text style={styles.text}>{subCatName.en}</Text>
             :
                <Text style={styles.text}>{subCatName.es}</Text>
             }  
             
           </View>
       </TouchableOpacity> 
    )
}
export default ListItem

const styles = StyleSheet.create({
    box: {
        flexDirection: 'column',
        flex: 0.4,
        height: 'auto',
        margin: 10,
        padding: 10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "powderblue"
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
    },
    text:{
        fontSize: 16,
        margin: 10,
        paddingTop:5,
    }    
  })