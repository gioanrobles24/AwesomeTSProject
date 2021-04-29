import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './../components/HomeScreen/Home'
import SelectLanguage from './../components/LanguageScreen/SelectLanguage'
import CovidTool from './../components/CovidToolScreen/CovidTool' 
import StepOne from './../components/CovidToolScreen/Steps/StepOne'
import StepTwo from './../components/CovidToolScreen/Steps/StepTwo'
const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Language" component={SelectLanguage} />  
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CovidTool" component={CovidTool} />
          <Stack.Screen name="CovidTStepOne" component={StepOne} />
          <Stack.Screen name="CovidTStepTwo" component={StepTwo} />
        </Stack.Navigator>
      );
}
export default MainStack