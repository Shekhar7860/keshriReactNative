import React, { Component} from 'react'
import {View, Text, Image,TextInput,  TouchableOpacity, FlatList,  Modal, TouchableHighlight} from 'react-native'
import styles from "../styles/styles";
import Service from "../services/Service";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authaction from '../actions/authaction'

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
    
render () {
    return (<View
       style={{flex:1}}>
        
       <TouchableOpacity style={{width:"100%", flexDirection : 'row', marginTop:30}}>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("Joining")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Joining{"\n"}मोडिकारे जुड़ना</Text></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("Benefits")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Benefits {"\n"}न्यूनाधिक लाभ</Text></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("Sponsoring")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Sponsoring{"\n"}मोडिकेयर स्पोंसरिंग</Text></TouchableOpacity>


       </TouchableOpacity>

       <TouchableOpacity style={{width:"100%", flexDirection : 'row', marginTop:20}}>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("Seminar")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Seminars{"\n"}मोडिकेयर सेमिनार</Text></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("ProductDemos")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Product Demos{"\n"}Modicare उत्पाद प्रदर्शन</Text></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Buying Modicare Products{"\n"}Modicare उत्पाद खरीदना</Text></TouchableOpacity>


       </TouchableOpacity>
        <TouchableOpacity style={{width:"100%", flexDirection : 'row', marginTop:20}}>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("Offers")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Offers{"\n"}मोडिकेयर ऑफर</Text></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Leaders{"\n"}मोदीकेयर नेता</Text></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("Screen1")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Success Stories{"\n"}मोडिकेयर सक्सेस स्टोरीज</Text></TouchableOpacity>


       </TouchableOpacity>
        <TouchableOpacity style={{width:"100%", flexDirection : 'row', marginTop:20}}>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate("Complaints")} style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Complaints{"\n"}मोडिकेयर शिकायतें</Text></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Business Plan{"\n"}मोदीकेयर बिजनेस प्लान</Text></TouchableOpacity>
       <View style={{width:"5%"}}></View>
       <TouchableOpacity style={{width:"27%", height : 80, borderWidth:1, justifyContent :"center"}}><Text style={{fontSize : 12, textAlign:"center"}}> Modicare Elligibility/Termination{"\n"}मोडिकेयर पात्रता / समाप्ति</Text></TouchableOpacity>


       </TouchableOpacity>

       <Text style={{textAlign:"center", marginTop:20}}>If you have any problem related to modicare, call/whatsapp at -+916394043883 (यदि आपको मोडिकेयर, कॉल / व्हाट्सएप से संबंधित कोई समस्या है - + 916394043883 पर)</Text>

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