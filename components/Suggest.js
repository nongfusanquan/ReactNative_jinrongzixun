import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight, ScrollView,TouchableWithoutFeedback} from 'react-native';


 class Suggest extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

     bs = React.createRef()
    render() {
        return   <View style={{flex:1}}>
            <TouchableWithoutFeedback >
                <View style={styles.item1}>
                    <Image style={{height: 25, width: 25}} source={require('../images/my_help_icon.png')}></Image>
                    <Text style={{fontSize: 16, marginTop: 5, marginLeft: 10}}>选择问题类型</Text>
                </View>
            </TouchableWithoutFeedback>


        </View>
    }
     _onOpenActionSheet = () => {

     };
}
const styles=StyleSheet.create({
    item1: {
        height: 50,
        paddingLeft: 10,
        backgroundColor: '#f2f3f5',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:15
    },
})

export default Suggest
