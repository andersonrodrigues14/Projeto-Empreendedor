/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  FlatList,
  Image,
  KeyboardAvoidingView,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Actions} from 'react-native-router-flux'; // para navegar nas rotas

import Profile from './Profile';
import {style} from './StyleListProfile';
import {ScrollView} from 'react-native-gesture-handler';
import Menu from '../Main/Main';
import AddProfile from './AddProfile';
import {fetchProfile} from '../../store/actions/profile';


class ListProfile extends Component {
  state = {
    showAddProfile: false,
  };
  componentDidMount = () => {
    this.props.onFetchProfile();
  }

  render() {
    const addProfile = this.props.adm ?
    <View style={style.containerAdministrador}>
              <TouchableOpacity
                style={style.btnRegister}
                onPress={() => this.setState({showAddProfile: true})}>
                <Text style={style.textRegister}>Adicionar Usuário</Text>
              </TouchableOpacity>
            </View> : null;
     const containerPadrao = this.props.adm ?
     <View style={style.container}>
            <FlatList
              data={this.props.profile}
              keyExtractor={(item) => `${item.id}`}
              renderItem={({item}) => <Profile key={item.id} {...item} profileEdt={item} profileId={item.id}/>}
            />
          </View> : <View style={style.containerUser}>
            <FlatList
              data={this.props.profile}
              keyExtractor={(item) => `${item.id}`}
              renderItem={({item}) => <Profile key={item.id} {...item} />}
            />
          </View>;
    return (
      <KeyboardAvoidingView style={style.background}>
         <AddProfile isVisible={this.state.showAddProfile} onCancel={()=> this.setState({showAddProfile: false})}/>
        <ImageBackground
          source={require('../../assets/fundo.png')}
          style={style.image}>
          <ScrollView style={style.scroll}>
            <View style={style.containerLogo}>
              <Image
                source={require('../../assets/dados.png')}
                style={{width: 100, height: 95}}
              />
              <Text style={style.textTitulo}>Dados</Text>
            </View>

            {addProfile}
          </ScrollView>
            {containerPadrao}
          <View>
            <Menu/>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

//retorna dados para a tela
const mapStateToProps = ({user, profile}) => {
  return {
    adm : user.adm,
    profile: profile.profile,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchProfile: () => dispatch(fetchProfile()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ListProfile);
