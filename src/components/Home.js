import React, { Component} from 'react'
import {View, Text, Image,TextInput, ScrollView,  TouchableOpacity, FlatList,  Alert, TouchableHighlight} from 'react-native'
import styles from "../styles/styles";
import Service from "../services/Service";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authaction from '../actions/authaction'
import { s, vs, moderateScale, ScaledSheet } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

 class Home extends Component {

  constructor (props) {
    super (props)
    this.state = {
      listView : true,
      mapView : false, 
      longitude : "", 
      name : "",
      places : [1, 2],
      modalVisible: false
      
    }
   
    service = new Service()
  }

    componentDidMount = () => {
      console.log('userProps', this.props)
         service.getUserData('user').then((res) => {
      console.log('localData', res)
      var data = JSON.parse(res);
         this.homeData(data)

      })
      
     
    }

    homeData = (data) => {
       setTimeout(() =>{
      this.props.actions.logindata(data)
        }, 1000)
    }

logOut=() => {
   Alert.alert(
      'Log Out',
      'Are you Sure? You want to Log Out', [{
          text: 'Cancel',
          style: 'cancel'
      },
      {
          text: 'OK',
          onPress: () => 
          this.exit()
      }, ], {
          cancelable: false
      }
   )
}

exit = () => {
  service.clearLocalStorage()
  this.props.navigation.navigate('Login')
}
   
    getCategoriesPlaces = () => {
      service.getCategories().then(res => {
        console.log("myres", res);
       
      });
    }
    getProfiles = () => {
      service.getProfiles().then(res => {
        console.log("new", res);
     //   this.setState({places : res.profileList})
      });
    }
   
    searchFilterFunction = text => {
      this.setState({
         value: text,
       });
   
      
     }

     toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }

   getUserName = () => {
    console.log('propsssss', this.props)
 //    if(this.props.logindata){
 //   this.setState({name : this.props.logindata.name})
 // }
   }
   paying=()=>{
    Alert.alert("Coming Soon")
   }
    
render () {
  console.log('prssss', (this.props.users))
  const userData=this.props.logindata
    return (<View
       style={{flex:1}}>
       
       <ScrollView>
       <TouchableOpacity onPress={this.paying.bind(this)}>
        <Image source={{uri:"https://www.payumoney.com//media/images/payby_payumoney/buttons/211.png"}} style={{height:moderateScale(80), width:moderateScale(180), marginTop:moderateScale(20), alignSelf:'center'}}/>
         </TouchableOpacity>

          <TouchableOpacity onPress={this.paying.bind(this)}>
       
        <Image source={require('../images/onelinelogo.png')} style={{width:moderateScale(300), marginTop:moderateScale(10), height:moderateScale(60), alignSelf:"center"}}/>
         </TouchableOpacity>
               <Text style={{textAlign:'center', marginTop:moderateScale(10), fontSize:moderateScale(20), fontWeight:"bold", color :"#ff3f34"}}>Hello {this.props.user ? 'this.props.user.auth.logindata.name' : null}</Text>

         
       <TouchableOpacity style={{width:"100%", flexDirection : 'row', marginTop:30}}>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("Search")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}>
       <Image style={{width:moderateScale(94), height:moderateScale(80)}} source={require('../images/mrg.jpg')}/></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("Account")} style={{width:"27%", height : 80,backgroundColor :"#e74c3c",  borderWidth:1, justifyContent :"center", alignItems:"center"}}><Icon name="user" size={30} color="#ffffff"/></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("Requests")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center", alignItems:'center', backgroundColor:"#f39c12"}}><Icon name="anchor" size={30} color="#ffffff"/></TouchableOpacity>


       </TouchableOpacity>
       <View style={{flexDirection:'row', alignItems:"center", justifyContent:'center', width:'100%'}}>
       <View style={{width:"33%"}}><Text style={{ fontSize : 12, textAlign:'center'}}>Search Matrimonials{"\n"}(वैवाहिक खोज)</Text></View>
        <View style={{width:"33%"}}><Text style={{textAlign:'center', fontSize : 12}}> My Account{"\n"} (मेरा खाता)</Text></View>
       <View style={{width:"33%"}}><Text style={{ fontSize : 12, textAlign:'center'}}> Requests {"\n"} (अनुरोधों)</Text></View>
       </View>


       <TouchableOpacity style={{width:"100%", flexDirection : 'row', marginTop:20}}>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("CreateMatrimonial")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}>
       <Image style={{width:moderateScale(94), height:moderateScale(80)}} source={require('../images/mrg.jpg')}/></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("MyMatrimonial")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Image style={{width:moderateScale(94), height:moderateScale(80)}} source={require('../images/mrg.jpg')}/></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("MatrimonialMessages")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center", alignItems:"center", backgroundColor:"#2ecc71"}}><Icon name="envelope" size={30} color="#ffffff"/></TouchableOpacity>

       </TouchableOpacity>
       <View style={{flexDirection:'row', alignItems:"center", justifyContent:'center', width:'100%'}}>
       <View style={{width:"33%"}}><Text style={{ fontSize : 12, textAlign:'center'}}>Create Matrimonial Profile {"\n"}(वैवाहिक प्रोफ़ाइल बनाएं)</Text></View>
        <View style={{width:"33%"}}><Text style={{textAlign:'center', fontSize : 12}}>My Matrimonial Profiles{"\n"} (मेरी वैवाहिक प्रोफाइल)</Text></View>
       <View style={{width:"33%"}}><Text style={{ fontSize : 12, textAlign:'center'}}>My Matrimonial Messages {"\n"} (मेरे मैट्रिमोनियल संदेश)</Text></View>
       </View>
  
        <TouchableOpacity style={{width:"100%", flexDirection : 'row', marginTop:20}}>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("Careers")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center", alignItems:"center", backgroundColor:"#3498db"}}><Icon name="badge" size={30} color="#ffffff"/></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("Members")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center", alignItems:"center", backgroundColor:"#8e44ad"}}><Icon name="people" size={30} color="#ffffff"/></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("Change")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center", backgroundColor:"#778ca3", alignItems:"center"}}><Icon name="cursor" size={30} color="#ffffff"/></TouchableOpacity>


       </TouchableOpacity>
        <View style={{flexDirection:'row', alignItems:"center", justifyContent:'center', width:'100%'}}>
       <View style={{width:"33%"}}><Text style={{fontSize : 12, textAlign:"center"}}> Careers{"\n"}(कैरियर्स )</Text></View>
        <View style={{width:"33%"}}><Text style={{textAlign:'center', fontSize : 12}}>Members{"\n"}(सदस्य)</Text></View>
       <View style={{width:"33%"}}><Text style={{ fontSize : 12, textAlign:'center'}}>Change Password{"\n"}(पासवर्ड बदलें)</Text></View>
       </View>
        <TouchableOpacity style={{width:"100%", flexDirection : 'row', marginTop:20}}>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("Messages")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center", alignItems:"center", backgroundColor:"#1abc9c"}}><Icon name="envelope" size={30} color="#ffffff"/></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity  onPress={() => this.props.navigation.navigate("Pay")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center", alignItems:"center", backgroundColor:"#fed330"}}><Icon name="paypal" size={30} color="#ffffff"/></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("CareerDetails")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center", alignItems:"center", backgroundColor:"#eb3b5a"}}><Icon name="exclamation" size={30} color="#ffffff"/></TouchableOpacity>


       </TouchableOpacity>
       <View style={{flexDirection:'row', alignItems:"center", justifyContent:'center', width:'100%'}}>
       <View style={{width:"33%"}}><Text style={{fontSize : 12, textAlign:"center"}}> My Messages {"\n"} (मेरे संदेश )</Text></View>
        <View style={{width:"33%"}}><Text style={{textAlign:'center', fontSize : 12}}>Membership Fee{"\n"}(मेम्बरशिप फी)</Text></View>
       <View style={{width:"33%"}}><Text style={{ fontSize : 12, textAlign:'center'}}>Career Details{"\n"}(कैरियर विवरण)</Text></View>
       </View>


       <TouchableOpacity style={{width:"100%", flexDirection : 'row', marginTop:20}}>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("Invite")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center", alignItems:"center", backgroundColor:"#d1d8e0"}}><Icon name="user-follow" size={30} color="#ffffff"/></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center", alignItems:"center", backgroundColor:"#EA2027"}} onPress={this.logOut.bind(this)}><Icon name="logout" size={30} color="#ffffff"/></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity style={{width:"27%", justifyContent :"center"}}></TouchableOpacity>


       </TouchableOpacity>
        <View style={{flexDirection:'row', alignItems:"center", justifyContent:'center', width:'100%'}}>
       <View style={{width:"33%"}}><Text style={{fontSize : 12, textAlign:"center"}}>Add/Invite Users{"\n"}(उपयोगकर्ता जोड़ें / आमंत्रित करें)</Text></View>
        <View style={{width:"33%"}}><Text style={{textAlign:'center', fontSize : 12, marginTop:moderateScale(-10)}}>LogOut {"\n"} (लोग आउट)</Text></View>
       <View style={{width:"33%"}}><Text style={{ fontSize : 12, textAlign:'center'}}></Text></View>
       </View>


       <Text style={{textAlign:"center", marginTop:moderateScale(30), fontSize:moderateScale(16)}}>Developed & Maintained By{"\n"}<Text style={{color:"#EE5A24", fontWeight:"bold"}}>Pramod Kumar Keshri</Text>{"\n"}Barhi. HazariBagh, JharKhand{"\n"}Whatsapp:9356704158{"\n"}Email:keshripramod@gmail.com</Text>
  
 </ScrollView>

        </View>)
  }
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


export default connect(mapStateToProps, mapDispatchToProps)(Home);