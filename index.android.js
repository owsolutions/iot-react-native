import React, { Component } from 'react';
import { PlacesComponent } from './components/PlacesComponent/PlacesComponent';
import { IndexComponent } from './components/IndexComponent/IndexComponent';
import { AppRegistry } from 'react-native';
import { TabNavigator, StackNavigator, addNavigationHelpers } from 'react-navigation';
import { store } from './components/store';
import { Provider, connect } from "react-redux";

const Routes = {
   home: {
     screen: IndexComponent
   },
   Places: {
     screen: PlacesComponent
   }
};

const AppNavigator = StackNavigator(Routes);

@connect(state => ({
    nav: state.nav
}))
class AppWithNavigationState extends Component {
    render() {
        return (
            <AppNavigator />
        );
    }
}
 
function SmartHomeApp () {
    return (
        <Provider store={store}>
            <AppWithNavigationState />
        </Provider>
    );
}

AppRegistry.registerComponent('smarthomeapp', () => SmartHomeApp);