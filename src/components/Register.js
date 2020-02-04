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
      checked : false,
      mobile : "", 
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
    signUp = (page) => {

    if(this.state.name && this.state.email && this.state.mobile && this.state.password  )
    {
      if(this.state.checked){
       if(this.state.name.trim() && this.state.email && this.state.mobile && this.state.password.trim() )
      
    {
      if(service.validateEmail(this.state.email))
      {
      this.setState({visible : true})
       service.register(this.state.name, this.state.email,   this.state.mobile, this.state.password).then((res) => {
        alert(JSON.stringify(res))
        // if(res.message == "User Successfully Register") {
        //   this.setState({visible : false})
        //   Alert.alert(res.message)
        //    this.props.navigation.navigate('Thanks')

        // }
        // else{
        //         this.setState({visible : false})

        //   Alert.alert("An Error Occured")
        // }
       })
      }
      else{
        Alert.alert("Invalid Email Id")
      }
    }
    else {
      Alert.alert("Fields Cannot Be Emptyy")
    }
  }else {
    Alert.alert("Please accept the conditions")
  }
   
    }
    else {
    Alert.alert("Please enter all details")
    }
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
changeImage = () => {
if(this.state.checked ){
  this.setState({checked : false})
}
else {
    this.setState({checked : true})

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
      <View style={{marginTop:20}}>
      <Image  style={styles.imageWidth} source={require('../images/icon.png')} ></Image>
      </View>
      <ScrollView>

    <View style={{marginTop:10}}>
    
    
      <View style={styles.rowAlign}>
             <Image source={require('../images/name.png')} style={styles.icon}/>
             <TextInput placeholder="Enter Name" value={this.state.name} onChangeText={(text)=>this.setState({ name:text})}></TextInput>
             </View>
             <View style={styles.rowAlign}>
             <Image source={require('../images/email1.png')} style={styles.icon}/>
             <TextInput placeholder="Enter Email" value={this.state.email} onChangeText={(text)=>this.setState({ email:text})}></TextInput>
             </View>
             <View style={styles.rowAlign}>
             <Image source={require('../images/mobile.png')} style={styles.icon}/>
             <TextInput placeholder="Enter Mobile Number" keyboardType="numeric" value={this.state.mobile} onChangeText={(text)=>this.setState({ mobile:text})}></TextInput>
             </View>
              <View style={styles.rowAlign}>
             <Image source={require('../images/password.png')} style={styles.icon}/>
             <TextInput placeholder="Password" secureTextEntery ={true} value={this.state.password} onChangeText={(text)=>this.setState({ password:text})}></TextInput>
             </View>
        <View style={styles.rowAlign2}>
             <TouchableOpacity onPress={() => this.changeImage()}>{!this.state.checked ? <Image source={require('../images/check-box.png')} style={styles.icon}/> : <Image source={require('../images/check-box-checked.png')} style={styles.icon}/>}</TouchableOpacity>
             <Text style={{textAlign : "center",marginTop:15}}>Are You From Keshri Samaj?</Text>
             </View>
   

           <Text  style={{textAlign:'center'}}>By Registering myself,{"\n"} I agree to terms and conditions</Text>
    <TouchableOpacity style={styles.buttonBackground} onPress={this.signUp.bind(this)}>
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