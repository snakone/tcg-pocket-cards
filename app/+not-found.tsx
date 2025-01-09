import { Link, Stack } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { NotFoundStyles } from '@/shared/styles/component.styles';
import React from 'react';

export default function NotFoundScreen() {
  const styles = NotFoundStyles;
  
  return (
    <>
      <Stack.Screen options={{headerShown: false}} />
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={{textAlign: 'center', fontSize: 22}}>
          Lo sentimos, la página que intentas acceder no existe.
        </ThemedText>
        <Link href="./" style={styles.link}>
          <ThemedText type="link">Vuelve a la pantalla de inicio!</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}
