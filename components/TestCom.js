import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import { WebView } from 'react-native-webview';
export default class TestCom extends Component {
    constructor(props) {
        super(props);
        console.warn(props);
        this.state = {};
    }

    render() {
        return

        (
            <View>
                <Text>我是测试子组件</Text>
            </View>
        )

    }
}
