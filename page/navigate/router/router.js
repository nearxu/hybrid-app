import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
// import {createBottomTabNavigator} from '../tab/bottom';
import React from 'react';
import {View, Text, Button} from 'react-native';
import TodoApp from '../../todo';
import {
  // HomeScreen,
  SearchScreen,
  FavoritesScreen,
  ProfileScreen,
} from '../components';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerRight: () => (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Button
          title="Go to home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Text>{navigation.getParam('itemId')}</Text>
      </View>
    );
  }
}
// const TabNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
//   Details: {
//     screen: DetailsScreen,
//   },
// });

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: TodoApp,
  },
});

export default createAppContainer(TabNavigator);
