import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import { WebView } from 'react-native-webview';
export default class MyWebView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return   <WebView
            source={{uri: this.props.url}}
        ></WebView>
    }
}
