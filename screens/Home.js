
import { View, Text, StyleSheet } from 'react-native';

import { GlobalStyles } from '../constants/styles';

function Home({ bgColor }) {
  return (
    <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center' }, styles.container, {backgroundColor: bgColor}]}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {

  }
});
