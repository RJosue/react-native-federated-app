import React from 'react';
import { Text, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  text: {
    fontSize: 15,
    color: 'blue',
    fontWeight: '700',
    paddingHorizontal: 24,
  },
});

type ColorTextType = {
  text?: string;
};

const ColorText = ({ text = 'Application 1' }: ColorTextType) => (
  <Text style={style.text}>{text}</Text>
);

export default ColorText;
