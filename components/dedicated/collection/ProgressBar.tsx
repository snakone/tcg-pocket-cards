import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ProgressBarProps {
  percentage: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  const progress = Number(percentage);

  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: `${progress}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 68,
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 8
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'mediumaquamarine',
  },
});

export default ProgressBar;