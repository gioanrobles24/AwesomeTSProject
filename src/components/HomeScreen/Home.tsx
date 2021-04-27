import * as React from 'react';
import { Button, View } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title="Go to Profile"
            onPress={() => navigation.navigate('Language')}
          />
        </View>
      );
} 
export default Home