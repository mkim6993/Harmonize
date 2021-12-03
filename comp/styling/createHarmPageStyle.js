import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigContainer: {
    width: '90%',
    height: '90%',
    backgroundColor: '#e2ef98',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  controls: {
    flexDirection: 'row',
  },
  playPauseContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: '20%'
  },
  pauseSymbol: {
    width: 20,
    height: 25,
    backgroundColor: 'white',
    borderColor: 'red',
    borderRightWidth: 5,
    borderLeftWidth: 5,
  },
  triangleRight: {
  width: 0,
  height: 0,
  borderLeftWidth: 10,
  borderRightWidth: 10,
  borderBottomWidth: 30,
  borderStyle: 'solid',
  backgroundColor: 'transparent',
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
  borderBottomColor: 'red',
  transform: [{rotate: '90deg'}],
  },
});
