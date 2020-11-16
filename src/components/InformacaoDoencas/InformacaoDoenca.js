/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {style} from './StyleInformacao';
import {connect} from 'react-redux';

class InformacaoDoenca extends Component {
  render() {
    const admDoenca = this.props.adm ?
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
          />
        </View>;
    return (
      <View style={style.container}>
        {admDoenca}
        <Text style={style.textTitulo}>{this.props.titulo}</Text>
        <Text style={style.textStyle}>{this.props.texto}</Text>

        <View style={style.container}>
          <Text style={style.textStyle}>
            Data da Publicação: {this.props.dataPublicacao}
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

export default connect(mapStateToProps,null)(InformacaoDoenca);
