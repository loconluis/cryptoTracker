import React from 'react';
import { TextInput, Platform, View, StyleSheet } from 'react-native';
import Colors from 'cryptoTracker2/src/res/colors';

const CoinsSearch = ({ onChange }) => {
  const [text, setText] = React.useState('');
  const handleChangeText = (query) => {
    setText(query);
    if (onChange) {
      onChange(query);
    }
  };
  return (
    <View>
      <TextInput
        style={[
          styles.textInput,
          Platform.OS == 'ios' ? styles.textInputIOS : styles.textInputAndroid,
        ]}
        value={text}
        placeholder="Search coin"
        onChangeText={handleChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingLeft: 16,
    color: 'white',
  },
  textInputAndroid: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.zircon,
  },
  textInputIOS: {
    margin: 8,
    borderRadius: 8,
  },
});

export default CoinsSearch;
