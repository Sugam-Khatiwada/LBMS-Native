// File: login.js
// Purpose: Login screen for the Library Management System. Handles input, basic validation,
// network login request, and shows an inline toast for status/errors.

import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";

/**
 * LoginPage component
 * Renders email/password inputs and performs login.
 * - Validates empty fields locally
 * - Calls API via axios
 * - Shows short inline toast messages for status and errors
 */
export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState({ visible: false, message: "", type: "info" });
  const toastTimer = useRef(null);

  useEffect(() => {
    // Clean up the toast timer when the component unmounts to avoid leaks
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  /**
   * showToast
   * Displays a temporary inline toast in the page.
   * @param {string} message - message to show
   * @param {'error'|'success'|'info'} type - visual type for the toast
   * @param {number} duration - milliseconds to show the toast
   */
  const showToast = (message, type = "error", duration = 3000) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ visible: true, message, type });
    toastTimer.current = setTimeout(() => {
      setToast((t) => ({ ...t, visible: false }));
    }, duration);
  };

  /**
   * handleLogin
   * - Performs simple client-side validation for empty fields
   * - Calls the login API and handles common success/error shapes
   * - Shows appropriate toast messages for feedback
   */
  const handleLogin = async() => {
    // basic empty-field validation
    if (!email.trim() || !password.trim()) {
      // show which field is missing
      if (!email.trim()) {
        showToast("Invalid email", "error");
      } else if (!password.trim()) {
        showToast("Invalid password", "error");
      }
      return;
    }

    try {
      showToast("Attempting login...", "info", 2000);

      const response = await axios.post(
        "https://librarymanagementsystem-48c3.onrender.com/api/login",
        { email, password },
        { timeout: 10000 }
      );

      console.log("Login response:", response);

      // Reasonable assumptions about API shape:
      // - success indicated by response.data.success === true OR presence of response.data.token
      // - error message might be in response.data.message
      const data = response?.data ?? {};

      if (response.status === 200 && (data.success === true || data.token)) {
        showToast("Login successful", "success", 900);
        // navigate after a short delay so user sees the success toast
        setTimeout(() => router.push("/dashboard"), 900);
        return;
      }

      // Try to surface field-specific errors from server message
      const message = (data.message || "").toString().toLowerCase();
      if (message.includes("email")) {
        showToast("Invalid email", "error");
        return;
      }
      if (message.includes("password") || message.includes("pass")) {
        showToast("Invalid password", "error");
        return;
      }

      // fallback for invalid credentials
      showToast("Invalid credentials", "error");
    } catch (error) {
      console.error("Login error:", error);

      // If server responded with 4xx and a message, try to parse it
      const serverMsg = error?.response?.data?.message;
      if (serverMsg) {
        const m = serverMsg.toString().toLowerCase();
        if (m.includes("email")) return showToast("Invalid email", "error");
        if (m.includes("password") || m.includes("pass")) return showToast("Invalid password", "error");
        return showToast(serverMsg, "error");
      }

      // Network or CORS errors
      showToast("Network/server error. Check console and CORS settings.", "error", 5000);
    }
  };
//testings
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="flex-1 justify-center px-8 py-12">
        {/* Inline toast container - appears above the form and gives quick feedback */}
        {toast.visible && (
          <View
            className={`mb-4 px-4 py-3 rounded-lg ${
              toast.type === "success" ? "bg-green-100" : toast.type === "info" ? "bg-blue-100" : "bg-red-100"
            }`}
          >
            <Text
              className={`text-sm ${toast.type === "success" ? "text-green-800" : toast.type === "info" ? "text-blue-800" : "text-red-800"}`}
            >
              {toast.message}
            </Text>
          </View>
        )}
        <View className="bg-white rounded-2xl p-8 shadow-lg">
          <Text className="text-3xl font-bold text-gray-800 text-center mb-2">
            Welcome to Bookhub Library
          </Text>
          <Text className="text-gray-600 text-center mb-8">Sign in to manage the library</Text>
          <View className="mb-6">
            <Text className="text-gray-700 font-medium mb-2">Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-gray-50"
            />
          </View>
          <View className="mb-8">
            <Text className="text-gray-700 font-medium mb-2">Password</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              secureTextEntry
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-gray-50"
            />
          </View>
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-purple-600 py-4 rounded-lg shadow-md mb-4"
            activeOpacity={0.8}
          >
            <Text className="text-white text-lg font-semibold text-center">Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.back()}
            className="py-2"
            activeOpacity={0.7}
          >
            <Text className="text-purple-600 text-center">Back to Welcome</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}