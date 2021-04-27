

 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import MainStack from './src/navigation/MainStack'
 import i18n from './src/languages/i18n'
 import { I18nextProvider } from "react-i18next";
 const App = () => {
   return (
    <NavigationContainer >
         <MainStack />
    </NavigationContainer>
   );
 };
 export default App;
