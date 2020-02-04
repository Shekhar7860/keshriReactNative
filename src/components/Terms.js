import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from "../styles/styles";

export default class Terms extends Component {

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
                    <Text style={styles.toolbarTitle}>Help</Text>
                    <TouchableOpacity>
                    <Image style={{width:30,marginRight:10,  height:30}}></Image>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                  <View style={styles.middleContainer}>
                <Text>   1.Go to Google Play Store Android & Type "Keshri Samaj"
{"\n"}
2.Download & Install
{"\n"}
3.After Installation is completed,App will load in Smart Phone
{"\n"}
4.Click "Register" & Create your Membership Account.{"\n"} Use your correct 10 digit mobile 
number as mobile number will be used for login in to the App 
{"\n"}
5.You need to verify your Mobile Number using the OTP received
{"\n"}
6.After Mobile Number verification on you can login using mobile number & password
{"\n"}
7.You can use forgot password feature to reset your password anytime
{"\n"}
8.After Login You can upload your profile from my account tab
{"\n"}
9.You can create as my matrimonial profile with Photo of each of your family members, Relative etc
{"\n"}
10.Search Matrimonial Profiles, Select your match & send request using your own multiple Profiles created by you
{"\n"}
11.Request will be sent & upon acceptance you can start communicating using message section
{"\n"}
12.You can accept & reject the request, reject will stop the communication with selected profile & accept will allow you to communicate using message section
{"\n"}
13.Deactivate the profile if matrimonial requirements are over.
{"\n"}
14. Browse Keshri Samaj member's
{"\n"}
{"\n"}Support Admins :{"\n"}<Text style={{fontWeight:"bold", marginTop:20}}>1. Shambhaw Keshri, Hazaribagh (8409211973)  {"\n"} 2. Dr Badri Vishal ,Chitrakoot Uttar Pradesh(9648669168)</Text> </Text>
            
   </View>
     </ScrollView>
      </View>
      
    );
}


}