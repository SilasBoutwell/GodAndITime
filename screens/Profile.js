
import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/styles';

function Profile({ bgColor }) {
  return (
    <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center' }, styles.container, { backgroundColor: bgColor }]}>
      <Text>Profile Screen</Text>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
  }
});
