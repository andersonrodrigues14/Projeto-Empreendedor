/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {style} from './StyleCampanha';

class CamapanhaVacinacao extends Component {
  render() {
    const admCampanha = this.props.adm ?
    <View style={style.editContainer}>
          <Image source={this.props.imagem} style={style.imagem} />
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
          />
        </View> :  <View style={style.editContainer}>
          <Image source={this.props.imagem} style={style.imagem} />
          <Icon
            style={style.searchIconInfo2}
            //name="save"
            size={23}
            color="#35AAFF"
          />
          <Icon
            style={style.searchIconInfo2}
            //name="pencil-alt"
            size={20}
            color="#35AAFF"
          />
          <Icon
            style={style.searchIconInfo}
            //name="trash"
            size={20}
            color="#35AAFF"
          />
        </View>;

    return (
      <View style={style.container}>
        {admCampanha}
        <Text style={style.textTitulo}>{this.props.nome}</Text>
        <Text style={style.textStyle}>{this.props.texto}</Text>

        <View style={style.container}>
          <Text style={style.textStyle}>
            Data de Inicio: {this.props.dtInicio}
          </Text>
          <Text style={style.textStyle}>
            Data de cadastro: {this.props.dtCadastro}
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

export default connect(mapStateToProps,null)(CamapanhaVacinacao);
