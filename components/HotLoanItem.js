import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight, ScrollView} from 'react-native';
/*热门贷款组件*/
export default class HotLoanItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return
        <View >
            <View style={styles.hotloan_title}>
                <Text>{this.state.marketLoan.title}</Text>
                <TouchableHighlight>
                    <View style={styles.moreproduct}>
                        <Text>{this.props.remark}</Text>
                        <Image style={{height: 10, width: 15}}
                               source={require('../images/index_icon_arrow05.png')}></Image>

                    </View>

                </TouchableHighlight>

            </View>

            <View style={{paddingBottom: 10,borderBottomColor:'#f2f3f5',borderBottomWidth: 1 }}>
                <View style={{height: 40, flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={{height: 20, width: 20}} source={{uri: this.props.imgUrl}}></Image>
                    <Text style={{fontSize:16}}>{this.props.name}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around',marginTop:10}}>
                    <View>
                        <Text style={{color:'#009afe',fontSize:14}}>￥{this.props.loanAmountK}</Text>
                        <Text style={{color:'#a4a4a4',fontSize:12,marginTop:5}}>最高可借额度</Text>
                    </View>
                    <View>
                        <Text>{this.props.rateV}</Text>
                        <Text style={{color:'#a4a4a4',fontSize:12,marginTop:5}}>{this.props.rateK}</Text>
                    </View>

                    <TouchableHighlight style={styles.jihuobtn_wrap}>
                        <Text style={styles.wankafenqi_text}>立刻借款</Text>
                    </TouchableHighlight>
                </View>

            </View>
        </View>
    }
}
