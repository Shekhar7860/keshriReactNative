/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { StyleSheet, Alert} from 'react-native'
import Welcome from './src/components/Welcome'
import 'react-native-gesture-handler'
import Splash from './src/components/Splash'
import Login from './src/components/Login'
import Thanks from './src/components/Thanks'
import Settings from './src/components/Settings'
import Notifications from './src/components/Notifications'
import Register from './src/components/Register'
import SelectItems from './src/components/SelectItems'
import Home from './src/components/Home'
import Home2 from './src/components/Home2'
import Details from './src/components/Details'
import Form from './src/components/Form'
import Profile from './src/components/Profile'
import SignUp from './src/components/SignUp'
import Leads from './src/components/Leads'
import DrawerContent from './src/components/DrawerContent'
import Company from './src/components/Company'
import Tasks from './src/components/Tasks'
import Partners from './src/components/Partners'
import Volume from './src/components/Volume'
import Referals from './src/components/Referals'
import Bonus from './src/components/Bonus'
import  Targets from './src/components/Targets'
import  Deductions from './src/components/Deductions'
import  Process from './src/components/Process'
import  Terms from './src/components/Terms'
import  Privacy from './src/components/Privacy'
import  About from './src/components/About'
import Service from "./src/services/Service";
import NetInfo from "@react-native-community/netinfo";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import authReducer from './src/reducers/authReducer';
import thunk from 'redux-thunk';
const store = createStore(authReducer, applyMiddleware(thunk));

 import Icon from 'react-native-vector-icons/MaterialIcons';
 import Icon1 from 'react-native-vector-icons/Fontisto';

const Tabs =  createBottomTabNavigator({
   
       Calls : { screen: About,navigationOptions: {
        tabBarLabel:"About",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="label" size={20} />
        )
      } },
 
        Help: { screen: Terms,navigationOptions: {
         tabBarLabel: 'Help',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="help-outline" size={20} />
        )
      }},
   
  Privacy : { screen: Privacy,navigationOptions: {
        tabBarLabel:"Privacy",
        tabBarIcon: ({ tintColor }) => (
          <Icon1 name="info" size={20} />
        )
      }}, 
       
},{
        tabBarOptions:{
      activeTintColor: 'black',
       inactiveTintColor: 'brown',
       labelStyle: {
    margin: 0
  },
       tabStyle: {
    justifyContent: 'center',
    height : 50,
    marginTop : -1
  },
      //other properties
      pressColor: 'white',//for click (ripple) effect color
      style: {
        
              height: 50


      //color you want to change
      }
  }
}
      );

const HomeScreenRouter = createDrawerNavigator(
  {
      customerHome2: { screen: Tabs,
      },
    customerHome: { screen: SignUp,
      },
      Profile: { screen: Profile
      }
  },
  {
    contentComponent: DrawerContent,
    drawerPosition : 'right',
     drawerOpenRoute: 'DrawerRightOpen',
      drawerCloseRoute: 'DrawerRightClose',
      drawerToggleRoute: 'DrawerRightToggle',
  }
);



const Stack = createStackNavigator({
  Splash: {
    screen: Splash,
  },
   Tabs: {
    screen: Tabs,
  },
   Login: {
    screen: Login,
  },
   Home : { screen: Home
  },
  Welcome: {
    screen: Welcome,
  }, 
   Verify : {
    screen: Partners,
  },
   Forgot: {
    screen: Tasks,
  },
  Form : {
    screen: Form,
  },
    Leads : {
    screen: Leads,
  },
   Partners : {
    screen: Partners,
  },
   Volume : {
    screen: Volume,
  },
   Referals : {
    screen: Referals,
  },
   Targets : {
    screen: Targets,
  },
   Bonus : {
    screen: Bonus,
  },
   Tasks : {
    screen: Tasks,
  },
   Deductions : {
    screen: Deductions,
  },
   Company : {
    screen: Company,
  },
   Details: {
    screen: Details,
  },
 
  Register: {
    screen: Register,
  },
  Select: {
    screen: SelectItems,
  },
  Process: {
    screen: Process,
  },
  Terms: {
    screen: Terms,
  },
  Privacy: {
    screen: Privacy,
  },
  About: {
    screen: About,
  },
  Home2: {
    screen: HomeScreenRouter,
  }
},
 { headerMode: 'none' });
const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
  },
   Tabs: {
    screen: Tabs,
  },
  Search :{
    screen : Process
  },
    Requests :{
    screen : Volume
  },
   Matrimonials : { screen: Leads
  },
  Login :{
screen : Login
  },
    Referals : {
    screen: Referals,
  },
 
},
 { headerMode: 'none' });


const Stack2 = createSwitchNavigator({
    Login: {
    screen: Login,
  },
    Splash: {
    screen: Stack
  }
},
 { headerMode: 'none', initialRouteName:'Splash' });



export default class App extends Component {
   constructor(props){
    super(props);
    this.state = { 
      userId :""
    }
    service = new Service();
  }
  componentDidMount = () => {
    this.CheckConnectivity()
    service.getUserData('user').then((res) => {
      console.log('localData', res)
      var data = JSON.parse(res);
      console.log('parsed Data', data)
     this.setState({userId:data.id})
    //  Alert.alert("loggin successfully")
          // this.props.navigation.navigate('Profile')
      })
    console.disableYellowBox = true;
  }
  CheckConnectivity = () => {
    // For Android devices
    if (Platform.OS === "android") {
     
    } else {
      // For iOS devices
      NetInfo.isConnected.addEventListener(
        "connectionChange",
        this.handleFirstConnectivityChange
      );
    }
  };

  handleFirstConnectivityChange = isConnected => {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this.handleFirstConnectivityChange
    );

    if (isConnected === false) {
      Alert.alert("You are offline!");
    } else {
      Alert.alert("You are online!");
    }
  };
  render() {
    const AppRouter = createAppContainer(this.state.userId !="" ? HomeStack : Stack2);

    return (
      <Provider store={store}>
      <AppRouter/>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  
});


