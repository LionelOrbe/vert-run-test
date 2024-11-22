import { Image, StyleSheet, Platform, Alert } from 'react-native';
import { useEffect } from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useQuery } from 'react-query';

export default function HomeScreen() {
  useEffect(() => {
   
  }, [])

  const fetchData = () => {
    const { isLoading, error, data } = useQuery('repoData', () =>
      fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
        res.json()
      )
    )
  
    if (isLoading) return 'Loading...'
  
    if (error) return Alert.alert('Error al obtener data: ')
  
    return data
  };
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/sports.png')}
          style={styles.image}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>       
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  image: {
    height: "100%",
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
