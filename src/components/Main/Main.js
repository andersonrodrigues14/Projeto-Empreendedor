/* eslint-disable prettier/prettier */
import * as  React  from  'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const {Navigator, Screen} = createBottomTabNavigator();

import Home from '../Home/Home';
import Familia from '../Family/Family';
import Profile from '../Profile/ListProfile';
import More from '../More/More';

export default function App() {
  return (
  <NavigationContainer>
    <Navigator tabBarOptions={{
      style: {
        height:60,
        borderTopWidth:0,
      },
      tabStyle: {
        alignItems:'center',
        justifyContent:'center',
      },
      iconStyle:{
        flex:0,
        width:40,
        height:20,
      },
      labelStyle: {
        fontSize:14,
        marginTop:5,
      },
      inactiveTintColor:'#C0C0C0',
      activeTintColor:'#28ABE3',
      }}>
      <Screen name="Menu" component={Home} options={{
        tabBarIcon:({size, focused})=>{
          return (
            <FontAwesome5 name="home"size={size} color={focused ? '#28ABE3' : '#C0C0C0'}/>
          );
        }}}/>
      <Screen name="Familia" component={Familia} options={{
        tabBarIcon:({size, focused})=>{
          return (
            <FontAwesome5 name="users"size={size} color={focused ? '#28ABE3' : '#C0C0C0'}/>
          );
        }}}/>
      <Screen name="Dados" component={Profile} options={{
        tabBarIcon:({size, focused})=>{
          return (
            <FontAwesome5 name="user"size={size} color={focused ? '#28ABE3' : '#C0C0C0'}/>
          );
        }}}/>
      <Screen name="Mais" component={More} options={{
        tabBarIcon:({size, focused})=>{
          return (
            <FontAwesome5 name="bars"size={size} color={focused ? '#28ABE3' : '#C0C0C0'}/>
          );
        }}}/>
    </Navigator>
</NavigationContainer>
);
}
