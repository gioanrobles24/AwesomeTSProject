import React, { useState, useEffect  } from 'react';
import { Button, View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next'
import { NavigationRouteContext } from '@react-navigation/core';

const categoryContainer = (props) => {
    const { t, i18n  } = useTranslation();
    const lang = i18n.language
    const [ nameCat, setNameCat] = useState('')
    
    const base64Img = props.ico
    const catId = props.id
    const OnPressHandler = props.onPress

    useEffect(() => {
         if(lang === 'en-US'){
            setNameCat(props.name.en)
        } else{
            setNameCat(props.name.es)
        }
    }, [])
    
    
    return (
       <TouchableOpacity style={styles.box} onPress={ () => OnPressHandler(catId)}>
           <View>
              <Image
                style={styles.logo}
                source={{
                uri: base64Img,
                }}
             />
             <Text style={styles.text}>{nameCat}</Text>
            </View>
       </TouchableOpacity> 
    )
}
export default categoryContainer

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