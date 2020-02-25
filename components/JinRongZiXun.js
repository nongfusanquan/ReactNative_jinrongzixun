import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Text,FlatList,ActivityIndicator,TouchableHighlight,Image} from 'react-native';
import {TabView, SceneMap,TabBar} from 'react-native-tab-view';
import {Actions} from 'react-native-router-flux';

class Android extends Component {
    constructor(props) {
        super(props);
        console.warn('bb',this.props);

        this.state = {
            isloading: true,
            pageSize: 20,
            nowPage: 1,
            type:'',
            results:[]
        };
    }

    render() {
        return <View>
            {this.renderList()}
        </View>
    }

    componentWillMount() {
       this.getDataByPage();
    }

    renderList = () => {
      /*  if (this.state.isloading) {
            return <ActivityIndicator size="large"></ActivityIndicator>
        }*/
        return <FlatList
            data={this.state.results}
            keyExtractor={(item, i) => i} // 解决 key 问题
            renderItem={({ item }) => this.renderItem(item)} // 调用方法，去渲染每一项
            ItemSeparatorComponent={this.renderSeparator} //渲染分割线的属性方法
            onEndReachedThreshold={0.5} // 距离底部还有多远的时候，触发加载更多的事件
            onEndReached={this.loadNextPage} // 当距离不足 0.5 的时候，触发这个方法，加载下一页数据
            refreshing={this.state.isloading}
            onRefresh={()=>{this.refresh}}
        />
    };
    // 渲染每项电影
    renderItem = (item) => {
        return <TouchableHighlight underlayColor="#fff" onPress={() =>  Actions.mywebview({'url': item.url,'title':'详情'})}>
            <View style={{ flexDirection: 'row', padding: 10 ,alignItems:'center'}}>
                <Image source={require('../images/abc_ic_star_black_48dp.png')} style={{ width: 60, height: 60, marginRight: 10,resizeMode: 'center' }}></Image>
                <View style={{ justifyContent: 'space-around' }}>
                    <Text><Text style={styles.movieTitle}>描述:</Text>{item.desc}</Text>
                    <Text><Text style={styles.movieTitle}>发送时间：</Text>{item.publishedAt}</Text>
                    <Text><Text style={styles.movieTitle}>来源：</Text>{item.source}</Text>
                    <Text><Text style={styles.movieTitle}>类型：</Text>{item.type}</Text>
                </View>
            </View>
        </TouchableHighlight>
    }

    // 渲染分割线
    renderSeparator = () => {
        return <View style={{ borderTopColor: '#ccc', borderTopWidth: 1, marginLeft: 10, marginRight: 10 }}></View>
    }
    refresh=()=>{
        this.setState({
            nowPage: 1
        }, function () {
            this.getDataByPage()
        })
    }
    // 根据页码获取电影列表
    getDataByPage = () => {

        fetch('http://gank.io/api/data/' + this.props.type+"/"+this.state.pageSize + '/' + this.state.nowPage)
            .then(res => res.json())
            .then(data => {

                this.setState({
                    isloading: false,
                    results: this.state.results.concat(data.results),
                });
            });

    }
    // 加载下一页
    loadNextPage = () => {
        // 如果下一页的页码值，大于总页数了，直接return
        // if ((this.state.nowPage + 1) > this.state.totalPage) {
        //     return
        // }

        this.setState({
            nowPage: this.state.nowPage + 1
        }, function () {
            this.getDataByPage()
        })
    }

}

class Qianduan extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <View>
            <Text>我是信用卡</Text>
        </View>;
    }
}

const initialLayout = {width: Dimensions.get('window').width};

export default function JinRongZiXun() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'loan', title: 'Android'},
        {key: 'creditCard', title: '前端'},
    ]);

   /* const renderScene = SceneMap({
        loan: Android,
        creditCard: Android,
    });*/

    const renderScene = ({ route }) => {
        //console.warn('sd',route.key);
        switch (route.key) {
            case 'loan':
                return <Android type='Android'/>;
            case 'creditCard':
                return <Android type='前端'/>;
            default:
                return null;
        }
    }
    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#a4a4a4' }}
            style={{ backgroundColor: '#009afe'}}
          /*  activeColor={'pink'}*/
        />
    );
    return (
        <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
        />
    );
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    movieTitle: {
        fontWeight: 'bold'
    }
});
