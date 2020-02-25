import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableHighlight} from 'react-native';
import Swiper from 'react-native-swiper';
// 导入路由的组件
import {Actions} from 'react-native-router-flux';
import '../utils/config';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dot: <View style={{
                backgroundColor: 'rgba(0,0,0,.2)',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 0,
                marginBottom: 0,
            }}/>,
            dataSource: {},
            banners: [], //直接.太多了还不行
            topLine: {},//金融资讯
            MoneyHelper: {},//赚钱助手
            creditCardTransaction: {
                auth_icon_ur: 'http://a3.att.hudong.com/68/61/300000839764127060614318218_950.jpg',
                auth_name: '我的',
                auth_action_url: '',
            },//办信用卡
            hotNews:[]/*热门资讯*/
        };
    }

    onPress = () => {
        Actions.mywebview({'url': this.state.creditCardTransaction.auth_action_url});
    };
    /*跳转到金融资讯*/
    jumpJinrongzixun = () => {
        Actions.jinRongZiXun();
    };

    render() {
        return (
            <ScrollView style={{backgroundColor: '#f2f3f5'}}>
                <View style={{height: 150}}>
                    {
                        this.state.banners.length ? <Swiper autoplay={true} loop={true} autoplayTimeout={2}>
                            {this.state.banners.map((item, i) => {
                                return <View key={i}>
                                    <Image source={{uri: item.imgUrl}}
                                           style={{width: '100%', height: '100%', resizeMode: 'stretch'}}></Image>
                                    <Text style={styles.lunboText}>{item.name}</Text>
                                </View>;
                            })}
                        </Swiper> : null
                    }
                </View>
                {/* 下面三个水平摆放的*/}
                <View style={styles.threeLayout}>
                    <TouchableHighlight style={styles.threeLayoutItem} onPress={this.jumpJinrongzixun}
                                        underlayColor={'#F5F5F5'}>
                        <View>

                            <Image
                                style={styles.threeLayoutItemImg}
                                source={{uri: this.state.topLine.auth_icon_url}}></Image>
                            <Text>{this.state.topLine.auth_name}</Text>
                        </View>
                    </TouchableHighlight>

                    <View style={styles.threeLayoutItem}>
                        <Image
                            style={styles.threeLayoutItemImg}
                            source={require('../../images/new_person.png')}
                        ></Image>
                        <Text>{this.state.MoneyHelper.title}</Text>
                    </View>
                    <TouchableHighlight style={styles.threeLayoutItem} onPress={this.onPress} underlayColor={'#F5F5F5'}>
                        <View>

                            <Image
                                style={styles.threeLayoutItemImg}
                                source={{uri: this.state.creditCardTransaction.auth_icon_url}}
                            ></Image>
                            <Text>{this.state.creditCardTransaction.auth_name}</Text>
                        </View>
                    </TouchableHighlight>

                </View>
                {/*热门资讯*/}
                <View style={{backgroundColor:'white',marginTop:10}}>
                    <View style={{height: 50, paddingLeft:10,justifyContent: 'center',borderBottomWidth:1,borderBottomColor: global.constants.color_divider}}>
                        <Text>热门资讯</Text>
                    </View>
                    <View >
                        {this.state.hotNews.map(item => {
                            return this.getHotNews(item);
                        })}
                    </View>
                    <View style={{height:40}}/>
                </View>

            </ScrollView>
        );
    }

    getHotNews= (item) => {
        return (
            <TouchableHighlight style={{ marginTop:10,paddingBottom:10,backgroundColor:'white',borderBottomWidth:1,borderBottomColor: global.constants.color_divider}} onPress={()=>{this.onPress(item)}} underlayColor={'#F5F5F5'}>
                <View style={{flexDirection: 'row',alignItems:'center',justifyContent:'space-between'}}>

                    <View style={{marginLeft:10,justifyContent:'space-between'}}>
                        <Text style={{color: global.constants.color_black,fontSize:16}}>{item.name}</Text>
                        <Text style={{color: global.constants.color_gray,marginTop:5}}>{item.pageViews}已读</Text>
                        <Text style={{color: global.constants.color_gray,marginTop:5}}>{item.publishTime}</Text>
                    </View>
                    <Image style={{height:80,width:130,marginRight:10,resizeMode:'cover',}} source={{uri: item.imgUrl}}></Image>
                </View>
            </TouchableHighlight>

        );
    };
    componentWillMount() {
        fetch('https://app.doraemoney.com/home/initV3Rescover?deviceType=android&proId=99b7667f1943e4c8926ff9aba0baff34&version=3.1.3')
            .then(res => res.json())
            .then(data => {

                this.setState({
                    dataSource: data,
                    banners: data.data.banner,
                    topLine: data.data.topLine,
                    MoneyHelper: data.data.MoneyHelper,
                    creditCardTransaction: data.data.creditCardTransaction,
                    hotNews:data.data.hotNews.concat(data.data.hotNews)
                });
            });
    }

}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
    },
    lunboView: {},
    lunboText: {
        position: 'absolute',
        zIndex: 99,
        bottom: 5,
        color: '#fff',
        paddingLeft: 5,
    },
    threeLayout: {

        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
    },
    threeLayoutItem: {
        paddingTop: 10,
        paddingBottom: 10,
        flex: 1,
        alignItems: 'center',
    },
    threeLayoutItemImg: {
        height: 50,
        width: 50,
        marginBottom: 5,
        resizeMode: 'cover',
    },
    dotStyle: {
        marginBottom: 5,
    },
    img: {},
    slide1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
});
