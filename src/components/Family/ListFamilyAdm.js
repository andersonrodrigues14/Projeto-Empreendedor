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
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Family from './Family';
import ProfileFamily from '../Profile/ProfileFamily';
import Menu from '../Main/Main';
import {style} from './StyleListFamily';
import AddFamily from './AddFamily';
import {fetchProfile} from '../../store/actions/profile';

class ListFamilyAdm extends Component {
  state = {
    showAddFamilia: false,
  };
  componentDidMount = () => {
    this.props.onFetchProfile();
  };
  render() {
    const containerPadrao = this.props.adm ? (
      <View style={style.container}>
        <FlatList
          data={this.props.profile}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({item}) => (
            <ProfileFamily
              key={item.id}
              {...item}
              userId={item.id}
              familiaId={item.id}
            />
          )}
        />
      </View>
    ) : (
      <View style={style.containerUser1}>
        <FlatList
          data={this.props.familia}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({item}) => <Family key={item.id} {...item} />}
        />
      </View>
    );
    return (
      <KeyboardAvoidingView style={style.background}>
        <AddFamily
          isVisible={this.state.showAddFamilia}
          onCancel={() => this.setState({showAddFamilia: false})}
        />
        <ImageBackground
          source={require('../../assets/fundo.png')}
          style={style.image}>
          <ScrollView style={style.scroll}>
            <View style={style.containerLogo}>
              <Image
                source={require('../../assets/listFamily.png')}
                style={{width: 80, height: 75, resizeMode: 'contain'}}
              />
              <Text style={style.textTitulo}>Família</Text>
            </View>
          </ScrollView>
          <View style={style.containerUser1}>{containerPadrao}</View>
          <View>
            <Menu />
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
    adm: user.adm,
    profile: profile.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProfile: () => dispatch(fetchProfile()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListFamilyAdm);
