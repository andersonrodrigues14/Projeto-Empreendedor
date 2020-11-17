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
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Family from './Family';
import Menu from '../Main/Main';
import {style} from './StyleListFamily';
import AddFamily from './AddFamily';
import {fetchFamilia} from '../../store/actions/family';

class ListFamily extends Component {
  state = {
    showAddFamilia: false,
  }
  componentDidMount = () => {
    this.props.onFetchFamilia();
  }
  render(){
    const addFamilia = this.props.adm ?
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
          <TouchableOpacity style={style.btnInsert} onPress={() => this.setState({showAddFamilia: true})}>
            <Text style={style.textInsert}>Adicionar Vacina</Text>
          </TouchableOpacity>
        </View> : null;
    const containerPadrao = this.props.adm ?
      <View style={style.container}>
          <FlatList  data={this.props.familia}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => <Family key={item.id} {...item} />}/>
          </View> : <View style={style.containerUser1}>
            <FlatList  data={this.props.familia}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => <Family key={item.id} {...item} />}/>
            </View>;
    return (
      <KeyboardAvoidingView style={style.background}>
        <AddFamily isVisible={this.state.showAddFamilia} onCancel={()=> this.setState({showAddFamilia: false})}/>
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

      <View style={style.containerInfo}>
        {addFamilia}
        <View style={style.InfoUser}>
          <Image source={this.props.imagem } style={style.imagemUser}/>
          <Text style={style.textTitulo}>{this.props.nome}</Text>
        </View>

        </View>
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
const mapStateToProps = ({user, familia}) => {
  return {
    nome: user.nome,
    imagem: user.imagem,
    adm: user.adm,
    familia:familia.familia,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchFamilia: () => dispatch(fetchFamilia()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ListFamily);
