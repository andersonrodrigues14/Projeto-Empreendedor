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

import MinhasVacina from './MinhasVacinas';
import Menu from '../Main/Main';
import {style} from './StyleListMinhasVacinas';


class ListMinhasVacinas extends Component {
  state = {
    minhasVacinas: [{
      id: Math.random(),
      imagem: require('../../assets/teste.png'),
      nome : 'Primeira Vacina',
      texto: 'Texto primeira Camapanha',
      dtAplicacao: '20/09/1998',
      dtRenovacao: '20/09/1999',
    },{
    id:Math.random(),
      imagem: require('../../assets/ListCampanha.png'),
      nome : 'Segunda Vacina',
      texto: 'Segunda primeira Camapanha',
      dtAplicacao: '20/09/1998',
      dtRenovacao: '20/09/1999',
    },
    {
      id:Math.random(),
        imagem: require('../../assets/ListCampanha.png'),
        nome : 'Terceira Vacina',
        texto: 'Terceira primeira Camapanha',
        dtAplicacao: '20/09/1998',
        dtRenovacao: '20/09/1999',
      },
  ],
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
        <Text style={style.textTitulo}>Minhas Vacinas</Text>
      </View>

      <View style={style.containerInfo}>
        <View style={style.searchContainer}>
                <TextInput style={style.input} placeholder="CPF" />
                <Icon
                  style={style.searchIcon}
                  name="sistrix"
                  size={30}
                  color="#35AAFF"
                />
        </View>
        <TouchableOpacity style={style.btnInsert}>
          <Text style={style.textInsert}>Adicionar Vacina</Text>
        </TouchableOpacity>

        <View style={style.InfoUser}>
         <Image source={this.props.imagem} style={{width:75,height:75,resizeMode: 'contain'}}/>
    <Text style={style.textTitulo}>{this.props.nome}</Text>
        </View>

        </View>
      </ScrollView>
      <View style={style.container}>
      <FlatList  data={this.state.minhasVacinas}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => <MinhasVacina key={item.id} {...item} />} />
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
const mapStateToProps = ({user}) => {
  return {
    nome: user.nome,
    imagem: user.imagem,
  };
};

export default connect(mapStateToProps,null)(ListMinhasVacinas);
