import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Alert, Dimensions,Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from "../styles/styles";
import Spinner from 'react-native-loading-spinner-overlay';

export default class Tasks extends Component {

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
       visible: false,
      cardheight:300
    }
    
  }


   submit = () => {
       if (this.state.mobile)
       {
          this.setState({visible : true})
          service.forgotPassword(this.state.mobile).then((res) => {
              console.log(res, 'resssssss')
        //     if(res.success == true) {
           this.setState({visible : false})
           if(res){
             Alert.alert(res[0].message)
           }
           })
           // this.props.navigation.navigate('Profile')
       }
       else
       {
           Alert.alert("please enter Mobile Number")
       }
   }


   goBack = () =>{
    this.props.navigation.goBack()
   }
  
  render() {
      const  NewImage =   <Image source={require('../images/78.png')} style={styles.profilePic}/>
      let width = Dimensions.get('window').width
let height =  Dimensions.get('window').height
    return (
    
       <View style={{flex:1}}>
         <Spinner visible={this.state.visible} color='#ff3f34' tintColor='#ff3f34' animation={'fade'} cancelable={false} textStyle={{ color: '#FFF' }} />
         <View style={styles.toolbar}>
         <TouchableOpacity onPress={() => this.goBack()}>
                    <Image style={{width:30,marginLeft:5,  height:30}}source={require('../images/back.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles.toolbarTitle}>Reset Password</Text>
                    <TouchableOpacity>
                    <Image style={{width:30,marginRight:10,  height:30}}></Image>
                    </TouchableOpacity>
                </View>
                  <View style={{marginTop:20}}>
                 <View style={styles.rowAlign}>
             <Image source={require('../images/mobile.png')} style={styles.icon}/>
             <TextInput placeholder="Enter mobile" value={this.state.mobile} onChangeText={(text)=>this.setState({ mobile:text})} keyboardType="default"></TextInput>
             </View>
             </View>
              <TouchableOpacity style={styles.buttonBackground} onPress={this.submit.bind(this)}>
        <Text  style={styles.welcomeLoginText}>Submit</Text>
        </TouchableOpacity>
               
      </View>
      
    );
}


}