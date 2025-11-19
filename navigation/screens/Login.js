import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { login, resetPassword } from "../../auth";
import { GlobalStyles } from "../../constants/styles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin() {
  try {
    await login(email, password);
  } catch (err) {
    console.error("Login failed:", err);
    Alert.alert("Error", "Login failed. Please check your email and password.");
  }
}

  async function handleResetPassword() {
    try {
      setError(""); setMessage("");
      await resetPassword(email);
      setMessage("Password reset email sent!");
    } catch (err) {
      setError("Failed to send reset email. Check your email address.");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to God and I Time</Text>
      <Text style={styles.caption}>Sign in to get started or create a new account</Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}
      {message ? <Text style={styles.message}>{message}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.inlineButtons}>
        <View style={styles.button}>
          <Button title="Login" onPress={handleLogin} color={GlobalStyles.colors.Accent500} />
        </View>
        <View style={styles.button}>
          <Button
            title="Register"
            onPress={() => navigation.navigate("Register")} // ✅ go to RegisterScreen
            color={GlobalStyles.colors.Accent500}
          />
        </View>
      </View>

      <TouchableOpacity onPress={handleResetPassword}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: GlobalStyles.colors.BackgroundColor,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: GlobalStyles.colors.Accent500,
  },
  caption: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "black",
  },
  input: {
    width: "100%",
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  error: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
  message: {
    color: "green",
    marginBottom: 10,
    textAlign: "center",
  },
  inlineButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
  link: {
    marginTop: 15,
    textAlign: "center",
    color: GlobalStyles.colors.Accent500,
    fontWeight: "600",
  },
});
