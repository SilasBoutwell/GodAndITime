import { View, Text, StyleSheet } from 'react-native';

function VersionInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VersionInfo</Text>
      <Text style={styles.subtitle}>This is a placeholder screen.</Text>
    </View>
  );
};

export default VersionInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
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
