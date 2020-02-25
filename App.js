import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

// 导入 Tabbar 相关的组件
import TabNavigator from 'react-native-tab-navigator';

// 导入 Tab 栏的组件
import Home from './components/tabbars/Home.js';
import Bill from './components/tabbars/Bill.js';
import Found from './components/tabbars/Found.js';

import Mine from './components/tabbars/Mine.js';

// 当修改了 项目根目录中，Android 目录下的任何文件之后，如果想要看项目效果，不要使用 react-native start了，而是需要再一次编译安装一下项目 ，运行 react-native run-android
// 导入图标相关的组件


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home', // 选中的tab栏名称
    };
  }

  render() {
    return (
        <View style={styles.container}>

          {/* Tab栏区域 */}
          <TabNavigator tabBarStyle={styles.tab}>

            {/* 主页的 Tab栏 */}
            <TabNavigator.Item
                selected={this.state.selectedTab === 'home'} // 判断当前的 tab栏是否被选中的
                title="主页" // 表示 tabbar 上展示的内容
                renderIcon={() => <Image style={styles.tabicon} source={require('./images/jiekuan_normal.png') } />} // 未选中状态下，展示的图标
                renderSelectedIcon={() => <Image style={styles.tabicon} source={require('./images/jiekuan.png')} />} // 选中状态下展示的图标
                onPress={() => this.setState({selectedTab: 'home'})} // 点击Tab栏的操作
            >
              <Home></Home>
            </TabNavigator.Item>

            {/* 还款的 Tab栏 */}
           {/* <TabNavigator.Item
                selected={this.state.selectedTab === 'huankuan'}
                title="还款"
                renderIcon={() => <Image style={styles.tabicon} source={require('./images/huankuan_normal.png')} />}
                renderSelectedIcon={() => <Image style={styles.tabicon} source={require('./images/huankuan.png')} />}
                onPress={() => this.setState({selectedTab: 'huankuan'})}
            >
              <Bill></Bill>
            </TabNavigator.Item>*/}

            {/* 发现的 Tab栏 */}
            <TabNavigator.Item
                selected={this.state.selectedTab === 'found'}
                title="发现"
                renderIcon={() => <Image style={styles.tabicon} source={require('./images/found_normal.png')} />}
                renderSelectedIcon={()=><Image style={styles.tabicon} source={require('./images/found.png')}/>}
                onPress={() => this.setState({selectedTab: 'found'})}
            >
              <Found></Found>
            </TabNavigator.Item>

            {/* Me的 Tab栏 */}
            <TabNavigator.Item
                selected={this.state.selectedTab === 'me'}
                title="我的"
                renderIcon={() => <Image style={styles.tabicon} source={require('./images/mine_normal.png')} />}
                renderSelectedIcon={() => <Image style={styles.tabicon} source={require('./images/mine.png')} />}
                onPress={() => this.setState({selectedTab: 'me'})}
            >
              <Mine></Mine>
            </TabNavigator.Item>

          </TabNavigator>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tab:{
    height: 60
  },
  tabicon:{
    width:35,
    height:35
  }
});
