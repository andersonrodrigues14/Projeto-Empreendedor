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
import AddMinhasVacinas from './AddMinhasVacinas';
import {fetchMinhasVacinas} from '../../store/actions/minhasVacinas';

class ListMinhasVacinas extends Component {
  state = {
    showAddMinhasVacinas: false,
  }
  componentDidMount = () => {
    this.props.onFetchMinhasVacinas();
  }
  render(){
    const addMinhasVacinas = this.props.adm ?
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
          <TouchableOpacity style={style.btnInsert} onPress={() => this.setState({showAddMinhasVacinas: true})}>
            <Text style={style.textInsert}>Adicionar Vacina</Text>
          </TouchableOpacity>
        </View> : null;
    const containerPadrao = this.props.adm ?
    <View style={style.container}>
      <FlatList  data={this.props.minhasVacinas}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => <MinhasVacina key={item.id} {...item} minhasVacinasId={item.id} minhasVacinasEdt={item}/>} />
      </View> : <View style={style.containerUser1}>
      <FlatList  data={this.props.minhasVacinas}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => <MinhasVacina key={item.id} {...item} />} />
      </View>;
    return (
      <KeyboardAvoidingView style={style.background}>
         <AddMinhasVacinas isVisible={this.state.showAddMinhasVacinas} onCancel={()=> this.setState({showAddMinhasVacinas: false})}/>
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
        {addMinhasVacinas}
        <View style={style.InfoUser}>
         <Image source={{uri:this.props.imagem}} style={{width:75,height:75,resizeMode: 'contain'}}/>
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
const mapStateToProps = ({user, minhasVacinas}) => {
  return {
    nome: user.nome,
    imagem: user.imagem,
    adm : user.adm,
    minhasVacinas: minhasVacinas.minhasVacinas,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchMinhasVacinas: () => dispatch(fetchMinhasVacinas()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ListMinhasVacinas);
