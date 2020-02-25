import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight, ScrollView} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Toast, {DURATION} from 'react-native-easy-toast'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource:{
                uri:'',
            },
        };
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: '#f2f3f5'}}>
                {/*头部布局*/}
                <View>

                    <Image style={{height: 120}}  source={require('../../images/bj_top_my.png')}/>


                    <View style={{flexDirection: 'row', alignItems: 'center', position: 'absolute', top: 40, left: 20}}>
                        <TouchableHighlight underlayColor={'#00000000'} onPress={this.showImagePicker}>
                            <Image style={{height: 60, width: 60,borderRadius:30}}  source={this.state.avatarSource.uri?{ uri: this.state.avatarSource.uri}:require('../../images/my_head_img01.png')}></Image>
                        </TouchableHighlight>
                        <View style={{marginLeft: 10}}>
                            <TouchableHighlight style={styles.jihuobtn_wrap} underlayColor={'#F5F5F5'} onPress={() => {
                                alert('敬请期待');
                            }}>
                                <Text style={{color: 'white', fontSize: 20}}>17600698498</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={{marginTop: 10}} underlayColor={'#F5F5F5'} onPress={() => {
                                alert('敬请期待');
                            }}>
                                <Text style={{color: 'white', marginTop: 5}}>去实名认证</Text>
                            </TouchableHighlight>

                        </View>
                    </View>
                </View>
                {/*左右两个item*/}
                <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    backgroundColor: 'white',
                    paddingBottom: 10,
                    paddingTop: 10,
                }}>
                    <TouchableHighlight
                        style={{flex: 1, borderRightWidth: 2, borderRightColor: global.constants.color_divider}}
                        underlayColor={'#F5F5F5'} onPress={this.toastWait}>
                        <View style={{alignItems: 'center'}}>
                            <Image style={{height: 50, width: 50}}
                                   source={require('../../images/my_hyf_icon02.png')}></Image>
                            <Text style={{fontSize: 16, marginTop: 5}}>火眼分</Text>
                        </View>

                    </TouchableHighlight>
                    <TouchableHighlight style={{flex: 1}} underlayColor={'#F5F5F5'} onPress={() => {
                        alert('敬请期待');
                    }}>
                        <View style={{alignItems: 'center'}}>
                            <Image style={{height: 50, width: 50}}
                                   source={require('../../images/my_centent_icon02.png')}></Image>
                            <Text style={{fontSize: 16, marginTop: 5}}>会员中心</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                {/*四个选项*/}
                <TouchableHighlight>
                    <View style={styles.item}>
                        <Image style={{height: 25, width: 25}} source={require('../../images/my_jindu_icon.png')}></Image>
                        <Text style={{fontSize: 16, marginTop: 5, marginLeft: 10}}>进度查询</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={styles.item1}>
                        <Image style={{height: 25, width: 25}} source={require('../../images/my_jindu_icon.png')}></Image>
                        <Text style={{fontSize: 16, marginTop: 5, marginLeft: 10}}>我的红包</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={styles.item1}>
                        <Image style={{height: 25, width: 25}} source={require('../../images/my_help_icon.png')}></Image>
                        <Text style={{fontSize: 16, marginTop: 5, marginLeft: 10}}>在线客服</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={styles.item1}>
                        <Image style={{height: 25, width: 25}} source={require('../../images/my_help_icon.png')}></Image>
                        <Text style={{fontSize: 16, marginTop: 5, marginLeft: 10}}>意见反馈</Text>
                    </View>
                </TouchableHighlight>
                <Toast ref="toast"/>

            </ScrollView>
        )

    }
    toastWait=()=>{
        alert('敬请期待')
        // console.warn(this.refs)
        // this.refs.toast.show('敬请期待');
    }
    showImagePicker=()=>{

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                });
            }
        });
    }
}
const options = {
    title: '选择头像',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'图库',
    cancelButtonTitle:'取消',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

const styles = StyleSheet.create({
    item: {
        height: 50,
        paddingLeft: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: global.constants.color_divider,
        marginTop: 10,
    },
    item1: {
        height: 50,
        paddingLeft: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: global.constants.color_divider,
    },
});
