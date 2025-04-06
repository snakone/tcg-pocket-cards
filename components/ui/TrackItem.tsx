import { ThemedView } from "../ThemedView";

export const TrackItem = ({index}: {index: number}) => {
  if (index === 0 || index === 10) return null;
  return (
    <ThemedView style={{
      width: 2,
      height: 4,
      right: -10,
      backgroundColor: '#777',
      position: 'relative',
      zIndex: 1000,
      opacity: 1
    }}>  
    </ThemedView>
)}
