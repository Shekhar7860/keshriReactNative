import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from "../styles/styles";

export default class About extends Component {

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
    this.props.navigation.navigate('Login')
   }
  render() {
      const  NewImage =   <Image source={require('../images/78.png')} style={styles.profilePic}/>
    return (
    
      <View style={{flex:1}}>
         <View style={styles.toolbar}>
         <TouchableOpacity onPress={() => this.goBack()}>
                    <Image style={{width:30,marginLeft:5,  height:30}}source={require('../images/back.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles.toolbarTitle}>About</Text>
                    <TouchableOpacity>
                    <Image style={{width:30,marginRight:10,  height:30}}></Image>
                    </TouchableOpacity>
                </View>
                               <ScrollView>
                  <View style={styles.middleContainer}>
                <Text>  Dear All,
{"\n"}
We are happy to announce the launch of Our Own innovative Mobile App for Keshri Samaj, Developed under the guidance of Active members of Keshri Samaj, Barhi, Hazaribagh.
{"\n"}{"\n"}
This app is  for each individual of keshariwani's community & this will help to fulfill complete requirements of Matrimonial, Business & Professional career.{"\n"}{"\n"} In next version we will have additional features of Events, Communication etc The mobile Application has following modules. Registration, Login, OTP Verification, My Profile, Multiple Matrimonial Profile, Creation for Family members using Single Account, Browse Matrimonial Profile, Send request, Messaging, Members List, Profile matching & Acceptance

Your Feedbacks will be important to us. {"\n"} Please write your feedback & comments to improve the App.{"\n"}{"\n"}
{"\n"}
Thanks
{"\n"} 
</Text>
   <View style={{flexDirection:'row'}}>
<Text style={{color:"#ff3f34", width:"50%"}}>
Shri Prameshwar Prasad Keshri                             
Barhi,Jharkhand, Keshawani Samaj</Text>
<Text style={{marginLeft:20, width:"50%", color:"#ff3f34"}}>Developed & Maintained By
Pramod Kumar & Jyoti Keshri 
 9356704158</Text></View>         
   </View>
     </ScrollView>
      </View>
      
    );
}


}