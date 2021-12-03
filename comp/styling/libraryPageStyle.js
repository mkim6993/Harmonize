import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bigContainer: {
    width: '50%',
    height: '50%',
    backgroundColor: '#e2ef98',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
  },
  playPauseContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: '20px'
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
  pauseSymbol: {
    width: 20,
    height: 25,
    backgroundColor: 'white',
    borderColor: 'red',
    borderRightWidth: 5,
    borderLeftWidth: 5,
  },
  controls: {
    flexDirection: 'row',
  },
  recordButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 5,
    color: 'white',
    margin: 10,
    fontFamily: 'monaco',
  },
  recordButtonRed: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 5,
    color: 'white',
    margin: 10,
    fontFamily: 'monaco',
    shadowColor: "grey",
    shadowOpacity: 1,
    shadowRadius: 10
  },
  tracks: {
    backgroundColor: '#070a1d',
    flex: 1,
    padding: 10,
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    position: 'relative',
  },
  itemContainer: {
    backgroundColor: 'red',
    padding: 15,
    margin: 20,
    marginRight: 50,
  }
});
