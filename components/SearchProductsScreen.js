import { array } from 'prop-types';
import React from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ListItem, SearchBar, Button } from 'react-native-elements';
import Item from './Item';

export default class SearchProductsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
    return {
    title: 'Sản Phẩm',
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
            name: 'shopping-cart',
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
      )
  }
    };
  
  _go = () => {
    this.props.navigation.navigate('Cart')}

  constructor(props) {1
    super(props);

    this.state = {
      loading: false,
      data : [],
      error: null,
    };

    this.arrayholder = [];
  }

  makeRemoteRequest = () => {
    const url = 'https://608e321afe2e9c00171e2361.mockapi.io/api/books';
    
    this.setState({ loading: true });

    fetch(url, {
      method: 'GET',
      //Request Type
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success
        this.arrayholder = responseJson

        this.setState({
          data: this.arrayholder,
          error: responseJson.error || null,
          loading: false,  
        });
        // this.arrayholder = data;
      })
      //If response is not in json then in error
      .catch((error) => {
        // alert(JSON.stringify(error));
        console.error(error);
      });
  };

  componentDidMount() {
    this.props.navigation.setParams({ go: this._go });
    this.makeRemoteRequest();
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

  searchFilterFunction = text => {
    
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.toUpperCase()} ${item.author.toUpperCase()}}`;
      
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    
    this.setState({
      data: newData,
    });

  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Tìm kiếm"
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };


  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data = {this.state.data}
          
          renderItem={({ item }) => (
            
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {
                data: item
              })}>
              
            <Item
              leftAvatar={{ source: { uri: item.image } }}
              title={item.name}
              rightSubtitle={` ${item.price}đ`}
              rightSubtitleStyle={{color: 'red'}}
            />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}