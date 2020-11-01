import React from 'react';

import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import CoinItem from './CoinItem';
import CoinsSearch from './CoinsSearch';
import Http from 'cryptoTracker2/src/libs/http';
import Colors from 'cryptoTracker2/src/res/colors';

const CoinsScreen = ({ navigation }) => {
  const [coins, setCoins] = React.useState([]);
  const [allCoins, setAllCoins] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    getData();
  }, []);

  const handlePress = (coin) => {
    navigation.navigate('CoinsDetail', { coin });
  };
  const getData = async () => {
    try {
      setLoading(true);
      const _coins = await Http.instance.get(
        'https://api.coinlore.net/api/tickers/',
      );
      setCoins(_coins.data);
      setAllCoins(_coins.data);
    } catch (err) {
      console.log('err in getData', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query = '') => {
    const coinsFiltered = allCoins.filter((coin) => {
      return (
        coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase())
      );
    });

    console.log('coinsFiltered', coinsFiltered);

    setCoins(coinsFiltered);
  };

  return (
    <View style={styles.container}>
      <CoinsSearch onChange={handleSearch} />
      {loading ? <ActivityIndicator color="#FFF" size="large" /> : null}
      <FlatList
        data={coins}
        renderItem={({ item }) => (
          <CoinItem item={item} onPress={() => handlePress(item)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
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
