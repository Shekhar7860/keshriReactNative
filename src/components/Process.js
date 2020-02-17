import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from "../styles/styles";
import { Dropdown } from 'react-native-material-dropdown';
import { s, vs, moderateScale, ScaledSheet } from 'react-native-size-matters';

export default class Process extends Component {

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
findState = () => {

}
    openMenu = () => {
    this.props.navigation.openDrawer()
  }
  search = () => {

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
      let data = [{
  value: '1995',
}, {
  value: '1996',
}, {
  value: '1997',
}, {
  value: '1998',
}, {
  value: '1999',
}, {
  value: '2000',
},  {
  value: '2001',
},  {
  value: '2002',
},  {
  value: '2003',
},  {
  value: '2004',
},  {
  value: '2005',
},  {
  value: '2006',
},  {
  value: '2007',
},  {
  value: '2008',
},  {
  value: '2009',
},  {
  value: '2010',
},  {
  value: '2011',
},  {
  value: '2012',
},  {
  value: '2013',
},  {
  value: '2014',
},  {
  value: '2015',
},  {
  value: '2016',
},  {
  value: '2017',
},  {
  value: '2018',
},  {
  value: '2019',
}];
let data2 = [{
  value: 'Bride',
}, {
  value: 'BrideGroom',
}];
    return (
    
      <View style={{flex:1}}>
         <View style={styles.toolbar}>
         <TouchableOpacity onPress={() => this.goBack()}>
                    <Image style={{width:30,marginLeft:5,  height:30}}source={require('../images/back.png')}></Image>
                    </TouchableOpacity>
                    <Text style={{...styles.toolbarTitle, textAlign :'center'}}>Search Matrimonials(वैवाहिक खोज)</Text>
                    <TouchableOpacity>
                    <Image style={{width:30,marginRight:10,  height:30}}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', width:"90%", marginHorizontal:moderateScale(24)}}>
                <View style={{width:"25%"}}><Text style={{marginTop:moderateScale(35), color :"#ff3f34"}}>Age From</Text></View>
                <View style={{width:"25%"}}><Dropdown
                containerStyle={{ width:"100%"}}
        label='Education'
        data={data}
        onChangeText={(val) =>  
          this.setState({picker1: val})
         } 
      /></View>
                <View style={{width:"25%"}}><Text style={{marginTop:moderateScale(35), marginLeft:moderateScale(45), color :"#ff3f34"}}>To</Text></View>
                <View style={{width:"25%"}}><Dropdown
                containerStyle={{ width:'100%'}}
        label='Education'
        data={data}
        onChangeText={(val) =>  
          this.setState({picker1: val})
         } 
      /></View>

                </View>
                 <View style={{flexDirection:'row', width:"90%", marginHorizontal:moderateScale(24)}}>
                <View style={{width:"25%"}}><Text style={{marginTop:moderateScale(35), color :"#ff3f34"}}>Height From</Text></View>
                <View style={{width:"25%"}}><Dropdown
                containerStyle={{ width:"100%"}}
        label='Education'
        data={data}
        onChangeText={(val) =>  
          this.setState({picker1: val})
         } 
      /></View>
                <View style={{width:"25%"}}><Text style={{marginTop:moderateScale(35), marginLeft:moderateScale(45), color :"#ff3f34"}}>To</Text></View>
                <View style={{width:"25%"}}><Dropdown
                containerStyle={{ width:'100%'}}
        label='Education'
        data={data}
        onChangeText={(val) =>  
          this.setState({picker1: val})
         } 
      /></View>

                </View>
             <Dropdown
                containerStyle={{width:'90%', alignSelf:'center'}}
        label='Education'
        data={data}
        onChangeText={(val) =>  
          this.setState({picker1: val})
         } 
      />
           <Dropdown
                containerStyle={{width:'90%', alignSelf:'center'}}
        label='Search'
        data={data2}
        onChangeText={(val) =>  
          this.setState({picker1: val})
         } 
      />
           <TouchableOpacity style={{...styles.buttonBackground, marginTop:moderateScale(20)}} onPress={this.search.bind(this)}>
        <Text  style={styles.welcomeLoginText}>Search(खोज)</Text>
        </TouchableOpacity> 
        <Text style={{textAlign:"center", fontSize:moderateScale(20), marginTop:moderateScale(10)}}>Or(या)</Text>
        <TouchableOpacity style={{...styles.buttonBackground, marginTop:moderateScale(20)}} onPress={this.findState.bind(this)}>
        <Text  style={styles.welcomeLoginText}>Find In State(राज्य में खोजें)</Text>
        </TouchableOpacity>   
      </View>
      
    );
}


}