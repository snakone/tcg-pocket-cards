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
    height: 8,
    backgroundColor: 'rgb(192, 192, 192)',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 8,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'mediumaquamarine',
  },
});

export default ProgressBar;