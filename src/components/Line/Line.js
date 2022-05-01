import React from 'react';
import { View } from 'react-native';

const Line = (props) => {
  return (
    <View
      style={{
        borderColor: 'black',
        borderTopWidth: 1,
        ...props.style,
      }}
    ></View>
  );
};

export default Line;