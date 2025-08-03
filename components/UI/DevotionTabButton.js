import { useNavigation, useTheme } from '@react-navigation/native';
import { View, TouchableOpacity, StyleSheet, Platform, Animated } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { GlobalStyles } from '../../constants/styles';
import { useEffect, useRef } from 'react';

function DevotionTabButton({ props, color }) {
  const navigation = useNavigation();
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <TouchableOpacity
      {...props}
      onPress={() => navigation.navigate('DevotionStack')}
      activeOpacity={0.85} // Slight dim when pressed
      style={styles.touchable}
    >
      <Animated.View style={[{ transform: [{ scale: pulseAnim }] }]}>
        <View style={[styles.buttonContainer, { backgroundColor: color }]}>
          <FontAwesomeIcon icon={faAdd} size={28} color="#fff" />
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}

export default DevotionTabButton;

const styles = StyleSheet.create({
  touchable: {
    top: -18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
});
