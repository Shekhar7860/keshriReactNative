import React, { Component} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  ActivityIndicator
} from 'react-native';
import styles from "../styles/styles";

export default class Splash extends Component {

    constructor (props) {
      super (props)
      this.state = {
        listView : true,
        mapView : false, 
        longitude : "", 
        latitude : "",
        places : [1, 2, 3]
      }

    }
   
      componentDidMount = () => {
       setTimeout(() => 
       this.props.navigation.navigate('Login'), 2000)
      
      }
     
     
     
      
  render () { 
  return (
    <ImageBackground
        source={require('../images/splashnew.png')}
        style={styles.container}>
        <ActivityIndicator animating={true} size="large" 
        color="#ff3f34" style={styles.splashLoading}/>
        </ImageBackground>) 
        
  }
}








