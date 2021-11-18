import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Button, ButtonGroup, Icon } from 'react-native-elements'

export default class IndexScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center', paddingTop: 30}}>
            <Image
              style={{width: 350, height: 320}}
              source={{uri: 'https://media.ex-cdn.com/EXP/media.vntravellive.com/files/news/2020/04/22/hoi-sach-online-sau-3-ngay-khai-mac-094314.jpg'}}
            />
        </View>
        <View style={styles.footer}>
          <Text style={{fontSize: 40}}>HP BOOKSTORE</Text>
          <Button
            title="Sách"
            icon={{
              name: 'book',
              type: 'font-awesome',
              size: 20,
              color: 'white',
            }}
            iconContainerStyle={{ marginRight: 10 }}
            titleStyle={{ fontWeight: '700' }}
            buttonStyle={styles.buttonstyle}
            containerStyle={{ width: 300 }}
            onPress={() => this.props.navigation.navigate('Search')}
          />

          <Button
            title="Giỏ Hàng"
            icon={{
              name: 'shopping-cart',
              type: 'font-awesome',
              size: 20,
              color: 'white',
            }}
            iconContainerStyle={{ marginRight: 10 }}
            titleStyle={{ fontWeight: '700' }}
            buttonStyle={styles.buttonstyle}
            containerStyle={{ width: 300 }}
            onPress={() => this.props.navigation.navigate('Cart')}
          />
  
          <Button
            title="About us"
            icon={{
              name: 'info-circle',
              type: 'font-awesome',
              size: 20,
              color: 'white',
            }}
            iconContainerStyle={{ marginRight: 10 }}
            titleStyle={{ fontWeight: '700' }}
            buttonStyle={styles.buttonstyle}
            containerStyle={{ width: 300 }}
            onPress={() => this.props.navigation.navigate('About')}
          />
          <Text style={{color: 'orangered', marginTop: 15, fontStyle: 'italic'}}>
          Cảm ơn quý khách đã ghé thăm HP bookstore
          </Text>
          <Text style={{color: 'orangered', marginLeft: 40, fontStyle: 'italic'}}>
          Chúc quý khách có 1 ngày vui vẻ
          </Text>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'lavender',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 30  
  },
  buttonstyle: {
    margin: 10,
    backgroundColor: 'lightskyblue',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
  },
})