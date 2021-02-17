import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import RoomComponent from './Room';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <RoomComponent />
      </SafeAreaView>
    </>
  );
};

export default App;
