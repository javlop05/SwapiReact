import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MainTitle from '../Components/MainTitle';

export default class LaunchScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MainTitle title="Star Wars"></MainTitle>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});