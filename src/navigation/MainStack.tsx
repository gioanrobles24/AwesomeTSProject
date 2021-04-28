import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './../components/HomeScreen/Home'
import SelectLanguage from './../components/LanguageScreen/SelectLanguage'
import CovidTool from './../components/CovidToolScreen/CovidTool' 

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Language" component={SelectLanguage} />  
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CovidTool" component={CovidTool} />
        </Stack.Navigator>
      );
}
export default MainStack