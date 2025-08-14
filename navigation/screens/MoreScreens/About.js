import { View, Text, StyleSheet } from 'react-native';

function About({ bgColor }) {
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.subtitle}>This is a placeholder screen.</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#718096',
  },
});
