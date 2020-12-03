/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {delCalendario} from '../../store/actions/calendario';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {style} from './StyleCalendario';
import EdtCalendario from './EdtCalendario';

class Calendario extends Component {
  state = {
    showEdtVacina: false,
  };

  delete = () => {
    this.props.onDltCalendario({calendarioId: this.props.calendarioId});
  };
  render() {
    const admCalendario = this.props.adm ? (
      <View style={style.editContainer}>
        <Image source={{uri: this.props.imagem}} style={style.imagem} />
        <Icon style={style.searchIconInfo} size={23} color="#35AAFF" />
        <Icon
          style={style.searchIconInfo}
          name="pencil-alt"
          size={20}
          color="#35AAFF"
          onPress={() => this.setState({showEdtVacina: true})}
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
        <View style={style.editContainer}>{admCalendario}</View>
        <Text style={style.textTitulo}>{this.props.nome}</Text>
        <Text style={style.textStyle}>{this.props.texto}</Text>

        <View style={style.container}>
          <Text style={style.textStyle}>
            Data da Vacina: {this.props.dtVacina}
          </Text>
        </View>
        <EdtCalendario
          isVisible={this.state.showEdtVacina}
          calendarioEdt={this.props.calendarioEdt}
          onCancel={() => this.setState({showEdtVacina: false})}
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
    onDltCalendario: (calendario) => dispatch(delCalendario(calendario)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendario);
