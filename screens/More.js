
import { View, Text, StyleSheet } from 'react-native';

import { GlobalStyles } from '../constants/styles';

function More() {
  return (
    <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center' }, styles.container]}>
      <Text>More Screen</Text>
    </View>
  );
}

export default More;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.BackgroundColor,
  }
});
