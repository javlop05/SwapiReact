import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

import { Colors, Fonts } from '../Themes/';

export default class MainTitle extends Component {

    render() {
        return (
            <Text style={Fonts.style.h1}>
                {this.props.title}
            </Text>
        );
    }
}
