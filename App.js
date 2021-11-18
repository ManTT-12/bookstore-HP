import * as React from 'react';
import { View } from 'react-native';
import { createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import SearchProductsScreen from './components/SearchProductsScreen';
import DetailScreen from './components/DetailScreen';
import IndexScreen from './components/IndexScreen';
import CartScreen from './components/CartScreen';
import AboutScreen from './components/AboutScreen';
import PayScreen from './components/PayScreen';
import FlashMessage from "react-native-flash-message";
import EditCartScreen from './components/EditCartScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AppContainer/>
        <FlashMessage position="top" />
      </View>
    )
  }
}

const AppNavigator = createStackNavigator({
  Index: {
    screen: IndexScreen,
    navigationOptions: {
      header:null
		}
  },
  Search: {
    screen: SearchProductsScreen,
  },
  Details: {
    screen: DetailScreen,
  },
  Cart: {
    screen: CartScreen,
  },
  Edit: {
    screen: EditCartScreen,
  },
  About: {
    screen: AboutScreen,
  },
  Pay: {
    screen: PayScreen,
  },
}, {
  initialRouteName: 'Index',
});

const AppContainer = createAppContainer(AppNavigator);
