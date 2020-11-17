/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {dltVacina} from '../../store/actions/vacina';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {style} from './StyleVacina';

class Vacina extends Component {
  delete = () =>{
      this.props.onDltVacina({
        vacinaId: this.props.id,
      });
  }
  render() {
    const admVacinas = this.props.adm ?
    <View style={style.editContainer}>
    <Image source={{uri: this.props.imagem}} style={style.imagem} />
    <Icon
      style={style.searchIconInfo}
      name="save"
      size={23}
      color="#35AAFF"
    />
    <Icon
      style={style.searchIconInfo}
      name="pencil-alt"
      size={20}
      color="#35AAFF"
    />
    <Icon
      style={style.searchIconInfo}
      name="trash"
      size={20}
      color="#35AAFF"
      onPress={(this.delete)}/>
  </View> :  <View style={style.editContainer}>
          <Image source={{uri: this.props.imagem}} style={style.imagem} />
          <Icon
            style={style.searchIconInfo2}
            size={23}
            color="#35AAFF"
          />
          <Icon
            style={style.searchIconInfo2}
            size={20}
            color="#35AAFF"
          />
          <Icon
            style={style.searchIconInfo2}
            size={20}
            color="#35AAFF"
            onPress={(this.delete)}/>
        </View>;

    return (
      <View style={style.container}>
        {admVacinas}
        <Text style={style.textTitulo}>{this.props.nome}</Text>
        <Text style={style.textStyle}>{this.props.texto}</Text>

        <View style={style.container}>
          <Text style={style.textStyle}>
            Tempo de Duração: {this.props.tempoDuracao}
          </Text>
        </View>
      </View>
    );
  }
}

//retorna dados para a tela
const mapStateToProps = ({user}) => {
  return {
    adm: user.adm,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDltVacina: payload => dispatch(dltVacina(payload)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Vacina);
