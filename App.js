import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image,
  WebView, StatusBar, ScrollView } from 'react-native';

function HeaderButton(props)
{
  const {style, children, ...rest} = props;
  return (
    <View {...rest} style={[styles.headerButton, style]}>{children}</View>
    );
}

function ContentBox(props)
{
  const {style, children, ...rest} = props;
  return (
    <View {...rest} style={[styles.contentItem, style]}>{children}</View>
    );
}

const ImageContent = props => {
  const {style, children, ...rest} = props;
  return (
    <Image {...rest} style={[styles.imageContent, style]}>{children}</Image>
  );
};

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar
          backgroundColor="#7CE0F9"
          barStyle="dark-content"
          animated
        />
        <SafeAreaView style={styles.root}>
          <View style={styles.header}>
            <HeaderButton style={{backgroundColor: '#7CE0F9'}} />
            <HeaderButton style={{backgroundColor: '#76C4AE'}} />
            <HeaderButton style={{backgroundColor: '#CABD80'}} />
            <HeaderButton style={{backgroundColor: '#EFD5CF'}} />
          </View>
          <ScrollView contentContainerStyle={styles.mainScroller}>
            <ContentBox><ImageContent source={require('./img/a.jpg')} /></ContentBox>
            <ContentBox><WebView source={{uri: 'http://www.dwishr.com/react_360_hello'}} /></ContentBox>
            <ContentBox><ImageContent source={require('./img/b.jpg')} /></ContentBox>
            <ContentBox><WebView source={{uri: 'http://www.dwishr.com/react_360_multi'}} /></ContentBox>
            <ContentBox><Text>E</Text></ContentBox>
            <ContentBox><WebView source={{uri: 'https://www.facebook.com'}} /></ContentBox>
            <ContentBox><Text>F</Text></ContentBox>
            <View style={styles.footer}><Text>Bottom</Text></View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#7CE0F9',
  },
  header: {
    flexDirection: 'row',
  },
  headerButton: {
    flex: 1,
    height: 48,
  },
  mainScroller: {
    alignItems: 'stretch',
    backgroundColor: '#bbb',
  },
  contentItem: {
    marginLeft: 16,
    marginTop: 16,
    backgroundColor: '#aaa',
    aspectRatio: 1,
  },
  imageContent: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
  footer: {
    height: 16,
  },
});
