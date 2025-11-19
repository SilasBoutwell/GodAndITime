import { View, Text, Switch, StyleSheet } from "react-native";
import { useState } from "react";

export default function ThemeScreen({ bgColor }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>Theme</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  row: { flexDirection: "row", justifyContent: "space-between", marginVertical: 12 },
  label: { fontSize: 16 },
});
