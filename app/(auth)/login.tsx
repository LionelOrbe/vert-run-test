import { Button, StyleSheet } from 'react-native'
import React from 'react'
import  authenticateWithStrava  from '../auth';
import { useRouter } from "expo-router";
import { ThemedView } from '@/components/ThemedView';

export default function LoginScreen() {

  const router = useRouter();
  const handleLogin = async () => {
    console.log('handle')
    const authResult = await authenticateWithStrava();
    if (authResult) {
      console.log('Token obtenido:', authResult);
      router.push("/(tabs)");      
    }
  }

  return (
    <ThemedView style={styles.container}>
      <Button title="Login with Strava" onPress={handleLogin} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});