import React, {Component} from 'react';
import {Platform, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, StatusBar, ScrollView, TouchableNativeFeedback} from 'react-native';
import styles from "../styles/styles";
import { Dropdown } from 'react-native-material-dropdown';
import { s, vs, moderateScale, ScaledSheet } from 'react-native-size-matters';

export default class Process extends Component {

  constructor(props){
    super(props);
    this.state = { 
      ageFrom : "21 Yrs",
      ageTo : "24 Yrs",
      heightFrom : "4F",
      heightTo : "6F",
      education : "B.C.A",
      gender : "Bride",
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
    //alert('kkkk')
 this.props.navigation.navigate('Referals')
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
  value: '18 Yrs',
}, {
  value: '19 Yrs',
}, {
  value: '20 Yrs',
}, {
  value: '21 Yrs',
}, {
  value: '22 Yrs',
}, {
  value: '23 Yrs',
},  {
  value: '24 Yrs',
},  {
  value: '25 Yrs',
},  {
  value: '26 Yrs',
},  {
  value: '27 Yrs',
},  {
  value: '28 Yrs',
},  {
  value: '29 Yrs',
},  {
  value: '30 Yrs',
}];

let educationData = [{
  value: '10TH',
}, {
  value: '12TH',
}, {
  value: 'B.B.A',
}, {
  value: 'B.C.A',
}, {
  value: 'B.COM',
}, {
  value: 'B.D.S',
},  {
  value: 'B.DES/B.D',
},  {
  value: 'B.E/B.TECH',
},  {
  value: 'B.ED',
},  {
  value: 'B.F.SC/B.SC',
},  {
  value: 'B.H.M.S',
},  {
  value: 'B.LIB/B.LIB.SC',
},  {
  value: 'B.M.C/B.M.M',
},{
  value: 'B.PED',
},{
  value: 'B.P.T',
},{
  value: 'B.PHARM/B.PHARMA',
}];

let height = [{
  value: '4F',
}, {
  value: '4F 1"',
}, {
  value: '4F 2"',
}, {
  value: '4F 3"',
}, {
  value: '4F 4"',
}, {
  value: '4F 5"',
},  {
  value: '4F 6"',
},  {
  value: '4F 7"',
},  {
  value: '4F 8"',
},  {
  value: '4F 9"',
},  {
  value: '4F 10"',
},  {
  value: '4F 11"',
},  {
  value: '4F 12"',
},{
  value: '5F',
},{
  value: '5F 1"',
},{
  value: '5F 2"',
},  {
  value: '5F 3"',
},{
  value: '5F 4"',
}, {
  value: '5F 5"',
},  {
  value: '5F 6"',
},  {
  value: '5F 7"',
},  {
  value: '5F 8"',
},  {
  value: '5F 9"',
},  {
  value: '5F 10"',
},  {
  value: '5F 11"',
},  {
  value: '5F 12"',
},{
  value: '6F',
},{
  value: '6F 1"',
},{
  value: '6F 2"',
},  {
  value: '6F 3"',
},{
  value: '6F 4"',
}, {
  value: '6F 5"',
},  {
  value: '6F 6"',
},  {
  value: '6F 7"',
},  {
  value: '6F 8"',
},  {
  value: '6F 9"',
},  {
  value: '6F 10"',
},  {
  value: '6F 11"',
},  {
  value: '6F 12"',
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
        label='From'
        data={data}
        value={'21 Yrs'}
        onChangeText={(val) =>  
          this.setState({ageFrom: val})
         } 
      /></View>
                <View style={{width:"25%"}}><Text style={{marginTop:moderateScale(35), marginLeft:moderateScale(45), color :"#ff3f34"}}>To</Text></View>
                <View style={{width:"25%"}}><Dropdown
                containerStyle={{ width:'100%'}}
        label='To'
        data={data}
         value={'24 Yrs'}
        onChangeText={(val) =>  
          this.setState({ageTo: val})
         } 
      /></View>

                </View>
                 <View style={{flexDirection:'row', width:"90%", marginHorizontal:moderateScale(24)}}>
                <View style={{width:"25%"}}><Text style={{marginTop:moderateScale(35), color :"#ff3f34"}}>Height From</Text></View>
                <View style={{width:"25%"}}><Dropdown
                containerStyle={{ width:"100%"}}
        label='From'
        data={height}
         value={'4F'}
        onChangeText={(val) =>  
          this.setState({heightFrom: val})
         } 
      /></View>
                <View style={{width:"25%"}}><Text style={{marginTop:moderateScale(35), marginLeft:moderateScale(45), color :"#ff3f34"}}>To</Text></View>
                <View style={{width:"25%"}}><Dropdown
                containerStyle={{ width:'100%'}}
        label='To'
        value={'6F'}
        data={height}
        onChangeText={(val) =>  
          this.setState({heightTo: val})
         } 
      /></View>

                </View>
             <Dropdown
                containerStyle={{width:'90%', alignSelf:'center'}}
        label='Education'
        data={educationData}
         value={'B.C.A'}
        onChangeText={(val) =>  
          this.setState({education: val})
         } 
      />
           <Dropdown
                containerStyle={{width:'90%', alignSelf:'center'}}
        label='Gender'
        data={data2}
         value={'Bride'}
        onChangeText={(val) =>  
          this.setState({gender: val})
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