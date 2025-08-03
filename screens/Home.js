
import { View, Text, StyleSheet } from 'react-native';

import { GlobalStyles } from '../constants/styles';

function Home() {
  return (
    <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center' }, styles.container]}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.BackgroundColor,
  }
});
