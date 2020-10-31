import React from 'react';

import {View, Text, Pressable, StyleSheet} from 'react-native';
import Http from 'cryptoTracker2/src/libs/http';

const CoinsScreen = ({navigation}) => {
  const getData = async () => {
    try {
      const coins = await Http.instance.get(
        'https://api.coinlore.net/api/tickers/',
      );
      console.log('res', coins);
    } catch (err) {
      console.log('err in getData', err);
    }
  };
  React.useEffect(() => {
    getData();
  }, []);
  const handlePress = () => {
    console.log('Go to details');
    navigation.navigate('CoinsDetail');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Hello Coins</Text>
      <Pressable style={styles.btn} onPress={handlePress}>
        <Text style={styles.btnText}>Ir a details</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: '#fff',
    textAlign: 'center',
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default CoinsScreen;
