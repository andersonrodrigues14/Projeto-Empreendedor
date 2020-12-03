/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {style} from './StyleInformacao';
import {connect} from 'react-redux';
import {delDoenca} from '../../store/actions/informacaoDoenca';
import EdtDoenca from './EdtInfoDoença';

class InformacaoDoenca extends Component {
  state = {
    showEdtDoenca: false,
  };
  delete = () => {
    this.props.onDltDoenca({doencaId: this.props.doencaId});
  };
  render() {
    const admDoenca = this.props.adm ? (
      <View style={style.editContainer}>
        <Image source={{uri: this.props.imagem}} style={style.imagem} />
        <Icon style={style.searchIconInfo} size={23} color="#35AAFF" />
        <Icon
          style={style.searchIconInfo}
          name="pencil-alt"
          size={20}
          color="#35AAFF"
          onPress={() => this.setState({showEdtDoenca: true})}
        />
        <Icon
          style={style.searchIconInfo}
          name="trash"
          size={20}
          color="#35AAFF"
          onPress={this.delete}
        />
      </View>
    ) : (
      <View style={style.editContainer}>
        <Image source={{uri: this.props.imagem}} style={style.imagem} />
        <Icon style={style.searchIconInfo2} size={23} color="#35AAFF" />
        <Icon style={style.searchIconInfo2} size={20} color="#35AAFF" />
        <Icon style={style.searchIconInfo2} size={20} color="#35AAFF" />
      </View>
    );
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
        <EdtDoenca
          isVisible={this.state.showEdtDoenca}
          doencaEdt={this.props.doencaEdt}
          onCancel={() => this.setState({showEdtDoenca: false})}
        />
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

const mapDispatchToProps = (dispatch) => {
  return {
    onDltDoenca: (doenca) => dispatch(delDoenca(doenca)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InformacaoDoenca);
