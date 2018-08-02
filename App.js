import React from 'react';
import { Text, View, SafeAreaView, Image,
  WebView, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import styles from './Styles';
import MainContentView from './MainContentView';

function FooterButton(props)
{
  const {style, onPress, children, ...rest} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.footerButton, style]}
      {...rest}
      >
        {children}
    </TouchableOpacity>
    );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      backgroundColor: '#EFD5CF',
      currentView: MainContentView,
    };
  }

  footerClicked(which) {
    switch(which) {
      case 0:
        this.setState( { backgroundColor: '#76C4AE'});
        break;
      case 1:
        this.setState( { backgroundColor: '#EFD5CF'});
        break;
      case 2:
        this.setState( { backgroundColor: '#CABD80'});
        break;
    }
  }

  render() {
    const CurrentView = this.state.currentView;

    return (
      <SafeAreaView style={styles.root}>
        <StatusBar
          backgroundColor={this.state.backgroundColor}
          barStyle="dark-content"
        />
        <CurrentView backgroundColor={this.state.backgroundColor} />
        <View style={[{backgroundColor:this.state.backgroundColor},styles.footerPad]} />
        <View style={styles.footer}>
          <FooterButton onPress={() => this.footerClicked(0)} style={{backgroundColor: '#76C4AE'}} />
          <FooterButton onPress={() => this.footerClicked(1)} style={{backgroundColor: '#EFD5CF'}} />
          <FooterButton onPress={() => this.footerClicked(2)} style={{backgroundColor: '#CABD80'}} />
        </View>
      </SafeAreaView>
    );
  }
}
