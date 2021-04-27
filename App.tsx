

 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import MainStack from './src/navigation/MainStack'
 import { Provider } from 'react-redux'
 import  store  from './src/services/store/store'
 
 const App = () => {
   return (
     <Provider store={store}>
        <NavigationContainer >
         <MainStack />
        </NavigationContainer>
     </Provider>
   
   );
 };
 export default App;
