import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Alert, AsyncStorage, FlatList, SafeAreaView } from 'react-native';
import { Button, ButtonGroup, Icon, ListItem } from 'react-native-elements'
import { showMessage, hideMessage } from "react-native-flash-message";
import Item from './Item';

export default class PayScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    name:'',
    phone: '',
    email: '',
    street: '',
    }
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
  shouldComponentUpdate() {
  return false;
  }
  static navigationOptions = {
    title: 'Đơn Hàng',
    headerStyle: {
      backgroundColor: 'lavender',
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  };

  render(){
    const { navigation } = this.props;
    const data = navigation.getParam('data');

    return (
    <SafeAreaView style={styles.safecontainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{
            padding: 12,
            borderRadius: 5,
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text style={{textAlign: 'center', color: 'black', fontSize: 20}}>THÔNG TIN ĐƠN HÀNG</Text>
        </View>
        <View>

        <FlatList
          data={data}
          renderItem={({ item }) => (
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
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
        />
        <Text style={{flex: 1, fontSize:20,padding: 8, textAlign: 'center',height: 50, borderWidth: 1, borderRadius: 5, backgroundColor: 'goldenrod'}}>TỔNG THANH TOÁN: {this.showTotalAmount(data)}đ</Text>
        </View>
          <View style={styles.panel}>
            <Text style={styles.textColor}>Họ Tên</Text>
            <TextInput style={styles.inputStyle} 
            keyboardType="default" 
            placeholder="Vui lòng điền tên của bạn ở đây."
            onChangeText={(value) => this.setState({name: value})}
            />
            <Text style={styles.textColor}>Số điện thoại</Text>
            <TextInput style={styles.inputStyle}
            keyboardType="phone-pad"
            placeholder="Vui lòng điền số điện thoại bạn ở đây."
            onChangeText={(value) => this.setState({phone: value})}
            />
            <Text style={styles.textColor}>E-mail</Text>
            <TextInput style={styles.inputStyle}
            keyboardType="email-address"
            placeholder="Vui lòng điền e-mail của bạn ở đây."
            onChangeText={(value) => this.setState({email: value})}
            />
            <Text style={styles.textColor}>Địa chỉ</Text>
            <TextInput style={styles.inputStyle}
            keyboardType="default"
            placeholder="Vui lòng điền địa chỉ của bạn ở đây."
            onChangeText={(value) => this.setState({street: value})}
            /> 
          </View>   
        
        <Button title="Đặt Hàng"
        titleStyle={{ fontWeight: '700', fontSize: 30 }}
        buttonStyle={{
            backgroundColor: 'lightskyblue',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 20,
        }}
        onPress = { () => {
        const {name, phone, email, street} = this.state;
        const { navigation } = this.props;
        const data = navigation.getParam('data');
        if (name == '') 
        { return showMessage({
              message: "Bắt buộc!",
              description: "Vui lòng điền tên của bạn!",
              type: "danger",
              floating: true,
              icon: "danger"
        });}
        else if (phone == '')
        { return showMessage({
              message: "Bắt buộc!",
              description: "Vui lòng điền số điện thoại của bạn!",
              type: "danger",
              floating: true,
              icon: "danger"
        });}
        else if (street == '')
        { return showMessage({
              message: "Bắt buộc!",
              description: "Vui lòng nhập địa chỉ của bạn!",
              type: "danger",
              floating: true,
              icon: "danger"
        });}
        else {
        let customer = { name: name, phone: phone, email: email, street: street}
        console.log("Items: ",data, "Info: ", customer);
        this.setState({name: ''});
        this.setState({phone: ''});
        this.setState({email: ''});
        this.setState({street: ''});
        this.clearState();
        this.props.navigation.replace('Cart');
        showMessage({
              message: "Đặt hàng thành công",
              description: "Cảm ơn bạn đã tin tưởng chúng tôi.",
              type: "success",
              floating: true,
              icon: "success"
        })
        }
        }}
        ></Button>
      </ScrollView>
    </SafeAreaView>
    )
  }
  showTotalAmount = (data) => {
        var totalMount = 0;
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                totalMount += data[i].price * data[i].amount;
            }
        }
        return totalMount;
    }
}
let styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: 'lightblue',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5
  },
  panel: {
    borderRadius: 3,
    padding: 10,
    margin: 10,
  },
  textColor: {
    color: 'mediumblue',
    paddingBottom: 5,
    paddingTop: 5,
    fontSize: 17
  },
  safecontainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center'
  },
  container: {
    padding: 10,
    paddingBottom: 20
  },
})