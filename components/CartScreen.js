import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, AsyncStorage, TextInput, FlatList, ActivityIndicator, TouchableOpacity, SafeAreaView, TouchableHighlight, Alert, AppRegistry } from 'react-native';
import { Button, ButtonGroup, Icon, ListItem, Badge } from 'react-native-elements';
import Constants from 'expo-constants';
import { showMessage, hideMessage } from "react-native-flash-message";
import Item from './Item';


export default class CartScreen extends React.Component {
constructor(props) {
  super(props);
  this.state = {};
  AsyncStorage.getItem('state').then((myState) => {
    this.setState(JSON.parse(myState))
  })
  console.log(this.state);
}
saveState() {
  AsyncStorage.setItem('state', JSON.stringify(this.state));
}

clearState() {
  AsyncStorage.removeItem('state');
  var x = [];
  AsyncStorage.setItem('state', JSON.stringify(x));
  AsyncStorage.getItem('state').then((myState) => {
  this.setState(JSON.parse(myState));
  })
}
  static navigationOptions =  ({ navigation }) => {
    return {
    title: 'Chi tiết Giỏ Hàng',
    headerStyle: {
      backgroundColor: 'lavender',
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: () =>
      (
        <Button
          icon={{
            name: 'edit',
            type: 'font-awesome',
            size: 20,
            color: 'black',
          }}
          buttonStyle={{
            backgroundColor: 'transparent',
            borderColor: 'transparent'
          }}
          containerStyle={{ width: 50 }}
          onPress={navigation.getParam('go')}
        />
      ),
    }
  };
    _go = () => {
    AsyncStorage.getItem('state').then((myState) => {
    this.setState(JSON.parse(myState))
    })
    var x = JSON.parse(JSON.stringify(this.state));
    var array = [];
      for (var key in x) {
        array.push(x[key]);
      }
    this.props.navigation.replace('Edit', {data: array} )
    }
  componentDidMount() {
    this.props.navigation.setParams({ go: this._go });
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '93%',
          backgroundColor: '#CED0CE',
          marginLeft: '5%',
        }}
      />
    );
  };
    render(){
      const { navigation } = this.props;
      const data = navigation.getParam('data');
      var x = JSON.parse(JSON.stringify(this.state));
      var array = [];
      for (var key in x) {
        array.push(x[key]);
      }
      //this.setState()
      console.log(this.state);
      return (
        <View style={{flex: 1}}>
        <FlatList
          data={array}
          extraData={this.state}
          renderItem={({ item }) => (
          <TouchableOpacity onPress={() => this.props.navigation.replace('Details', {
                data: item
              })}>
            <Item
              title={item.name}
              subtitle={` ${item.price}`}
              subtitleStyle={{color: 'red'}}
              rightSubtitle={
                  <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'center'}}>
                  <Text>Số lượng: {item.amount}</Text>
                  <Text style={{color:'red'}}>Thành tiền: {item.total}đ</Text>
                  </View>
              }
            />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
        />
        <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'space-around'}}>
          <Button
            title="Mua Ngay"
            icon={{
              name: 'money',
              type: 'font-awesome',
              size: 20,
              color: 'white',
            }}
            iconContainerStyle={{ marginRight: 10 }}
            titleStyle={{ fontWeight: '700' }}
            buttonStyle={styles.buttonstyle}
            containerStyle={{ width: 300 }}
            onPress={() => { 
            var x = JSON.parse(JSON.stringify(this.state));
            var array = [];
            for (var key in x) {
              array.push(x[key]);
            }
            const { navigation } = this.props;
            if (array.length == 0)
              { return showMessage({
                message: "Giỏ của bạn đang trống!",
                description: "Vui lòng thêm sản phẩm vào giỏ hàng!",
                type: "danger",
                floating: true,
                icon: "danger"
              });}
              else 
              this.props.navigation.replace('Pay', {data: array});
            }
            }
          />
        </View>
      </View>
    );
  }
}
let styles = StyleSheet.create({
  buttonstyle: {
    backgroundColor: 'lightskyblue',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 30
  },
})