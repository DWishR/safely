import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#fff',
  },
  footerButton: {
    flex: 1,
    height: 48,
  },
  mainScroller: {
    alignItems: 'stretch',
  },
  footerPad: {
    height: 16,
  },
  footer: {
    flexDirection: 'row',
  },
  contentItem: {
    marginLeft: 16,
    marginTop: 16,
    backgroundColor: '#ccc',
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOpacity: 1.0,
    aspectRatio: 1,
  },
  imageContent: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
  bottom: {
    height: 16,
    margin: 16,
    alignItems: 'center',
  },
});

export default styles;