import React from 'react';
import {Button} from 'react-native-paper';

function ButtonCom() {
  return (
    <Button
      icon="camera"
      mode="contained"
      onPress={() => console.log('Pressed')}>
      Press me
    </Button>
  );
}

export default ButtonCom;
