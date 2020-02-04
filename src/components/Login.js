import React, { Component} from 'react'
import {View, Text, Image,TextInput, Alert, TouchableOpacity, ImageBackground} from 'react-native'
import styles from "../styles/styles";
import Service from "../services/Service";
// import { LoginManager,   AccessToken } from 'react-native-fbsdk';
// import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authaction from '../actions/authaction'
//import { logindata } from '../actions/authaction';
 class Login extends Component {

     constructor (props) {
    super (props)
    this.state = {
      mobile : "",
      password : "",
      email : "",
      loading: false,
       visible : false
    }
    service = new Service()
  }

signUp = () => {
 // alert(JSON.stringify(this.props))
  this.props.navigation.navigate('Register')
}
forgot = () => {
 // alert(JSON.stringify(this.props))
  this.props.navigation.navigate('Forgot')
}
help = () => {
 // alert(JSON.stringify(this.props))
  this.props.navigation.navigate('Tabs')
}

verify = () => {
 // alert(JSON.stringify(this.props))
  this.props.navigation.navigate('Verify')
}
  componentDidMount = () => {
  
    this.setState({loading : true})
    setTimeout (() => this.setState({loading : false }), 2000)
  }
    goToPage = (page) => {
      if(this.state.mobile && this.state.password)
      {
        // if (!service.validateEmail(this.state.email)) {
        //   Alert.alert("please enter valid email")
        // } 
        // else
        // {
         this.props.navigation.navigate(page)
      //  }
      }
      else
      {
        if(!this.state.mobile  && !this.state.password ) {
             Alert.alert("please enter mobile & password both")
        }
       else  if(!this.state.mobile )
        {
            Alert.alert("please enter mobile")
        }
         else if(!this.state.password )
        {
            Alert.alert("please enter password")
        }
      }
       
    }


   

    login = () => 
    {
   
      
       if (this.state.mobile && this.state.password ) {
         this.setState({visible : true})
          service.login(this.state.mobile, this.state.password).then((res) => {
            console.log(res, 'resssssss')
        //     if(res.success == true) {
           this.setState({visible : false})
           if(res.status == false){
             Alert.alert(res.message)
           }
        
        //   // this.props.actions.logindata(res)
        //   // this.props.navigation.navigate('Home2')

        // }
        // else{
        //     var data = {name : "shekhar", userId : 21}
        //   service.saveUserData('user', data)
        //    Alert.alert(res.message)
        //     this.setState({visible : false})
        //    this.props.actions.logindata(res)
        //    this.props.navigation.navigate('Home2')
        // }
                      })
       }
        else{
          Alert.alert("please enter mobile and password both")
        }
      
    }

    getUserProfile = (token) =>{ 
      fetch('https://graph.facebook.com/v2.9/me?fields=picture.width(720).height(720).as(picture_large),name,email,friends&access_token=' + token)
      .then((response) => response.json())
      .then((json) => {
        console.log(json, 'shjshhshs')
        // service.saveUserData('user', json);
         this.props.navigation.navigate('Home2')
      })
      .catch((err) => {
      //  alert(JSON.stringify(err))
      })
     
  }

  goBack = () => {
      this.props.navigation.goBack()
    }
render () { 
return (
 
       
        <View style={styles.container}>
  <Spinner visible={this.state.visible} color='#ff3f34' tintColor='#ff3f34' animation={'fade'} cancelable={false} textStyle={{ color: '#FFF' }} />
   
   <View style={{marginTop:30}}>
    <Image  style={styles.imageWidth} source={require('../images/icon.png')} ></Image>
     <View style={{marginTop:20}}>
            <View style={styles.rowAlign}>
             <Image source={require('../images/mobile.png')} style={styles.icon}/>
             <TextInput placeholder="Enter Mobile Number" value={this.state.mobile} onChangeText={(text)=>this.setState({ mobile:text})} keyboardType="numeric"></TextInput>
             </View>
              <View style={styles.rowAlign}>
             <Image source={require('../images/password.png')} style={styles.icon}/>
             <TextInput placeholder="Password" secureTextEntry ={true} value={this.state.password} onChangeText={(text)=>this.setState({ password:text})}></TextInput>
             </View>
   
     <TouchableOpacity style={styles.buttonBackground} onPress={this.login.bind(this)}>
        <Text  style={styles.welcomeLoginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection :'row', marginHorizontal :24}}>
        <TouchableOpacity style={{flex:1}} onPress={this.forgot.bind(this)}><Text style={styles.forgotSignUp}>Forgot Password?</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.signUp.bind(this)} style={{flex:1}}><Text style={styles.forgotSignUp}>New User/SignUp?</Text></TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection :'row', marginHorizontal :35}}>
        <TouchableOpacity style={{flex:1}} onPress={this.verify.bind(this)}><Text style={styles.forgotSignUp}>Resend/Verify OTP?</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.help.bind(this)} style={{flex:1}}><Text style={styles.forgotSignUp}>Help</Text></TouchableOpacity>
        </TouchableOpacity>
         

         <Text style={styles.centerText}>Pramod Kumar Keshri,{"\n"}Barhi,HazariBagh,JharaKhand{"\n"}WhatsApp -9356704158{"\n"}Email:keshripramod@gmail.com{"\n"}
         Director, Softoasis Technologies Pvt Ltd</Text>

        </View>
          </View>
      
        
        </View>
       )} 
      
}

function mapStateToProps(state, ownProps) {
    return {
        user: state
    };
  }

 function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authaction, dispatch)
    };
  }


export default connect(mapStateToProps, mapDispatchToProps)(Login);