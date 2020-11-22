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
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

import ProfileVacinas from '../Profile/ProfileVacinas';
import Menu from '../Main/Main';
import {style} from './StyleListMinhasVacinas';
import {fetchProfile} from '../../store/actions/profile';

class ListMinhasVacinas extends Component {
  state = {
    showAddMinhasVacinas: false,
  }
  componentDidMount = () => {
    this.props.onFetchProfile();
  }
  render(){
    return (
      <KeyboardAvoidingView style={style.background}>
      <ImageBackground
        source={require('../../assets/fundo.png')}
        style={style.image}>
      <ScrollView style={style.scroll}>
      <View style={style.containerLogo}>
        <Image
          source={require('../../assets/listMinhasVacinas.png')}
          style={{width: 80, height: 75, resizeMode: 'contain'}}
        />
        <Text style={style.textTitulo}>Minhas Vacinas Adm</Text>
      </View>

      <View style={style.containerInfo}>
      <View style={style.esconde}>
          <View style={style.searchContainer}>
                <TextInput style={style.input} placeholder="CPF" />
                <Icon
                  style={style.searchIcon}
                  name="sistrix"
                  size={30}
                  color="#35AAFF"
                />
          </View>
        </View>
        </View>
      </ScrollView>
      <View style={style.containerUser1}>
      <FlatList
              data={this.props.profile}
              keyExtractor={(item) => `${item.id}`}
              renderItem={({item}) => <ProfileVacinas  key={item.id} {...item} userId={item.id} minhasVacinasId={item.id} minhasVacinasEdt={item}/>}
            />
      </View>
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
    nome: user.nome,
    imagem: user.imagem,
    adm : user.adm,
    profile: profile.profile,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchProfile: () => dispatch(fetchProfile()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ListMinhasVacinas);
