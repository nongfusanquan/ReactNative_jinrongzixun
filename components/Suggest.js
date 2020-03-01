import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight, ScrollView, TouchableWithoutFeedback} from 'react-native';
/*import { Button } from '@ant-design/react-native';*/
import {Button, Provider, Toast, TextareaItem, Modal} from '@ant-design/react-native';

class Suggest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible2: false,
            question: '选择问题类型',
            yijian: ['信用卡借款问题', '提额问题', '费用问题'],
            yijiancontent: '',
        };
    }

    onClose2 = () => {
        this.setState({
            visible2: false,
        });
    };
    chooseQuestion = (item) => {
        this.setState({
            visible2: false,
            question: item,
        });
    };
    onChange = (val: any) => {

        this.setState({yijiancontent: val});
    };
    submit = () => {
         if(!this.state.yijiancontent){
             Toast.info('请填写建议',1);
         }else{
             Toast.info('已经提交',1);
         }
    };
    bs = React.createRef();

    /*   f2f3f5*/
    render() {
        return (
            <Provider>
                <ScrollView style={{flex: 1, backgroundColor: 'white', paddingLeft: 10, paddingRight: 10}}>
                    <TouchableWithoutFeedback onPress={() => this.setState({visible2: true})}>
                        <View style={styles.item1}>
                            <Text style={{fontSize: 16, marginTop: 5, marginLeft: 10}}>{this.state.question}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <Modal
                        popup
                        visible={this.state.visible2}
                        animationType="slide-up"
                        onClose={this.onClose2}
                    >
                        <View style={{paddingVertical: 20, paddingHorizontal: 20}}>
                            <TouchableWithoutFeedback onPress={() => {
                                this.chooseQuestion(this.state.yijian[0]);
                            }}>

                                <Text style={{
                                    height: 40,
                                    fontSize: 16,
                                    marginTop: 5,
                                    marginLeft: 10,
                                    textAlign: 'center',
                                }} ref='qone'>{this.state.yijian[0]}</Text>

                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => {
                                this.chooseQuestion(this.state.yijian[1]);
                            }}>

                                <Text style={{
                                    height: 40,
                                    fontSize: 16,
                                    marginTop: 5,
                                    marginLeft: 10,
                                    textAlign: 'center',
                                }}>{this.state.yijian[1]}</Text>

                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => {
                                this.chooseQuestion(this.state.yijian[2]);
                            }}>

                                <Text style={{
                                    height: 40,
                                    fontSize: 16,
                                    marginTop: 5,
                                    marginLeft: 10,
                                    textAlign: 'center',
                                }}>{this.state.yijian[2]}</Text>

                            </TouchableWithoutFeedback>
                        </View>
                        <Button type="primary" onPress={this.onClose2}>
                            关闭
                        </Button>
                    </Modal>
                    <View style={{backgroundColor: '#f2f3f5', marginTop: 10}}>
                        <TextareaItem placeholder={'亲，写出您的建议'} rows={5} count={120}
                                      style={{backgroundColor: '#f2f3f5', width: '100%'}} onChange={this.onChange}></TextareaItem>

                    </View>

                    <Button type='primary' style={{marginTop: 60, marginLeft: 20, marginRight: 20}} onPress={this.submit}>提交</Button>
                </ScrollView>
            </Provider>

        );

    }

    _onOpenActionSheet = () => {

    };

}

const styles = StyleSheet.create({
    item1: {
        height: 50,
        paddingLeft: 10,
        backgroundColor: '#f2f3f5',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
    },
});

export default Suggest;
