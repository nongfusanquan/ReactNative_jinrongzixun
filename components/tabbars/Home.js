import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight, ScrollView} from 'react-native';
import HotLoanItem from '../HotLoanItem';
import TestCom from '../TestCom';
import '../utils/config';
// 导入路由的组件
import { Actions } from 'react-native-router-flux'
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

            data: {},
            loan: [{}],
            marketLoan: {
                hotMarket: [{}, {}],
            },//热门贷款产品
            consumptionLoan: {
                consumer: [{}],
            },//消费借款
        };
    }


    render() {
        return <ScrollView style={styles.layout}>
            {/*万卡分期*/}
            <View>
                <Image style={styles.banner} source={require('../../images/index_img_banner.png')}></Image>
                <View style={styles.wankastyle}>
                    <TouchableHighlight style={styles.wankafenqi_text_wrap}>
                        <Text style={styles.wankafenqi_text}>万卡分期</Text>
                    </TouchableHighlight>

                    <View style={styles.three_wrap}>
                        <Text>{this.state.loan[0].loanAmountK}</Text>
                        <Text style={styles.edutext}>￥{this.state.loan[0].loanAmountV}</Text>
                        <TouchableHighlight style={styles.jihuobtn_wrap} underlayColor={'#F5F5F5'} onPress={()=>{alert('敬请期待')}}>
                            <Text style={styles.wankafenqi_text}>{this.state.loan[0].buttonName}</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
            {/*万卡分期结束*/}
            {/*热门贷款产品*/}
            <View style={styles.hotloanwrap}>
                <View style={styles.hotloan_title}>
                    <Text>{this.state.marketLoan.title}</Text>
                    <TouchableHighlight onPress={this.onPress} underlayColor={'#F5F5F5'}>
                        <View style={styles.moreproduct}>
                            <Text>{this.state.marketLoan.remark}</Text>
                            <Image style={{height: 10, width: 15}}
                                   source={require('../../images/index_icon_arrow05.png')}></Image>

                        </View>

                    </TouchableHighlight>

                </View>
                {this.state.marketLoan.hotMarket.map(item => {
                    // return <HotLoanItem {...item} key={item.id} ></HotLoanItem>
                    // return <TestCom></TestCom>;
                    return this.getHotLoanView(item);

                })}
            </View>
            {/*热门贷款产品结束*/}
            {/*消费借款*/}
            <View>
                <View style={styles.hotloanwrap}>
                    <View style={{height: 50, justifyContent: 'center',borderBottomWidth:1,borderBottomColor: global.constants.color_divider}}>
                        <Text>{this.state.consumptionLoan.title}</Text>
                    </View>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                         {this.state.consumptionLoan.consumer.map(item => {
                            return this.getConsumeLoan(item);
                        })}
                    </View>
                    <View style={{height:40}}/>
                </View>
            </View>
            {/*消费借款结束*/}
        </ScrollView>;
    }

    /*热门贷款产品*/
    getHotLoanView = (item) => {
        return (
            <View>
                <View style={{paddingBottom: 20, borderBottomColor: '#f2f3f5', borderBottomWidth: 1}}>
                    <View style={{height: 40, flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={{height: 15, width: 15}} source={{uri: item.imgUrl}}></Image>
                        <Text style={{fontSize: 16, marginLeft: 5}}>{item.name}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        marginTop: 10,
                    }}>
                        <View>
                            <Text style={{color: '#009afe', fontSize: 14}}>￥{item.loanAmountK}</Text>
                            <Text style={{color: '#a4a4a4', fontSize: 12, marginTop: 5}}>最高可借额度</Text>
                        </View>
                        <View>
                            <Text style={{textAlign: 'center'}}>{item.rateV}</Text>
                            <Text style={{color: '#a4a4a4', fontSize: 12, marginTop: 5}}>{item.rateK}</Text>
                        </View>

                        <TouchableHighlight style={styles.jihuobtn_wrap}>
                            <Text style={styles.wankafenqi_text}>立刻借款</Text>
                        </TouchableHighlight>
                    </View>

                </View>
            </View>
        );

    };
    /*消费借款*/
    getConsumeLoan = (item) => {
        return (
            <TouchableHighlight style={{ width: '50%',marginTop:10}} onPress={()=>{this.onPress(item)}} underlayColor={'#F5F5F5'}>
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                    <Image style={{height:35,width:30}} source={{uri: item.imgUrl}}></Image>
                    <View style={{marginLeft:10}}>
                        <Text style={{color: global.constants.color_black,fontSize:16}}>{item.bigName}</Text>
                        <Text style={{color: global.constants.color_gray,marginTop:5}}>{item.smallName}</Text>
                    </View>
                </View>
            </TouchableHighlight>

        );
    };
    onPress=(item)=>{

        Actions.mywebview({"url":item.linkedUrl,"title":item.bigName});
    }
    componentWillMount() {
        fetch('https://app.doraemoney.com/home/initHomeAppV3New?deviceType=android&proId=99b7667f1943e4c8926ff9aba0baff34&version=3.1.3')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    data: data,
                    loan: data.data.loan,
                    marketLoan: data.data.marketLoan,
                    consumptionLoan:data.data.consumptionLoan
                });
            });
    }
}
const styles = StyleSheet.create({
    layout: {
        backgroundColor: '#f2f3f5',
    },
    banner: {
        width: '100%',
        height: 150,
        resizeMode: 'stretch',
    },
    wankastyle: {

        height: 170,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: -10,
        zIndex: 99,
    },
    wankafenqi_text_wrap: {
        width: 80,
        height: 30,
        backgroundColor: global.constants.color_main,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        marginTop: 10,
        justifyContent: 'center',

    },
    wankafenqi_text: {
        fontSize: 14,
        color: '#fff',
        paddingLeft: 5,

    },
    three_wrap: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    edutext: {
        fontSize: 25,
        color: '#009afe',
        fontWeight: 'bold',
        marginTop: 10,
    },
    jihuobtn_wrap: {
        width: 120,
        height: 30,
        backgroundColor: '#009afe',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    hotloanwrap: {
        marginTop: 10,
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
    },
    /*热门贷款产品*/
    hotloan_title: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'center',
        borderBottomColor: '#f2f3f5',
        borderBottomWidth: 1,
    },
    moreproduct: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    /*消费借款*/
});
