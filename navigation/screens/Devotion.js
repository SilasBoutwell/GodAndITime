
import { View, Text, StyleSheet } from 'react-native';

function Devotion({ bgColor }) {
  return (
    <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center' }, styles.container, { backgroundColor: bgColor }]}>
      <Text>Devotion Screen</Text>
    </View>
  );
}

export default Devotion;

const styles = StyleSheet.create({
  container: {

  }
});
