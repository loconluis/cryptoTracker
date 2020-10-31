import React from 'react';
import { View, Image, Text, StyleSheet, SectionList } from 'react-native';
import Colors from 'cryptoTracker2/src/res/colors';
import Http from 'cryptoTracker2/src/libs/http';
import { FlatList } from 'react-native-gesture-handler';
import CoinMarketItem from './CoinMarketItem';

const CoinsDetails = ({ route, navigation }) => {
  const { coin } = route.params;
  const [coinDetail] = React.useState(coin);
  const [market, setMarket] = React.useState([]);
  React.useEffect(() => {
    navigation.setOptions({
      title: coinDetail.symbol,
    });
    getMarket(coinDetail.id);
  });

  const getSections = (_coin) => {
    const section = [
      {
        title: 'Market Cap',
        data: [_coin.market_cap_usd],
      },
      {
        title: 'Volume 24h',
        data: [_coin.volume24],
      },
      {
        title: 'Change 24h',
        data: [_coin.percent_change_24h],
      },
    ];

    return section;
  };

  const getMarket = async (_id) => {
    const uri = `https://api.coinlore.net/api/coin/markets/?id=${_id}`;
    console.log('uri', uri);
    const _market = await Http.instance.get(uri);
    console.log('market', _market);
    setMarket(_market);
  };

  const getSymbolIcon = (name) => {
    if (name) {
      let coinId = name.toLowerCase().replace(' ', '-');
      const uri = `https://c1.coinlore.com/img/25x25/${coinId}.png`;
      return uri;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Image
          style={styles.iconImg}
          source={{ uri: getSymbolIcon(coinDetail.name) }}
        />
        <Text style={styles.titleText}>{coinDetail.name}</Text>
      </View>
      <SectionList
        style={styles.section}
        sections={getSections(coinDetail)}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionText}>{section.title}</Text>
          </View>
        )}
      />

      <Text style={styles.marketsTitle}>Markets</Text>
      <FlatList
        style={styles.list}
        horizontal
        data={market}
        renderItem={({ item }) => <CoinMarketItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charade,
    flex: 1,
  },
  subHeader: {
    backgroundColor: 'rgba(0,0,0, 0.1)',
    padding: 16,
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
  },
  iconImg: {
    width: 25,
    height: 25,
  },
  section: {
    maxHeight: 220,
  },
  list: {
    maxHeight: 100,
    paddingLeft: 16,
  },
  sectionHeader: {
    backgroundColor: 'rgba(0,0,0, 0.2)',
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    color: Colors.white,
    fontSize: 14,
  },
  sectionText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  marketsTitle: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    marginLeft: 16,
  },
});

export default CoinsDetails;
