import *as React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Linking, SafeAreaView } from 'react-native';
import { Button, ButtonGroup, Icon } from 'react-native-elements'

export default class ContactScreen extends React.Component {

  static navigationOptions = {
    title: 'About Us',
    headerStyle: {
      backgroundColor: 'lavender',
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  };

  render() {
    return  (
      <ScrollView style={styles.container}>
      <View>
        <Text style={{ color:'#4b0082',
          fontSize: 20,
          padding: 10,
          textAlign: 'center',fontStyle: 'italic'
      }} > HP BOOKSTORE chào mừng bạn đến với thế giới sách của chúng tôi! Tại đây bạn có thể tha hồ chọn cho mình những quyển sách yêu thích, nhũng quyển sách phù hợp với bản thân. Đến với chúng tôi bạn có thể yên tâm chọn cho mình những quyển sách chất lượng đi đôi với giá cả, cửa hàng chúng tôi có đa dạng các loại sách phù hợp với yêu cầu của mọi cá nhân. Chúng tôi cam kết luôn cập nhật những thông tin mới nhất về sách cũng như các tái bản mới nhất.</Text>
        </View>
          <Text style={styles.title}>THÔNG TIN LIÊN HỆ</Text>

      <View style={styles.containerButton}>
        <Button
          title="0913110312"
          icon={{
            name: 'phone',
            type: 'font-awesome',
            size: 20,
            color: 'lavender',
          }}
          iconContainerStyle={{ marginRight: 10 }}
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: 'green',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
          }}
          containerStyle={{ width: 250 }}
          onPress={() => Linking.openURL(`tel:0913110312`)}
        />
        <View style={{padding: 10}}></View>
        <Button
          title="Facebook" 
          icon={{
            name: 'facebook',
            type: 'font-awesome',
            size: 20,
            color: 'white',
          }}
          iconContainerStyle={{ marginRight: 10 }}
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: 'dodgerblue',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
          }}
          containerStyle={{ width: 250 }}
          onPress={() => 
          Linking.openURL('https://www.facebook.com/profile.php?id=100013379111277')}
        />
        <View style={{padding: 10}}></View>
        <Button
          title="Instagram" 
          icon={{
            name: 'instagram',
            type: 'font-awesome',
            size: 20,
            color: 'white',
          }}
          iconContainerStyle={{ marginRight: 10 }}
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: 'deeppink',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
          }}
          containerStyle={{ width: 250 }}
          onPress={() => 
          Linking.openURL('https://www.instagram.com/ryoe_won_eu_ho/')}
        />
         <View style={{padding: 10}}></View>
          <Button
          title="Email"
          icon={{
            name: 'envelope',
            type: 'font-awesome',
            size: 20,
            color: 'white',
          }}
          iconContainerStyle={{ marginRight: 10 }}
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: 'crimson',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
          }}
          containerStyle={{ width: 250 }}
          onPress={() => 
          Linking.openURL('mailto:lanhbang312@gmail.com?subject=HP_BOOKSTORE_rất_vui_khi_được_hổ_trợ_bạn!!!')}
        />
        <View style={{padding: 10}}></View>
        <Button
          title="280 An Dương Vương, Phường 4, Quận 5, Tp HCM"
          icon={{
            name: 'map-marker',
            type: 'font-awesome',
            size: 30,
            color: 'white',
          }}
          iconContainerStyle={{ marginRight: 10 }}
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: 'blueviolet',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 30,
          }}
          containerStyle={{ width: 300 }}
           onPress={() => 
          Linking.openURL('https://www.google.com/search?safe=active&client=safari&rls=en&sxsrf=ALeKk00tBpC5cQw3zyRE_Ib1QvhmYdJTvw:1620311706167&q=tr%C6%B0%E1%BB%9Dng+%C4%91%E1%BA%A1i+h%E1%BB%8Dc+s%C6%B0+ph%E1%BA%A1m+th%C3%A0nh+ph%E1%BB%91+h%E1%BB%93+ch%C3%AD+minh+%C4%91%E1%BB%8Ba+ch%E1%BB%89&sa=X&ved=2ahUKEwifi6-9o7XwAhXKBIgKHdxODywQ6BMoADAdegQIHRAC&biw=1440&bih=820')}
        />
      </View>
        <Text style={styles.subTitle}>HP BOOKSTORE rất hân hạnh được phục vụ quý khách!!!</Text>

      </ScrollView>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'azure'
  },
  containerButton: {
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 25,
    paddingTop: 30,
    paddingBottom: 20,
    textAlign: 'center',
    color: 'black'
  },
  subTitle: {
    color: 'orangered',
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic'
  },
})