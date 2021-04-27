/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { I18nextProvider } from "react-i18next";
import i18n from './src/languages/i18n'
import React from 'react'

const root = () => {
    return(
        <I18nextProvider i18n={i18n}>
          <App/>
        </I18nextProvider>
    )
}

AppRegistry.registerComponent( 
    appName, 
    () => root )
