// Main 才是项目的根组件

import React, {Component} from 'react';
import {View, Image, Text, ActivityIndicator,StyleSheet} from 'react-native';

// 导入路由相关的组件
// Router: 就相当于 昨天我们所学的  HashRouter
// Stack: 这是一个分组的容器，他不表示具体的路由，专门用来给路由分组的
// Scene：就表示一个具体的路由规则，好比 昨天学到的 Route


// 导入App组件
import App from './App.js';
import  MyWebView from './components/MyWebView'
import JinRongZiXun from './components/JinRongZiXun';
import Suggest from './components/Suggest';
import Mine from './components/tabbars/Mine';
import {Router, Stack, Scene} from 'react-native-router-flux';
import styles from 'react-native-webview/lib/WebView.styles';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"标题"
        };
    }

    render() {
        return(
            <Router  onStateChange={stateHandler} sceneStyle={{backgroundColor: 'white'}}>
                <Stack key="root" headerLayoutPreset="center"  titleStyle={{alignSelf: 'center'}}   navigationBarStyle={mystyles.navigationBarStyle}>
                    {/* 配置路由规则 */}
                    {/* 注意，所有的路由规则，都应该写到这个位置 */}
                    {/* 第一个 Scene 就是默认要展示的首页 */}
                    {/* key 属性，表示路由的规则名称，将来可以使用这个 key ，进行编程式导航，每一个路由规则，都应该提供一个 唯一的key， key不能重复 */}
                   {/*initial  */}
                    <Scene key="app" component={App} title="" hideNavBar={true} />
                    {/* 电影列表的路由规则 */}

                    <Scene key="mywebview" component={MyWebView} title='网页' backButtonImage={require('./images/top_back_icon.png')}/>
                     <Scene key="jinRongZiXun" component={JinRongZiXun} title="金融资讯"  />
                    <Scene key="Mine" component={Mine} title="金融资讯"  />
                    <Scene key="Suggest" component={Suggest} title="意见反馈"  />

                </Stack>
            </Router>
            )
    }
}
const stateHandler = (prevState, newState, action) => {
    // console.warn('onStateChange: ACTION:', newState);
    // this.setState({
    //             title:newState.title
    //         })

};
const mystyles=StyleSheet.create({
    navigationBarStyle:{
         height:50,

    },
    titleStyle:{
      textAlign: 'center'
    }

})
