/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class Vacinas extends Component {
    render() {
        let view = null;
        if (this.props.vacinas) {
            view = this.props.vacinas.map((item, index) => {
                return (
                    <View style={styles.commentContainer} key={index}>
                        <Text style={styles.vacina}> Vacina :</Text>
                        <Text style={styles.vacinaCont}>{item.vacina}</Text>
                        <Text style={styles.vacina}>Data Aplicação:</Text>
                        <Text style={styles.vacinaCont}>{item.dtAplicacao}</Text>
                    </View>
                );
            });
        }

        return (
            <View style={styles.container}>
                {view}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    commentContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
    vacina: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#444',
    },
    vacinaCont: {
      marginLeft: 5,
      color: '#444',
  },
    comment: {
        color: '#555',
    },
});

export default Vacinas;
