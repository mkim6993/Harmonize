import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bigContainer: {
    width: '90%',
    height: '90%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: .5,
    borderRadius: 5,

  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  playPauseContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: '20%'
  },
  triangleRight: {
    backgroundColor: '#e2ef98',
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
    backgroundColor: '#e2ef98',
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
  },
  itemView: {
    backgroundColor: 'black',
    height: '30%',
    width: '90%',
    borderRadius: 5,
    borderWidth: .5,
    borderColor: 'black',
  },
  audioItem: {
    backgroundColor: 'black',
    padding: 10,
    margin: 1,
    justifyContent: 'center',
    borderRadius: 19,
  }
});
