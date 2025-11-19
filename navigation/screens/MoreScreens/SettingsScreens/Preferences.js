import { View, Text, Switch, StyleSheet } from "react-native";
import { useState } from "react";

export default function PreferencesScreen({ bgColor }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [largeText, setLargeText] = useState(false);
  const [devotionAnimation, setDevotionAnimation] = useState(true); // new state

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>App Preferences</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Use Large Text</Text>
        <Switch value={largeText} onValueChange={setLargeText} />
      </View>

      <Text style={[styles.title, { marginTop: 24 }]}>Accessibility</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Devotion Button Animation</Text>
        <Switch
          value={devotionAnimation}
          onValueChange={setDevotionAnimation}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginVertical: 12 },
  row: { flexDirection: "row", justifyContent: "space-between", marginVertical: 6 },
  label: { fontSize: 16 },
});