/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'react-native-gesture-handler';
import {
  View,
  FlatList,
  Image,
  KeyboardAvoidingView,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';

import InformacaoDoenca from './InformacaoDoenca';
import {style} from './StyleListInformacaoDoenca';
import Menu from '../Main/Main';
import AddDoenca from './AddInfoDoenca';
import {fetchDoenca} from '../../store/actions/informacaoDoenca';

class ListInformacaoDoenca extends Component {
  state = {
    showAddDoenca: false,
  }
  componentDidMount = () => {
    this.props.onFetchDoenca();
  }
  render(){
    const addDoenca = this.props.adm ?
    <View style={style.containerInfo}>
      <TouchableOpacity style={style.btnInsert} onPress={() => this.setState({showAddDoenca: true})}>
        <Text style={style.textInsert}>Adicionar Informação</Text>
      </TouchableOpacity>
    </View> : null;
    return (
      <KeyboardAvoidingView style={style.background}>
        <AddDoenca isVisible={this.state.showAddDoenca} onCancel={()=> this.setState({showAddDoenca: false})}/>
      <ImageBackground
        source={require('../../assets/fundo.png')}
        style={style.image}>
      <View style={style.containerLogo}>
        <Image
          source={require('../../assets/listMinhasVacinas.png')}
          style={{width: 100, height: 95}}
        />
        <Text style={style.textTitulo}>Informações Sobre Doenças</Text>
        </View>

        {addDoenca}

      <View style={style.container}>
      <FlatList  data={this.props.doenca}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => <InformacaoDoenca key={item.id} {...item} doencaId={item.id} doencaEdt={item}/>} />
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
const mapStateToProps = ({user,doenca}) => {
  return {
    adm : user.adm,
    doenca: doenca.doenca,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchDoenca: () => dispatch(fetchDoenca()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ListInformacaoDoenca);
