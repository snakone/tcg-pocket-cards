import { StyleSheet } from 'react-native';

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TradeUserItem({}) {
  return (
    <ThemedView style={[
      tradeItemStyles.item, { 
        
      }
    ]}>
      <ThemedText>Hello</ThemedText>
    </ThemedView> 
  )
}

const tradeItemStyles = StyleSheet.create({
  item: {
    paddingVertical: 12, 
    paddingHorizontal: 16, 
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 4px', 
    borderRadius: 8,
    marginBottom: 20
  },
});