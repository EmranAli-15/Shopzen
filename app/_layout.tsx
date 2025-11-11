import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { StyleSheet, View } from 'react-native';


export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    //   <Stack screenOptions={{ headerShown: false }}>
    //   </Stack>
    //   <StatusBar style="auto" />
    // </ThemeProvider>
    <View style={styles.container}>
      <Stack screenOptions={{ headerShown: false }}>
      </Stack>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
