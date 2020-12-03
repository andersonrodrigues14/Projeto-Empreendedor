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

import Vacina from './Vacina';
import {style} from './StyleListVacina';
import Menu from '../Main/Main';
import AddVacina from './AddVacina';
import {fetchVacina} from '../../store/actions/vacina';

class ListVacina extends Component {
  state = {
    showAddVacina: false,
  };

  componentDidMount = () => {
    this.props.onFetchVacina();
  };

  render() {
    const addVacina = this.props.adm ? (
      <View style={style.containerInfo} hide={false}>
        <TouchableOpacity
          style={style.btnInsert}
          onPress={() => this.setState({showAddVacina: true})}>
          <Text style={style.textInsert}>Adicionar Vacina</Text>
        </TouchableOpacity>
      </View>
    ) : null;

    return (
      <KeyboardAvoidingView style={style.background}>
        <AddVacina
          isVisible={this.state.showAddVacina}
          onCancel={() => this.setState({showAddVacina: false})}
        />
        <ImageBackground
          source={require('../../assets/fundo.png')}
          style={style.image}>
          <View style={style.containerLogo}>
            <Image
              source={require('../../assets/listVacina.png')}
              style={{width: 100, height: 95}}
            />
            <Text style={style.textTitulo}>Lista de Vacinas</Text>
          </View>
          {addVacina}

          <View style={style.container}>
            <FlatList
              data={this.props.vacina}
              keyExtractor={(item) => `${item.id}`}
              renderItem={({item}) => (
                <Vacina
                  key={item.id}
                  {...item}
                  vacinaId={item.id}
                  vacinaEdt={item}
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
const mapStateToProps = ({user, vacina}) => {
  return {
    adm: user.adm,
    vacina: vacina.vacina,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchVacina: () => dispatch(fetchVacina()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListVacina);
