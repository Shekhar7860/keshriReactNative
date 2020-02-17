import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from "../styles/styles";
import { s, vs, moderateScale, ScaledSheet } from 'react-native-size-matters';
export default class Volume extends Component {

  constructor(props){
    super(props);
    this.state = { 
      name:'',
      cls:'',
      city:'',
      age:'',
      mobile : '',
      confirmPasswordError:'',
      passwordError:'',
      emailFormatError:'',
      mobileError:'',
      emailFormatError:'',
      loading: false,
      cardheight:300
    }
    
  }

    openMenu = () => {
    this.props.navigation.openDrawer()
  }
  sent = () => {

  }
  received = () => {

  }

   submit = () => {
       if (this.state.name && this.state.email && this.state.mobile )
       {
           alert("profile updated successfully")
           // this.props.navigation.navigate('Profile')
       }
       else
       {
           alert("please enter all details both")
       }
   }

  
   goBack = () =>{
    this.props.navigation.pop()
   }
  render() {
      const  NewImage =   <Image source={require('../images/78.png')} style={styles.profilePic}/>
    return (
    
      <View style={{flex:1}}>
         <View style={styles.toolbar}>
         <TouchableOpacity onPress={() => this.goBack()}>
                    <Image style={{width:30,marginLeft:5,  height:30}}source={require('../images/back.png')}></Image>
                    </TouchableOpacity>
                    <Text style={{...styles.toolbarTitle, textAlign:'center'}}>Total Requests (कुल अनुरोध)</Text>
                    <TouchableOpacity>
                    <Image style={{width:30,marginRight:10,  height:30}}></Image>
                    </TouchableOpacity>
                </View>
                 <TouchableOpacity style={{...styles.buttonBackground3, marginTop:moderateScale(20)}} onPress={this.sent.bind(this)}>
        <Text  style={{...styles.welcomeLoginTextRequests, textAlign:"center"}}>Click here to View Sent Requests{"\n"}(प्रेषित अनुरोध देखने के लिए यहां क्लिक करें)</Text>
        </TouchableOpacity> 
        
        <TouchableOpacity style={{...styles.buttonBackground3, marginTop:moderateScale(20)}} onPress={this.received.bind(this)}>
        <Text  style={{...styles.welcomeLoginTextRequests, textAlign:"center"}}>Click here to View Received Requests{"\n"}(प्राप्त अनुरोध देखने के लिए यहां क्लिक करें)</Text>
        </TouchableOpacity>  
               
      </View>
      
    );
}


}