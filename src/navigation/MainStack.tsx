import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './../components/HomeScreen/Home'
import SelectLanguage from './../components/LanguageScreen/SelectLanguage'
import CovidTool from './../components/CovidToolScreen/CovidTool' 
import StepOne from './../components/CovidToolScreen/Steps/StepOne'
import StepTwo from './../components/CovidToolScreen/Steps/StepTwo'
import StepThree from './../components/CovidToolScreen/Steps/StepThree'
import StepFour from './../components/CovidToolScreen/Steps/StepFour'
import PriceGrouding from './../components/PriceGougingScreen/PriceGouging'
import Resume from './../components/PriceGougingScreen/ResumeProb'
import MapPrice from './../components/PriceGougingScreen/MapPrice'
import PersonalInfo from './../components/PriceGougingScreen/PersonalInfo'

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Language" component={SelectLanguage} />  
          <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
          <Stack.Screen name="CovidTool" component={CovidTool} />
          <Stack.Screen name="CovidTStepOne" component={StepOne} />
          <Stack.Screen name="CovidTStepTwo" component={StepTwo} />
          <Stack.Screen  name="CovidTStepThree" component={StepThree} />
          <Stack.Screen options={{headerShown: false}}  name="CovidTStepFour" component={StepFour} />
          <Stack.Screen  name="PriceGrouding" component={PriceGrouding} />
          <Stack.Screen  name="Resume" component={Resume} />
          <Stack.Screen  name="MapPrice" component={MapPrice} />
          <Stack.Screen  name="PersonalInfo" component={PersonalInfo} />
        </Stack.Navigator>
      );
}
export default MainStack