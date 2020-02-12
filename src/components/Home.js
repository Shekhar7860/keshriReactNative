import React, { Component} from 'react'
import {View, Text, Image,TextInput, ScrollView,  TouchableOpacity, FlatList,  Alert, TouchableHighlight} from 'react-native'
import styles from "../styles/styles";
import Service from "../services/Service";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authaction from '../actions/authaction'
import { s, vs, moderateScale, ScaledSheet } from 'react-native-size-matters';

 class Home extends Component {

  constructor (props) {
    super (props)
    this.state = {
      listView : true,
      mapView : false, 
      longitude : "", 
      latitude : "",
      places : [1, 2],
      modalVisible: false
      
    }
    service = new Service()
  }

    componentDidMount = () => {
      console.log('userProps', this.props)
      alert(JSON.stringify(this.props))
     
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
   paying=()=>{
    Alert.alert("Coming Soon")
   }
    
render () {
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
         
       <TouchableOpacity style={{width:"100%", flexDirection : 'row', marginTop:30}}>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("Joining")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Search Matrimonials{"\n"}(वैवाहिक खोज)</Text></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("Benefits")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> My Account{"\n"} (मेरा खाता)</Text></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("Sponsoring")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Requests {"\n"} (अनुरोधों)</Text></TouchableOpacity>


       </TouchableOpacity>

       <TouchableOpacity style={{width:"100%", flexDirection : 'row', marginTop:20}}>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("Seminar")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}>Create Matrimonial Profile {"\n"}(वैवाहिक प्रोफ़ाइल बनाएं)</Text></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("ProductDemos")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}>My Matrimonial Profiles{"\n"} (मेरी वैवाहिक प्रोफाइल)</Text></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}>My Matrimonial Messages {"\n"} (मेरे मैट्रिमोनियल संदेश)</Text></TouchableOpacity>

       </TouchableOpacity>
        <TouchableOpacity style={{width:"100%", flexDirection : 'row', marginTop:20}}>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("Offers")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Careers{"\n"}(कैरियर्स )</Text></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}>Members{"\n"}(सदस्य)</Text></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("Screen1")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}>Change Password{"\n"}(पासवर्ड बदलें)</Text></TouchableOpacity>


       </TouchableOpacity>
        <TouchableOpacity style={{width:"100%", flexDirection : 'row', marginTop:20}}>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("Complaints")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}>My Messages {"\n"} (मेरे संदेश )</Text></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Membership Fee{"\n"}(मेम्बरशिप फी)</Text></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Career Details{"\n"}(कैरियर विवरण)</Text></TouchableOpacity>


       </TouchableOpacity>
       <TouchableOpacity style={{width:"100%", flexDirection : 'row', marginTop:20}}>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("Complaints")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}>Add/Invite Users{"\n"}(उपयोगकर्ता जोड़ें / आमंत्रित करें)</Text></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}} onPress={this.logOut.bind(this)}><Text style={{fontSize : 12, textAlign:"center"}}> Logout {"\n"} (लोग आउट)</Text></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity style={{width:"27%", justifyContent :"center"}}></TouchableOpacity>


       </TouchableOpacity>

       <Text style={{textAlign:"center", marginTop:20}}>If you have any problem related to modicare, call/whatsapp at -+916394043883 (यदि आपको मोडिकेयर, कॉल / व्हाट्सएप से संबंधित कोई समस्या है - + 916394043883 पर)</Text>
  }
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