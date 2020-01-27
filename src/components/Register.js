import React, { Component} from 'react'
import {View, Text,TextInput, Image, TouchableOpacity, Alert, ScrollView, Picker} from 'react-native'
import styles from "../styles/styles";
import RadioButton from './RadioButton';
import Spinner from 'react-native-loading-spinner-overlay';

import Service from '../services/Service';
import Loader from '../services/Loader';

class Register extends Component {
     constructor (props) {
    super (props)
    this.state = {
      email : "",
      username : "",
      id : "",
      whatsappNumber : "",
      name : "",
      password : "",
      confirmPassword : "",
      visible : false, 
      otpField : false,
      mobile : "",
      about : "",
      picker1:"",
      picker2: "",
      otp : "",
      selectedItem : "Student",
      city : "", 
      email : "",
       radioItems:
        [
          {
            label: 'Student',
            size: 30,
            color: '#636c72',
            selected: true
          },

          {
            label: 'Partner',
            color: '#636c72',
            size: 30,
            selected: false,
          },

          
        ]
    }
    service = new Service();
  }
    goToPage = (page) => {
       this.setState({visible : true})
       
      if(this.state.picker1 !=="" && this.state.picker2 !== "")
      {
       console.log('selectedItem', this.state.selectedItem, "picker1", this.state.picker1, "picker2", this.state.picker2)
       service.register(this.state.id, this.state.selectedItem, this.state.email,  this.state.name, this.state.mobile, this.state.whatsappNumber, this.state.picker1, this.state.picker2, this.state.city, this.state.about).then((res) => {
        console.log(res, 'resggggsgs')
        if(res.message == "User Successfully Register") {
          this.setState({visible : false})
          Alert.alert(res.message)
           this.props.navigation.navigate('Thanks')

        }
        else{
                this.setState({visible : false})

          Alert.alert("An Error Occured")
        }
       })
      }
      else{
        alert("please enter valid details")
      }
      // if(this.state.mobile && this.state.password && this.state.username && this.state.confirmPassword && this.state.otp)
      // {
      //    if ( this.state.password != this.state.confirmPassword) {
      //     Alert.alert("password and confirmpassword do not match")
      //   } 
      //   else
      //   {
      //    this.props.navigation.navigate(page)
      //   }
         
      // }

      // else
      // {
      //   if(!this.state.mobile && !this.state.password && !this.state.username && !this.state.confirmPassword && !this.state.otp) {
      //        Alert.alert("please enter all details")
      //   }
      //  else  if(!this.state.mobile )
      //   {
      //       Alert.alert("please enter mobile")
      //   }
      //    else if(!this.state.password )
      //   {
      //       Alert.alert("please enter password")
      //   }
      //   else  if(!this.state.username )
      //   {
      //       Alert.alert("please enter email")
      //   }
      //    else if(!this.state.confirmPassword )
      //   {
      //       Alert.alert("please enter confirm password")
      //   }
       
      // }
        
    }

sendOTP = () => {
  Alert.alert("OTP send Successfully")
}

verifyOTP = () => {
  if(this.state.otp.length == 4) {
    Alert.alert("OTP Verified Successfully")
  }
  else
  {
    Alert.alert("Please enter valid OTP")
  }
}
  setMobile = (text) => 
  {
    if(text.length  == 10)
    {
      this.setState({otpField : true})
    }
    this.setState({ mobile :text})
  }

  changeActiveRadioButton(index) {
    this.state.radioItems.map((item) => {
      item.selected = false;
    });

    this.state.radioItems[index].selected = true;

    this.setState({ radioItems: this.state.radioItems }, () => {
      this.setState({ selectedItem: this.state.radioItems[index].label });
    });
  }

  goBack = () => {
      this.props.navigation.goBack()
    }
render () { 
return (<View style={styles.container}>
  <Spinner visible={this.state.visible} color='#ff3f34' tintColor='#ff3f34' animation={'fade'} cancelable={false} textStyle={{ color: '#FFF' }} />
  <View style={styles.toolbar}>
   <TouchableOpacity onPress={() => this.goBack()}>
                    <Image style={{width:30,marginLeft:5,  height:30}}source={require('../images/back.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles.toolbarTitle}>Register</Text>
                    <TouchableOpacity style={styles.toolbarButton}>
                   
                    </TouchableOpacity>
                </View>
      <Image  style={styles.imageWidth} source={require('../images/icon.png')} ></Image>
      <ScrollView>

    <View style={{marginTop:10}}>
    
    
     
    <TextInput style={styles.input} placeholder="Enter Name" onChangeText={(text)=>this.setState({ name:text})} placeholderTextColor = "#95a5a6"></TextInput>
     <TextInput style={styles.input} placeholder="Enter Email" onChangeText={(text)=>this.setState({ email:text})} placeholderTextColor = "#95a5a6"></TextInput>
     <TextInput style={styles.input} placeholder="Enter Mobile Number " onChangeText={(text)=>this.setMobile(text) } placeholderTextColor = "#95a5a6"  keyboardType='numeric' maxLength={10}></TextInput>
      <TextInput style={styles.input} placeholder="Password" onChangeText={(text)=>this.setState({ whatsappNumber:text})} placeholderTextColor = "#95a5a6"  keyboardType='numeric' maxLength={10}></TextInput>
      <Text style={{textAlign : "center"}}>Are You From Keshri Samaj?</Text>
           <Text  style={{textAlign:'center'}}>By Registering myself,{"\n"} I agree to terms and conditions</Text>
    <TouchableOpacity style={styles.buttonBackground} onPress={this.goToPage.bind(this, 'Form')}>
        <Text  style={styles.welcomeLoginText}>Register</Text>

        </TouchableOpacity>
        
        </View>
          
        </ScrollView>
        </View>)} 
      
}

const mapStateToProps = state => {


  return {

  };
};

const mapDispatchToProps = {
  
};

export default Register;