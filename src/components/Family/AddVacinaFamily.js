/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addVacina } from '../../store/actions/family';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback as TWF,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker';

class AddVacinaFamily extends Component {
    state = {
        comment: '',
        editMode: false,
    }

    changeDate = (valor) => {
      this.setState({
        dtAplicacao: valor,
      });
    }

    handleAddComment = () => {
        this.props.onAddVacina({
          vacinaId: this.props.vacinaId,
            vacina: {
              dtAplicacao: this.state.dtAplicacao,
                vacina: this.state.vacina,
            },
        });

        this.setState({ vacina: '', editMode: false });
    }

    render() {
        let commentArea = null;
        if (this.state.editMode) {
            commentArea = (
                <View style={styles.container}>
                    <TextInput placeholder="Vacina..."
                        style={styles.input} autoFocus={true}
                        value={this.state.vacina}
                        onChangeText={vacina => this.setState({ vacina })}
                        onSubmitEditing={this.handleAddComment} />
                     <DatePicker
                       format = "DD/MM/YYYY"
                        style = {styles.dateComponente2}
                        date = {this.state.dtAplicacao}
                        onDateChange = {this.changeDate}
                      />
                    <TWF onPress={() => this.setState({ editMode: false })}>
                        <Icon name="times" size={15} color="#555" />
                    </TWF>
                </View>
            );
        } else {
            commentArea = (
                <TWF onPress={() => this.setState({ editMode: true })}>
                    <View style={styles.container}>
                        <Icon name="comment-o" size={25} color="#555" />
                        <Text style={styles.caption}>
                            Adicione uma vacina...
                        </Text>
                    </View>
                </TWF>
            );
        }

        return (
            <View style={{ flex: 1 }}>
                {commentArea}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#CCC',
    },
    input: {
        width: '50%',
    },
    dateComponente:{
      width:100,
      margin: 15,
    },
});

const mapDispatchToProps = dispatch => {
    return {
        onAddVacina: vacina => dispatch(addVacina(vacina)),
    };
};

export default connect(null, mapDispatchToProps)(AddVacinaFamily);
