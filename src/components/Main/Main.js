/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome5';

class menu extends Component {

  render(){
    const adm = this.props.adm ?
    <TouchableOpacity style={{alignItems: 'center', width:'25%'}} onPress = {() => Actions.dados()}>
        <Icon
            name="user"
            size={23}
            color="#28ABE3"
          />
          <Text style={{color:'#28ABE3'}}>Dados</Text>
        </TouchableOpacity>
      : <TouchableOpacity style={{alignItems: 'center', width:'25%'}} onPress = {() => Actions.user()}>
      <Icon
          name="user"
          size={23}
          color="#28ABE3"
        />
        <Text style={{color:'#28ABE3'}}>Dados</Text>
      </TouchableOpacity>;
    return (
      <View style={{height:60,alignItems: 'center',justifyContent: 'center',flexDirection:'row', width:'100%',backgroundColor:'#fff'}}>
        <TouchableOpacity style={{alignItems: 'center', width:'25%'}} onPress = {() => Actions.home()} tabBarOptions={{inactiveTintColor:'#C0C0C0',
      activeTintColor:'#28ABE3'}}>
        <Icon
            //style={style.searchIconInfo}
            name="home"
            size={23}
            color="#28ABE3"
          />
          <Text style={{color:'#28ABE3'}}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center', width:'25%'}} onPress = {() => Actions.listafamily()} tabBarOptions={{inactiveTintColor:'#C0C0C0',
      activeTintColor:'#28ABE3'}}>
        <Icon
            //style={style.searchIconInfo}
            name="users"
            size={23}
            color="#28ABE3"
          />
          <Text style={{color:'#28ABE3'}}>Familia</Text>
        </TouchableOpacity>
        {adm}
        <TouchableOpacity style={{alignItems: 'center', width:'25%'}} onPress = {() => Actions.mais()} >
        <Icon
            //style={style.searchIconInfo}
            name="bars"
            size={23}
            color="#28ABE3"

          />
          <Text style={{color:'#28ABE3'}}>Mais</Text>
        </TouchableOpacity>
      </View>
    );
  }}

  //retorna dados para a tela
const mapStateToProps = ({user}) => {
  return {
    adm: user.adm,
  };
};


export default connect(mapStateToProps,null)(menu);
