

import { View, Text, StyleSheet } from 'react-native';

import { GlobalStyles } from '../constants/styles';

function Share({ bgColor }) {
  return (
    <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center' }, styles.container, { backgroundColor: bgColor }]}>
      <Text>Share with friends Screen</Text>
    </View>
  );
}

export default Share;

const styles = StyleSheet.create({
  container: {
  }
});
