import * as React from 'react';
import { Button, View, Text, Alert } from 'react-native';
import { useTranslation } from 'react-i18next'

const SelectLanguage = ({ navigation }) => {
    console.log('props')
    const { t, i18n } = useTranslation();

    const changeLanguage = (value) => {
      console.log(value)
        i18n.changeLanguage(value)
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>{t('select_category')}</Text>
        <Button title="español" onPress={() => changeLanguage('es-MX')} />
          <Button title="ingles" onPress={() => changeLanguage('en-US')} />
          <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
      );
} 

export default SelectLanguage