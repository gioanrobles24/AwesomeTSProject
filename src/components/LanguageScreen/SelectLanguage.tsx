import * as React from 'react';
import { Button, View, Text, } from 'react-native';
import { useTranslation } from 'react-i18next'

const SelectLanguage = ({ navigation }) => {
    console.log('props')
    const { t, i18n } = useTranslation();

    const changeLanguage = (value) => {
      console.log(value)
        i18n.changeLanguage(value)
        navigation.navigate('Home')
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>{t('select_country')}</Text>
          <Button title="Mexico" onPress={() => changeLanguage('es-MX')} />
          <Button title="Usa" onPress={() => changeLanguage('en-US')} />
        </View>
      );
} 

export default SelectLanguage