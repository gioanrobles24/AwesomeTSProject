import React, { useState, useEffect  } from 'react'
import { View , StyleSheet, SafeAreaView, Dimensions, Alert  } from 'react-native';
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import MapboxGL from "@react-native-mapbox-gl/maps"
import Geolocation from '@react-native-community/geolocation'
import { Button } from 'react-native-elements'
/* i wanted to use formik but i run out of time for personal things */

MapboxGL.setAccessToken("pk.eyJ1IjoiZWxjZXJiZXJ1cyIsImEiOiJja28yOTljcXIweGVyMzBwNGliaTlvMWFpIn0.BKnolQgB-m2s09EAL-xb8Q") 

const MapPrice = ({ navigation }) => {
    const { width, height } = Dimensions.get('window');
    const { t, i18n } = useTranslation()

    const [ latitude, setLatitude ] = useState(0)
    const [ longitude, setLongitude ] = useState(0)
  
    useEffect(() => {
        Geolocation.getCurrentPosition(
            position => {
              setLatitude(position.coords.latitude)
              setLongitude(position.coords.longitude)
            },
            error => Alert.alert('Error', JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 2000},
          )
    })
    const goToPersonalInfo =  () => {
       navigation.navigate('PersonalInfo') 
    }

    return (
        <SafeAreaView style={styles.container}>
             <MapboxGL.MapView style={styles.map}>
              <MapboxGL.Camera
                zoomLevel={16}
                centerCoordinate={[longitude, latitude]}
              />   
            </MapboxGL.MapView>
            <View style={styles.buttonRow}>
                <Button
                    title={t('next')}
                    type="solid"
                    onPress={ () => goToPersonalInfo()}
                    buttonStyle={styles.buttonPrimary}
                />
                <Button
                    title={t('back')}
                    type="solid"
                    onPress={ () => navigation.back()}
                    buttonStyle={styles.buttonSecondary}
                />
            </View>
        </SafeAreaView>
      );
} 

const mapStateToProps = state  => { 
  return { data : state.todos}
 }

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps , mapDispatchToProps)(MapPrice) 

const styles = StyleSheet.create({
  container : {
    flexDirection: 'column',
    flex : 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 0.6,
    height: 'auto',
  },
  buttonRow : {
    margin:20,
  }, 
  buttonPrimary : {
    backgroundColor : '#4aae4f'
  },
  buttonSecondary : {
    backgroundColor:'#a4d4a5',
    marginTop:10
  } 
})