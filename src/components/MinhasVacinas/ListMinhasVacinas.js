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

import MinhasVacina from './MinhasVacinas';
import Menu from '../Main/Main';
import {style} from './StyleListMinhasVacinas';
import AddMinhasVacinas from './AddMinhasVacinas';
import {fetchMinhasVacinas} from '../../store/actions/minhasVacinas';

class ListMinhasVacinas extends Component {
  state = {
    showAddMinhasVacinas: false,
  };
  componentDidMount = () => {
    this.props.onFetchMinhasVacinas();
  };
  render() {
    return (
      <KeyboardAvoidingView style={style.background}>
        <AddMinhasVacinas
          isVisible={this.state.showAddMinhasVacinas}
          onCancel={() => this.setState({showAddMinhasVacinas: false})}
        />
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
          </ScrollView>
          <View style={style.container}>
            <FlatList
              data={this.props.minhasVacinas.filter(
                (x) => x.userId === this.props.id,
              )}
              keyExtractor={(item) => `${item.id}`}
              renderItem={({item}) => (
                <MinhasVacina
                  key={item.id}
                  {...item}
                  userId={item.id}
                  minhasVacinasId={item.id}
                  minhasVacinasEdt={item}
                />
              )}
            />
          </View>
          <View>
            <Menu />
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
    adm: user.adm,
    id: user.id,
    minhasVacinas: minhasVacinas.minhasVacinas,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchMinhasVacinas: () => dispatch(fetchMinhasVacinas()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMinhasVacinas);
