import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const MoreButton = ({ label, icon, isLast = false, onPress }) => {
  return (
    <TouchableOpacity style={[styles.row, isLast && styles.lastRow]} onPress={onPress} activeOpacity={0.6}>
      <View style={styles.iconWrapper}>
        <FontAwesomeIcon style={styles.icon} icon={icon} size={22} color="#525C6EFF" />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default MoreButton;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  iconWrapper: {
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    marginRight: 12,
    marginVertical: 2,
  },
  label: {
    fontSize: 16,
    lineHeight: 22,
    color: '#2D3748',
    fontWeight: '500',
  },
});
